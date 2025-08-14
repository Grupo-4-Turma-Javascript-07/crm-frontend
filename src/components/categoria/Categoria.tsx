import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { api } from "../../services/Service";

interface Categoria {
  id: number;
  nome: string;
}

const estadoInicialForm = {
  nome: "",
};

function Categoria() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [formData, setFormData] = useState(estadoInicialForm);
  const [categoriaEmEdicao, setCategoriaEmEdicao] = useState<Categoria | null>(null);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await api.get("/categorias", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Categorias recebidas:", res.data);
      setCategorias(res.data);
    } catch (err) {
      console.error("Erro ao buscar categorias:", err);
      setError("Erro ao buscar categorias");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!formData.nome.trim()) {
      alert("Por favor preencha o nome da categoria");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      if (categoriaEmEdicao) {
        await api.put(`/categorias/${categoriaEmEdicao.id}`, formData, { headers });
      } else {
        await api.post("/categorias", formData, { headers });
      }

      setFormData(estadoInicialForm);
      setCategoriaEmEdicao(null);
      buscarCategorias();
    } catch (err) {
      console.error("Erro ao salvar categoria:", err);
      alert("Erro ao salvar categoria");
    }
  }

  async function handleDelete(id: number) {
    if (window.confirm("Tem certeza que deseja excluir esta categoria?")) {
      try {
        const token = localStorage.getItem('token');
        await api.delete(`/categorias/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategorias(categorias.filter((cat) => cat.id !== id));
      } catch (err) {
        console.error("Erro ao excluir categoria:", err);
        alert("Erro ao excluir categoria");
      }
    }
  }

  function handleEdit(categoria: Categoria) {
    setCategoriaEmEdicao(categoria);
    setFormData({
      nome: categoria.nome,
    });
  }

  function handleCancel() {
    setCategoriaEmEdicao(null);
    setFormData(estadoInicialForm);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-96">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-roxo-100"></div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-96">
      <p className="text-rosa-100 text-xl">{error}</p>
    </div>
  );

  return (
    <div id="categoria" className="min-h-screen w-full max-w-6xl mx-auto px-4 py-8 mt-20">
      {/* Card do Formulário */}
      <div className="bg-black border-roxo-200/30 p-8 rounded-xl shadow-2xl mb-8 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-branco mb-8 text-center">
          {categoriaEmEdicao ? "Editar Categoria" : "➕ Nova Categoria"}
        </h2>

        <div onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <label className="block text-sm font-semibold text-roxo-100 mb-2 transition-colors group-focus-within:text-roxo-100">
              Nome da Categoria
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="block w-full bg-preto/50 border border-roxo-200/50 rounded-lg shadow-sm p-4 text-branco placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300
                        hover:border-roxo-100/70"
              placeholder="Digite o nome da categoria..."
              required
            />
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-lg text-sm font-bold rounded-lg text-branco 
                        bg-gradient-to-r from-roxo-100 to-rosa-100 hover:from-roxo-50 hover:to-rosa-200 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-100
                        transition-all duration-300 transform hover:scale-105"
            >
              {categoriaEmEdicao ? "Salvar Alterações" : "Adicionar Categoria"}
            </button>
            
            {categoriaEmEdicao && (
              <button
                onClick={handleCancel}
                className="py-3 px-6 border border-gray-600 shadow-lg text-sm font-bold rounded-lg text-gray-300 
                          bg-gray-800 hover:bg-gray-700 hover:text-branco 
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                          transition-all duration-300"
              >
                ❌ Cancelar
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lista de Categorias */}
      <div className="bg-black border border-roxo-200/30 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-branco mb-8 text-center">
          Categorias ({categorias.length})
        </h2>

        {categorias.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-400 text-lg">Nenhuma categoria encontrada.</p>
            <p className="text-gray-500 text-sm mt-2">Adicione sua primeira categoria usando o formulário acima!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {categorias.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 
                          border border-roxo-200/30 rounded-lg bg-preto/30 backdrop-blur-sm
                          hover:border-roxo-100/50 hover:bg-preto/50 transition-all duration-300 group"
              >
                <div className="mb-3 sm:mb-0 flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-roxo-100 to-rosa-100"></div>
                    <span className="font-bold text-branco text-lg group-hover:text-roxo-100 transition-colors duration-300">
                      {cat.nome}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 ml-6">ID: {cat.id}</p>
                </div>

                <div className="flex space-x-3 self-end sm:self-center">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="py-2 px-4 text-sm font-semibold rounded-lg text-preto bg-gradient-to-r from-azul-100 to-azul-200
                              hover:from-azul-200 hover:to-azul-100 transition-all duration-300 transform hover:scale-105
                              focus:outline-none focus:ring-2 focus:ring-azul-100"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="py-2 px-4 text-sm font-semibold rounded-lg text-branco bg-gradient-to-r from-rosa-200 to-rosa-100
                              hover:from-rosa-100 hover:to-rosa-200 transition-all duration-300 transform hover:scale-105
                              focus:outline-none focus:ring-2 focus:ring-rosa-200"
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Categoria;
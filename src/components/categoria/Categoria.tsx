import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { api } from "../../services/Service";

interface Categoria {
  id: number;
  nome: string;
}

const estadoInicialForm = {
  nome: "",
};

interface Paginacao<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

function Categoria() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categorias, setCategorias] = useState<Paginacao<Categoria> | null>(null);
  const [formData, setFormData] = useState(estadoInicialForm);
  const [categoriaEmEdicao, setCategoriaEmEdicao] = useState<Categoria | null>(null);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await api.get("/categorias", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategorias(res.data);
    } catch (err) {
      console.error(err);
      setError("Erro ao buscar categorias");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!formData.nome.trim()) {
      alert("Preencha o nome da categoria");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

      if (categoriaEmEdicao) {
        await api.put(`/categorias/${categoriaEmEdicao.id}`, formData, { headers });
      } else {
        await api.post("/categorias", formData, { headers });
      }

      setFormData(estadoInicialForm);
      setCategoriaEmEdicao(null);
      buscarCategorias();
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar categoria");
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Tem certeza que deseja excluir esta categoria?")) return;
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/categorias/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setCategorias(prev =>
        prev ? { ...prev, data: prev.data.filter(c => c.id !== id) } : prev
      );
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir categoria");
    }
  }

  function handleEdit(categoria: Categoria) {
    setCategoriaEmEdicao(categoria);
    setFormData({ nome: categoria.nome });
  }

  function handleCancel() {
    setCategoriaEmEdicao(null);
    setFormData(estadoInicialForm);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-roxo-100"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-96">
        <p className="text-rosa-100 text-xl">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      {/* Formulário */}
      <div className="bg-[#2a2a2a] border border-roxo-200/30 rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          {categoriaEmEdicao ? "Editar Categoria" : "➕ Nova Categoria"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Nome da Categoria</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite o nome da categoria..."
              className="block w-full bg-[#1b1b1b] border border-roxo-200/50 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
              required
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="flex-1 inline-flex justify-center py-2 px-6 border border-transparent shadow-lg text-sm font-bold rounded-lg text-white
                        bg-gradient-to-r from-roxo-100 to-rosa-100 hover:from-roxo-50 hover:to-rosa-200
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-100 transition-all duration-300 transform hover:scale-105"
            >
              {categoriaEmEdicao ? "Salvar Alterações" : "Adicionar Categoria"}
            </button>
            {categoriaEmEdicao && (
              <button
                type="button"
                onClick={handleCancel}
                className="py-2 px-6 border border-gray-600 text-gray-300 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
              >
                ❌ Cancelar
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Lista de categorias */}
      <div className="bg-[#2a2a2a] border border-roxo-200/30 rounded-xl shadow-lg overflow-hidden">
        <div className="border-b px-6 py-4">
          <h2 className="text-white text-xl font-bold">Categorias ({categorias?.data.length || 0})</h2>
        </div>

        {categorias?.data.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-6xl mb-4">📭</div>
            Nenhuma categoria encontrada.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#1b1b1b]/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">Nome</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-gray-300 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-roxo-200/30">
              {categorias?.data?.map(cat => (
                <tr key={cat.id} className="hover:bg-[#2a2a2a]/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-white">{cat.nome}</td>
                  <td className="px-6 py-4 text-gray-300">{cat.id}</td>
                  <td className="px-6 py-4 flex justify-end space-x-3">
                    <button
                    onClick={() => handleEdit(cat)}
                    className="py-1 px-3 text-sm border font-semibold rounded-lg text-white bg-gradient-to-r cursor-pointer hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      ✏️ Editar 
                      </button>
                      <button
                      onClick={() => handleDelete(cat.id)}
                      className="py-1 px-3 text-sm border font-semibold rounded-lg text-white bg-gradient-to-r cursor-pointer hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        🗑️ Excluir 
                        </button>
                        </td>
                        </tr>
                      ))}
                      </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categoria;



import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { api } from '../api';


interface CategoriaSimples { id: number; nome: string; }
interface Produto { id: number; nome: string; preco: number; estoque: number; opt: boolean; categoria: CategoriaSimples; }

const estadoInicialForm = { nome: '', preco: 0, estoque: 0, opt: true, categoriaId: '', };

function ProdutoCrud() {
  
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<CategoriaSimples[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(estadoInicialForm);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState<Produto | null>(null);

  
  useEffect(() => {
    async function buscarDadosIniciais() {
      setLoading(true);
      try {
        const [respostaProdutos, respostaCategorias] = await Promise.all([
          api.get('/produtos'),
          api.get('/categorias'),
        ]);
        setProdutos(respostaProdutos.data);
        setCategorias(respostaCategorias.data);
      } catch (err) {
        setError('Falha ao carregar dados. Tente novamente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    buscarDadosIniciais();
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = event.target;
    const isCheckbox = type === 'checkbox';
    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? (event.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    const dadosParaApi = {
      nome: formData.nome,
      preco: parseFloat(String(formData.preco)),
      estoque: parseInt(String(formData.estoque), 10),
      opt: formData.opt,
      categoria: {
        id: parseInt(formData.categoriaId, 10),
      },
    };
    if (!dadosParaApi.nome || dadosParaApi.preco <= 0 || !dadosParaApi.categoria.id) {
      setError('Por favor, preencha os campos obrigatórios corretamente.');
      return;
    }
    try {
      if (produtoEmEdicao) {
        await api.put(`/produtos/${produtoEmEdicao.id}`, dadosParaApi);
      } else {
        await api.post('/produtos', dadosParaApi);
      }
      setFormData(estadoInicialForm);
      setProdutoEmEdicao(null);
      const respostaProdutos = await api.get('/produtos');
      setProdutos(respostaProdutos.data);
    } catch (err: any) {
      if (err.response) {
        const status = err.response.status;
        const message = err.response.data?.message || 'Ocorreu um erro inesperado.';
        switch (status) {
          case 409: setError(`Conflito: ${message}`); break;
          case 404: setError(`Não encontrado: ${message}`); break;
          case 400: setError(`Dados inválidos: ${message}`); break;
          default: setError(`Erro ${status}: ${message}`); break;
        }
      } else {
        setError('Não foi possível conectar ao servidor.');
      }
    }
  }

  function handleEdit(produto: Produto) {
    setProdutoEmEdicao(produto);
    setFormData({
      nome: produto.nome,
      preco: produto.preco,
      estoque: produto.estoque,
      opt: produto.opt,
      categoriaId: String(produto.categoria.id),
    });
  }

  function handleCancelEdit() {
    setProdutoEmEdicao(null);
    setFormData(estadoInicialForm);
  }

  async function handleDelete(id: number) {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await api.delete(`/produtos/${id}`);
        setProdutos(produtos.filter((p) => p.id !== id));
      } catch {
        setError('Erro ao excluir o produto.');
      }
    }
  }

  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      
      <div className="bg-[var(--color-preto)] border border-[var(--color-roxo-200)] rounded-xl shadow-lg mb-10">
        <div className="border-b border-[var(--color-roxo-200)] px-6 py-4">
            <h2 className="text-xl text-white">
              {produtoEmEdicao ? 'Editar Produto' : 'Adicionar Novo Produto'}
            </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 lg:col-span-1">
            <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-1">Nome do Produto</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} required 
                   className="block w-full bg-[var(--color-roxo-200)] border border-[var(--color-roxo-50)] rounded-lg shadow-sm py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-roxo-100)] focus:border-[var(--color-roxo-100)]" />
          </div>
          
          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-slate-300 mb-1">Preço (R$)</label>
            <input type="number" id="preco" name="preco" value={formData.preco} onChange={handleInputChange} required step="0.01" min="0" 
                   className="block w-full bg-[var(--color-roxo-200)] border border-[var(--color-roxo-50)] rounded-lg shadow-sm py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-roxo-100)] focus:border-[var(--color-roxo-100)]" />
          </div>
         
          <div>
            <label htmlFor="estoque" className="block text-sm font-medium text-slate-300 mb-1">Estoque</label>
            <input type="number" id="estoque" name="estoque" value={formData.estoque} onChange={handleInputChange} required step="1" min="0"
                   className="block w-full bg-[var(--color-roxo-200)] border border-[var(--color-roxo-50)] rounded-lg shadow-sm py-2 px-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-roxo-100)] focus:border-[var(--color-roxo-100)]" />
          </div>
          
          <div>
            <label htmlFor="categoriaId" className="block text-sm font-medium text-slate-300 mb-1">Categoria</label>
            <select id="categoriaId" name="categoriaId" value={formData.categoriaId} onChange={handleInputChange} required 
                    className="block w-full bg-[var(--color-roxo-200)] border border-[var(--color-roxo-50)] rounded-lg shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roxo-100)] focus:border-[var(--color-roxo-100)]">
              <option value="" disabled className="text-gray-500">Selecione...</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.id} className="bg-[var(--color-roxo-200)] text-white">{cat.nome}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center self-end pb-2">
            <input type="checkbox" id="opt" name="opt" checked={formData.opt} onChange={handleInputChange} className="h-4 w-4 rounded bg-slate-600 border-slate-500 text-[var(--color-roxo-100)] focus:ring-[var(--color-roxo-100)]" />
            <label htmlFor="opt" className="ml-3 block text-sm font-medium text-slate-300">Produto Ativo</label>
          </div>
         
          <div className="md:col-span-2 lg:col-span-3 flex items-center space-x-4 pt-2">
            <button type="submit" 
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-bold rounded-lg text-white bg-gradient-to-r from-[var(--color-roxo-100)] to-[var(--color-rosa-100)] hover:from-[var(--color-roxo-50)] hover:to-[var(--color-rosa-200)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-cinza)] focus:ring-[var(--color-roxo-100)] transform hover:scale-105 transition-all duration-200">
              {produtoEmEdicao ? 'Salvar Alterações' : 'Adicionar Produto'}
            </button>
            {produtoEmEdicao && ( 
              <button type="button" onClick={handleCancelEdit} 
                      className="py-2 px-6 border border-[var(--color-roxo-200)] shadow-sm text-sm font-bold rounded-lg text-slate-200 bg-[var(--color-roxo-200)]/50 hover:bg-[var(--color-roxo-200)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-cinza)] focus:ring-slate-500 transition-colors duration-200">
                Cancelar
              </button>
            )}
          </div>
        </form>
        {error && <p className="text-red-400 mt-4 px-6 pb-4 font-semibold">{error}</p>}
      </div>

      
      <div className="bg-[var(--color-preto)] border border-[var(--color-roxo-200)] rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-[var(--color-roxo-200)] px-6 py-4">
          <h2 className="text-xl text-white">Lista de Produtos</h2>
        </div>
        {loading && <p className="p-6 text-slate-400">Carregando...</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[var(--color-cinza)]/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Preço</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Estoque</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Categoria</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Ativo</th>
                <th className="px-6 py-3 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-roxo-200)]">
              {produtos.map(produto => (
                <tr key={produto.id} className="hover:bg-[var(--color-roxo-200)]/20 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{produto.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{produto.estoque}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{produto.categoria?.nome || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${produto.opt ? 'bg-[var(--color-azul-100)]/20 text-[var(--color-azul-100)]' : 'bg-[var(--color-rosa-200)]/20 text-[var(--color-rosa-200)]'}`}>
                      {produto.opt ? 'Sim' : 'Não'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex justify-end space-x-4">
                      <button onClick={() => handleEdit(produto)} className="font-medium text-[var(--color-roxo-100)] hover:text-white">Editar</button>
                      <button onClick={() => handleDelete(produto.id)} className="font-medium text-[var(--color-rosa-100)] hover:text-white">Excluir</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCrud;
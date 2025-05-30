"use client"

import { useState } from "react"
import { Search, Plus, Save, Trash2, Edit } from "lucide-react"
import styles from "../css/EstoqueCadastrar.module.css"

export default function EstoqueCadastrar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [formData, setFormData] = useState({
    codigo: "",
    descricao: "",
    categoria: "",
    unidade: "",
    valor: "",
  })
  const [editingId, setEditingId] = useState(null)

  // Dados mockados dos produtos
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      codigo: "COD001",
      descricao: "COXINHA DE FRANGO",
      categoria: "ALIMENTO",
      valor: 0.75,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 2,
      codigo: "COD002",
      descricao: "ENROLADO DE SALSICHA",
      categoria: "ALIMENTO",
      valor: 0.75,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 3,
      codigo: "COD003",
      descricao: "MINICHURROS",
      categoria: "ALIMENTO",
      valor: 0.75,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 4,
      codigo: "COD004",
      descricao: "RISOLE DE CAMARÃO",
      categoria: "ALIMENTO",
      valor: 0.75,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 5,
      codigo: "COD005",
      descricao: "RISOLE DE PIZZA",
      categoria: "ALIMENTO",
      valor: 0.75,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 6,
      codigo: "COD006",
      descricao: "BOLINHA DE QUEIJO",
      categoria: "ALIMENTO",
      valor: 0.25,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 7,
      codigo: "COD007",
      descricao: "QUIBE",
      categoria: "ALIMENTO",
      valor: 0.3,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 8,
      codigo: "COD008",
      descricao: "MINI PIZZA",
      categoria: "ALIMENTO",
      valor: 0.3,
      unidade: "UND",
      ativo: true,
    },
    {
      id: 9,
      codigo: "COD009",
      descricao: "PASTELZINHO DE CARNE",
      categoria: "ALIMENTO",
      valor: 0.25,
      unidade: "UND",
      ativo: true,
    },
  ])

  const categorias = ["ALIMENTO", "BEBIDA", "SOBREMESA", "LANCHE"]
  const unidades = ["UND", "KG", "LT", "ML", "G"]

  const itemsPerPage = 5
  const totalPages = Math.ceil(produtos.length / itemsPerPage)

  // Filtrar produtos baseado na pesquisa
  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.codigo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Paginação
  const startIndex = (currentPage - 1) * itemsPerPage
  const produtosPaginados = produtosFiltrados.slice(startIndex, startIndex + itemsPerPage)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset para primeira página ao pesquisar
  }

  const gerarNovoCodigo = () => {
    const ultimoId = Math.max(...produtos.map((p) => p.id), 0)
    return `COD${String(ultimoId + 1).padStart(3, "0")}`
  }

  const handleNovo = () => {
    setFormData({
      codigo: gerarNovoCodigo(),
      descricao: "",
      categoria: "",
      unidade: "",
      valor: "",
    })
    setEditingId(null)
  }

  const handleSalvar = () => {
    if (!formData.descricao || !formData.categoria || !formData.unidade || !formData.valor) {
      alert("Por favor, preencha todos os campos obrigatórios")
      return
    }

    if (editingId) {
      // Editar produto existente
      setProdutos(
        produtos.map((produto) =>
          produto.id === editingId
            ? {
                ...produto,
                codigo: formData.codigo,
                descricao: formData.descricao.toUpperCase(),
                categoria: formData.categoria,
                unidade: formData.unidade,
                valor: Number.parseFloat(formData.valor),
              }
            : produto,
        ),
      )
      alert("Produto atualizado com sucesso!")
    } else {
      // Adicionar novo produto
      const novoProduto = {
        id: Math.max(...produtos.map((p) => p.id), 0) + 1,
        codigo: formData.codigo,
        descricao: formData.descricao.toUpperCase(),
        categoria: formData.categoria,
        unidade: formData.unidade,
        valor: Number.parseFloat(formData.valor),
        ativo: true,
      }
      setProdutos([...produtos, novoProduto])
      alert("Produto cadastrado com sucesso!")
    }

    // Limpar formulário
    setFormData({
      codigo: "",
      descricao: "",
      categoria: "",
      unidade: "",
      valor: "",
    })
    setEditingId(null)
  }

  const handleEditar = (produto) => {
    setFormData({
      codigo: produto.codigo,
      descricao: produto.descricao,
      categoria: produto.categoria,
      unidade: produto.unidade,
      valor: produto.valor.toString(),
    })
    setEditingId(produto.id)
  }

  const handleExcluir = () => {
    if (editingId) {
      if (confirm("Tem certeza que deseja excluir este produto?")) {
        setProdutos(produtos.filter((produto) => produto.id !== editingId))
        setFormData({
          codigo: "",
          descricao: "",
          categoria: "",
          unidade: "",
          valor: "",
        })
        setEditingId(null)
        alert("Produto excluído com sucesso!")
      }
    } else {
      alert("Selecione um produto para excluir")
    }
  }

  const toggleAtivo = (id) => {
    setProdutos(produtos.map((produto) => (produto.id === id ? { ...produto, ativo: !produto.ativo } : produto)))
  }

  return (
    <div className={styles.estoqueContainer}>
      <h1 className={styles.title}>Cadastro de Produtos</h1>

      {/* Barra de Pesquisa */}
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder="Digite Para Procurar"
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <Search className={styles.searchIcon} size={20} />
        </div>
      </div>

      {/* Tabela de Produtos */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>CÓDIGO</th>
              <th>DESCRIÇÃO</th>
              <th>CATEGORIA</th>
              <th>VALOR</th>
              <th>UND</th>
              <th>ATIVO</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {produtosPaginados.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.codigo}</td>
                <td>{produto.descricao}</td>
                <td>{produto.categoria}</td>
                <td>{produto.valor.toFixed(2)}</td>
                <td>{produto.unidade}</td>
                <td>
                  <button
                    onClick={() => toggleAtivo(produto.id)}
                    className={`${styles.statusButton} ${produto.ativo ? styles.ativo : styles.inativo}`}
                  >
                    {produto.ativo ? "✓" : "✗"}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleEditar(produto)} className={styles.editButton} title="Editar produto">
                    <Edit size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          ←
        </button>
        <span className={styles.paginationInfo}>
          {startIndex + 1} de {produtosFiltrados.length}
        </span>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          →
        </button>
      </div>

      {/* Formulário de Cadastro */}
      <div className={styles.formContainer}>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>CÓDIGO:</label>
            <input
              type="text"
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              className={styles.input}
              readOnly
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>DESCRIÇÃO:</label>
            <input
              type="text"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className={styles.input}
              placeholder="Digite a descrição do produto"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>CATEGORIA:</label>
            <select name="categoria" value={formData.categoria} onChange={handleChange} className={styles.select}>
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>UND:</label>
            <select name="unidade" value={formData.unidade} onChange={handleChange} className={styles.select}>
              <option value="">Selecione uma unidade</option>
              {unidades.map((unidade) => (
                <option key={unidade} value={unidade}>
                  {unidade}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>VALOR R$:</label>
            <input
              type="number"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              className={styles.input}
              placeholder="0,00"
              step="0.01"
              min="0"
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className={styles.buttonGroup}>
          <button onClick={handleNovo} className={styles.novoButton}>
            <Plus size={16} />
            NOVO
          </button>
          <button onClick={handleSalvar} className={styles.salvarButton}>
            <Save size={16} />
            SALVAR
          </button>
          <button onClick={handleExcluir} className={styles.excluirButton}>
            <Trash2 size={16} />
            EXCLUIR
          </button>
        </div>
      </div>
    </div>
  )
}

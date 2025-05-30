"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import styles from "../css/Cadastro.module.css"

export default function Cadastro({ onNavigate }) {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    documento: "",
    tipoDocumento: "cpf",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Cadastro:", formData)
  }

  const handleLoginClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate("Login")
    }
  }

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.cadastroBox}>
        <div className={styles.logo}>
          <ShoppingCart className={styles.logoIcon} />
          <h1 className={styles.logoText}>JÁ Pedidos</h1>
          <p className={styles.subtitle}>Criar nova conta</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nomeCompleto" className={styles.label}>
              Nome Completo
            </label>
            <input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="tipoDocumento"
                value="cpf"
                checked={formData.tipoDocumento === "cpf"}
                onChange={handleChange}
              />
              CPF
            </label>
            <label>
              <input
                type="radio"
                name="tipoDocumento"
                value="cnpj"
                checked={formData.tipoDocumento === "cnpj"}
                onChange={handleChange}
              />
              CNPJ
            </label>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="documento" className={styles.label}>
              {formData.tipoDocumento === "cpf" ? "CPF" : "CNPJ"}
            </label>
            <input
              type="text"
              id="documento"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              className={styles.input}
              placeholder={formData.tipoDocumento === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="telefone" className={styles.label}>
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className={styles.input}
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha" className={styles.label}>
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmarSenha" className={styles.label}>
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Criar Conta
          </button>

          <div className={styles.links}>
            <a href="#" className={styles.link} onClick={handleLoginClick}>
              Já tem uma conta? Faça login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

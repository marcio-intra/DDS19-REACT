"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import styles from "../css/Login.module.css"

export default function Login({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login:", formData)
  }

  const handleCadastroClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate("Cadastro")
    }
  }

  const handleEsqueceuSenhaClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate("Error")
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          <ShoppingCart className={styles.logoIcon} />
          <h1 className={styles.logoText}>JÁ Pedidos</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
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

          <button type="submit" className={styles.submitButton}>
            Entrar
          </button>

          <div className={styles.links}>
            <a href="#" className={styles.link} onClick={handleEsqueceuSenhaClick}>
              Esqueceu a senha?
            </a>
            <a href="#" className={styles.link} onClick={handleCadastroClick}>
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

"use client"

import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import styles from "../css/Error.module.css"

export default function Error() {
  const handleGoHome = () => {
    window.location.href = "/"
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <AlertTriangle className={styles.errorIcon} />
        <h1 className={styles.errorTitle}>Oops! Algo deu errado</h1>
        <p className={styles.errorMessage}>
          A página que você está procurando não foi encontrada ou ocorreu um erro inesperado.
        </p>

        <div className={styles.errorActions}>
          <button onClick={handleGoHome} className={styles.homeButton}>
            <Home size={16} />
            Voltar ao Início
          </button>
          <button onClick={handleRefresh} className={styles.refreshButton}>
            <RefreshCw size={16} />
            Tentar Novamente
          </button>
        </div>

        <div className={styles.errorDetails}>
          <h3>Possíveis soluções:</h3>
          <ul>
            <li>Verifique se o endereço está correto</li>
            <li>Tente atualizar a página</li>
            <li>Volte à página anterior</li>
            <li>Entre em contato com o suporte se o problema persistir</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

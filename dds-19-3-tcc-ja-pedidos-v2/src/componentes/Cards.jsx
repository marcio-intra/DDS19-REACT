"use client"

import { useState } from "react"
import { Eye, Clock, CheckCircle, XCircle, CreditCard } from "lucide-react"
import styles from "../css/Cards.module.css"

export default function Cards({ pedido, status }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getStatusIcon = () => {
    switch (status) {
      case "aguardando":
        return <CreditCard className={styles.statusIcon} />
      case "andamento":
        return <Clock className={styles.statusIcon} />
      case "concluido":
        return <CheckCircle className={styles.statusIcon} />
      case "cancelado":
        return <XCircle className={styles.statusIcon} />
      default:
        return null
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "aguardando":
        return "Aguardando Pagamento"
      case "andamento":
        return "Em Andamento"
      case "concluido":
        return "Concluído"
      case "cancelado":
        return "Cancelado"
      default:
        return ""
    }
  }

  const handleViewPedido = (e) => {
    e.stopPropagation() // Evita que o clique se propague
    setIsExpanded(!isExpanded)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
  }

  const handleCardClick = (e) => {
    // Evita que cliques dentro do card fechem o card expandido
    e.stopPropagation()
  }

  return (
    <div
      className={`${styles.card} ${styles[status]} ${isExpanded ? styles.expanded : ""}`}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className={styles.cardHeader}>
        <div className={styles.statusBadge}>
          {getStatusIcon()}
          <span>{getStatusText()}</span>
        </div>
        <button onClick={handleViewPedido} className={styles.viewButton}>
          <Eye size={16} />
        </button>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.clienteName}>{pedido.cliente}</h3>
        <p className={styles.protocolo}>Protocolo: {pedido.protocolo}</p>
        <p className={styles.valor}>{pedido.valor}</p>
        <p className={styles.data}>Data: {pedido.data}</p>
      </div>

      {isExpanded && (
        <div className={styles.expandedContent}>
          <div className={styles.detailsGrid}>
            <div className={styles.detail}>
              <strong>Cliente:</strong>
              <span>{pedido.cliente}</span>
            </div>
            <div className={styles.detail}>
              <strong>Protocolo:</strong>
              <span>{pedido.protocolo}</span>
            </div>
            <div className={styles.detail}>
              <strong>Valor Total:</strong>
              <span>{pedido.valor}</span>
            </div>
            <div className={styles.detail}>
              <strong>Data do Pedido:</strong>
              <span>{pedido.data}</span>
            </div>
            <div className={styles.detail}>
              <strong>Status:</strong>
              <span>{getStatusText()}</span>
            </div>
            <div className={styles.detail}>
              <strong>Observações:</strong>
              <span>Pedido processado conforme solicitação</span>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.actionButton}>Ver Detalhes</button>
            <button className={styles.actionButton}>Imprimir</button>
          </div>
        </div>
      )}
    </div>
  )
}

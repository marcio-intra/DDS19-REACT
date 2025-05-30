"use client"

import { useState } from "react"
import Cards from "./Cards"
import styles from "../css/Dashboard.module.css"

export default function Dashboard() {
  const [pedidos] = useState({
    aguardandoPagamento: [
      {
        id: "001",
        cliente: "João Silva",
        valor: "R$ 89,90",
        data: "2024-01-15",
        protocolo: "JA001-2024",
      },
      {
        id: "002",
        cliente: "Maria Santos",
        valor: "R$ 156,50",
        data: "2024-01-15",
        protocolo: "JA002-2024",
      },
      {
        id: "003",
        cliente: "Pedro Costa",
        valor: "R$ 234,00",
        data: "2024-01-15",
        protocolo: "JA003-2024",
      },
    ],
    emAndamento: [
      {
        id: "004",
        cliente: "Ana Oliveira",
        valor: "R$ 67,80",
        data: "2024-01-14",
        protocolo: "JA004-2024",
      },
      {
        id: "005",
        cliente: "Carlos Mendes",
        valor: "R$ 123,45",
        data: "2024-01-14",
        protocolo: "JA005-2024",
      },
      {
        id: "006",
        cliente: "Lucia Ferreira",
        valor: "R$ 98,70",
        data: "2024-01-14",
        protocolo: "JA006-2024",
      },
    ],
    concluidos: [
      {
        id: "007",
        cliente: "Roberto Lima",
        valor: "R$ 345,60",
        data: "2024-01-13",
        protocolo: "JA007-2024",
      },
      {
        id: "008",
        cliente: "Fernanda Rocha",
        valor: "R$ 78,90",
        data: "2024-01-13",
        protocolo: "JA008-2024",
      },
      {
        id: "009",
        cliente: "Marcos Souza",
        valor: "R$ 456,30",
        data: "2024-01-12",
        protocolo: "JA009-2024",
      },
      {
        id: "010",
        cliente: "Patricia Alves",
        valor: "R$ 234,50",
        data: "2024-01-12",
        protocolo: "JA010-2024",
      },
      {
        id: "011",
        cliente: "Ricardo Gomes",
        valor: "R$ 167,80",
        data: "2024-01-11",
        protocolo: "JA011-2024",
      },
    ],
    cancelados: [
      {
        id: "012",
        cliente: "Sandra Martins",
        valor: "R$ 89,40",
        data: "2024-01-10",
        protocolo: "JA012-2024",
      },
      {
        id: "013",
        cliente: "Eduardo Silva",
        valor: "R$ 123,70",
        data: "2024-01-10",
        protocolo: "JA013-2024",
      },
      {
        id: "014",
        cliente: "Camila Santos",
        valor: "R$ 67,20",
        data: "2024-01-09",
        protocolo: "JA014-2024",
      },
    ],
  })

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard - Visão Geral dos Pedidos</h1>

      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Aguardando Pagamento</h2>
          <div className={styles.cardsContainer}>
            {pedidos.aguardandoPagamento.map((pedido) => (
              <Cards key={pedido.id} pedido={pedido} status="aguardando" />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Em Andamento</h2>
          <div className={styles.cardsContainer}>
            {pedidos.emAndamento.map((pedido) => (
              <Cards key={pedido.id} pedido={pedido} status="andamento" />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Concluídos</h2>
          <div className={styles.cardsContainer}>
            {pedidos.concluidos.map((pedido) => (
              <Cards key={pedido.id} pedido={pedido} status="concluido" />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Cancelados</h2>
          <div className={styles.cardsContainer}>
            {pedidos.cancelados.map((pedido) => (
              <Cards key={pedido.id} pedido={pedido} status="cancelado" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

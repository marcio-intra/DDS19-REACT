"use client"

import { ShoppingCart, Users, Target, Award } from "lucide-react"
import styles from "../css/Sobre.module.css"

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <div className={styles.header}>
        <ShoppingCart className={styles.logoIcon} />
        <h1 className={styles.title}>Quem Somos</h1>
        <p className={styles.subtitle}>JÁ Pedidos - Sistema de Gerenciamento de Pedidos</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossa História</h2>
          <p className={styles.text}>
            O JÁ Pedidos nasceu como um projeto de TCC (Trabalho de Conclusão de Curso) da turma DDS-19-3 do curso de
            Desenvolvimento de Sistemas. Nossa missão é facilitar o gerenciamento de pedidos para pequenas e médias
            empresas, oferecendo uma solução completa e intuitiva.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossa Missão</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <Target className={styles.missionIcon} />
              <h3>Objetivo</h3>
              <p>Simplificar o processo de gestão de pedidos com tecnologia moderna e acessível.</p>
            </div>
            <div className={styles.missionCard}>
              <Users className={styles.missionIcon} />
              <h3>Foco no Cliente</h3>
              <p>Desenvolver soluções que atendam às necessidades reais dos nossos usuários.</p>
            </div>
            <div className={styles.missionCard}>
              <Award className={styles.missionIcon} />
              <h3>Qualidade</h3>
              <p>Entregar um produto de alta qualidade com as melhores práticas de desenvolvimento.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Funcionalidades</h2>
          <div className={styles.featuresList}>
            <ul>
              <li>✅ Gestão completa de pedidos</li>
              <li>✅ Cadastro de clientes e produtos</li>
              <li>✅ Controle de estoque</li>
              <li>✅ Relatórios gerenciais</li>
              <li>✅ Sistema de entregas</li>
              <li>✅ Interface responsiva</li>
              <li>✅ Suporte a múltiplos usuários</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

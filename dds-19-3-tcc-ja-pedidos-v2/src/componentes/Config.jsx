"use client"

import { Settings, User, Shield } from "lucide-react"
import styles from "../css/Config.module.css"

export default function Config({ type }) {
  const getConfigContent = () => {
    switch (type) {
      case "Config1":
        return {
          title: "Configurações Gerais",
          icon: Settings,
          content: (
            <div className={styles.configSection}>
              <h3>Configurações do Sistema</h3>
              <div className={styles.configGrid}>
                <div className={styles.configItem}>
                  <label>Nome da Empresa</label>
                  <input type="text" defaultValue="JÁ Pedidos" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>CNPJ</label>
                  <input type="text" placeholder="00.000.000/0000-00" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>Endereço</label>
                  <input type="text" placeholder="Endereço completo" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>Telefone</label>
                  <input type="text" placeholder="(00) 0000-0000" className={styles.input} />
                </div>
              </div>
            </div>
          ),
        }
      case "Config2":
        return {
          title: "Configurações de Usuário",
          icon: User,
          content: (
            <div className={styles.configSection}>
              <h3>Perfil do Usuário</h3>
              <div className={styles.configGrid}>
                <div className={styles.configItem}>
                  <label>Nome de Usuário</label>
                  <input type="text" defaultValue="Admin" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>E-mail</label>
                  <input type="email" defaultValue="admin@japedidos.com" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>Senha Atual</label>
                  <input type="password" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>Nova Senha</label>
                  <input type="password" className={styles.input} />
                </div>
              </div>

              <h3>Preferências</h3>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" defaultChecked />
                  Receber notificações por e-mail
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" defaultChecked />
                  Modo escuro
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" />
                  Salvar automaticamente
                </label>
              </div>
            </div>
          ),
        }
      case "Config3":
        return {
          title: "Configurações Avançadas",
          icon: Shield,
          content: (
            <div className={styles.configSection}>
              <h3>Segurança</h3>
              <div className={styles.configGrid}>
                <div className={styles.configItem}>
                  <label>Tempo de Sessão (minutos)</label>
                  <input type="number" defaultValue="30" className={styles.input} />
                </div>
                <div className={styles.configItem}>
                  <label>Tentativas de Login</label>
                  <input type="number" defaultValue="3" className={styles.input} />
                </div>
              </div>

              <h3>Backup</h3>
              <div className={styles.backupSection}>
                <button className={styles.button}>Fazer Backup Agora</button>
                <button className={styles.button}>Restaurar Backup</button>
              </div>

              <h3>Logs do Sistema</h3>
              <div className={styles.logsSection}>
                <textarea
                  className={styles.textarea}
                  readOnly
                  value="2024-01-15 10:30:00 - Login realizado com sucesso
2024-01-15 10:25:00 - Pedido #001 criado
2024-01-15 10:20:00 - Sistema iniciado"
                />
              </div>
            </div>
          ),
        }
      default:
        return {
          title: "Configurações",
          icon: Settings,
          content: <div>Selecione uma configuração</div>,
        }
    }
  }

  const config = getConfigContent()
  const IconComponent = config.icon

  return (
    <div className={styles.configContainer}>
      <div className={styles.header}>
        <IconComponent className={styles.icon} />
        <h1 className={styles.title}>{config.title}</h1>
      </div>

      <div className={styles.content}>{config.content}</div>

      <div className={styles.actions}>
        <button className={styles.saveButton}>Salvar Alterações</button>
        <button className={styles.cancelButton}>Cancelar</button>
      </div>
    </div>
  )
}

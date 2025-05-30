"use client"

import { useState } from "react"
import {
  Home,
  Users,
  ShoppingCart,
  Package,
  Building,
  ShoppingBag,
  Settings,
  HelpCircle,
  Search,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import styles from "../css/Navbar.module.css"

export default function Navbar({ onNavigate, isExpanded, setIsExpanded }) {
  const [activeMenu, setActiveMenu] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: Home,
      component: "Dashboard",
    },
    {
      id: "cliente",
      title: "Cliente",
      icon: Users,
      submenus: [
        { id: "login", title: "Login", component: "Login" },
        { id: "novo", title: "Novo", component: "Cadastro" },
        { id: "recuperar", title: "Recuperar acesso", component: "RecuperarAcesso" },
      ],
    },
    {
      id: "pedidos",
      title: "Pedidos",
      icon: ShoppingCart,
      submenus: [
        { id: "aguardando", title: "Aguardando pagamento", component: "PedidosAguardando" },
        { id: "andamento", title: "Em andamento", component: "PedidosAndamento" },
        { id: "concluidos", title: "Concluídos", component: "PedidosConcluidos" },
        { id: "cancelados", title: "Cancelados", component: "PedidosCancelados" },
      ],
    },
    {
      id: "produto",
      title: "Produto",
      icon: Package,
      component: "EstoqueCadastrar",
    },
    {
      id: "empresa",
      title: "Empresa",
      icon: Building,
      submenus: [{ id: "quemsomos", title: "Quem somos", component: "Sobre" }],
    },
    {
      id: "carrinho",
      title: "Carrinho",
      icon: ShoppingBag,
      submenus: [{ id: "concluir", title: "Concluir", component: "CarrinhoConcluir" }],
    },
    {
      id: "configuracoes",
      title: "Configurações",
      icon: Settings,
      submenus: [
        { id: "config1", title: "Config 1", component: "Config1" },
        { id: "config2", title: "Config 2", component: "Config2" },
        { id: "config3", title: "Config 3", component: "Config3" },
      ],
    },
    {
      id: "ajuda",
      title: "Ajuda",
      icon: HelpCircle,
      submenus: [{ id: "chat", title: "Chat", component: "Chat" }],
    },
  ]

  const handleMenuClick = (menuId, component) => {
    switch (menuId) {
      case "dashboard":
      case "produto":
        setActiveMenu("")
        onNavigate(component)
        break
      default:
        if (activeMenu === menuId) {
          setActiveMenu("")
        } else {
          setActiveMenu(menuId)
        }
        break
    }
  }

  const handleSubmenuClick = (component) => {
    onNavigate(component)
    setActiveMenu("")
  }

  const handleLogoClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
    setActiveMenu("")
  }

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onNavigate("SearchResults")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <nav
      className={`${styles.navbar} ${isExpanded ? styles.expanded : styles.retracted}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.logo} onClick={handleLogoClick}>
        <ShoppingCart className={styles.logoIcon} />
        {isExpanded && <span className={styles.logoText}>JÁ Pedidos</span>}
      </div>

      {isExpanded && (
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch} className={styles.searchButton}>
              <Search size={16} />
            </button>
          </div>
        </div>
      )}

      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menuItem}>
            <div
              className={`${styles.menuButton} ${activeMenu === item.id ? styles.active : ""}`}
              onClick={() => handleMenuClick(item.id, item.component)}
            >
              <item.icon className={styles.menuIcon} />
              {isExpanded && (
                <>
                  <span className={styles.menuText}>{item.title}</span>
                  {item.submenus && (
                    <span className={styles.chevron}>
                      {activeMenu === item.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </span>
                  )}
                </>
              )}
            </div>

            {item.submenus && activeMenu === item.id && isExpanded && (
              <ul className={styles.submenuList}>
                {item.submenus.map((submenu) => (
                  <li key={submenu.id} className={styles.submenuItem}>
                    <button className={styles.submenuButton} onClick={() => handleSubmenuClick(submenu.component)}>
                      {submenu.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

"use client"

import { useState } from "react"
import Navbar from "../src/componentes/Navbar"
import Main from "../src/componentes/Main"
import Rodape from "../src/componentes/Rodape"

export default function App() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard")
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)

  const handleNavigation = (component) => {
    setCurrentComponent(component)
  }

  return (
    <div className="app-container">
      <Navbar onNavigate={handleNavigation} isExpanded={isNavbarExpanded} setIsExpanded={setIsNavbarExpanded} />
      <Main currentComponent={currentComponent} isNavbarExpanded={isNavbarExpanded} onNavigate={handleNavigation} />
      <Rodape isNavbarExpanded={isNavbarExpanded} />
    </div>
  )
}

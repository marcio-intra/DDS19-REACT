"use client"

import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import styles from "../css/Rodape.module.css"

export default function Rodape({ isNavbarExpanded = false }) {
  return (
    <footer className={`${styles.footer} ${isNavbarExpanded ? styles.expanded : ""}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna 1 - Logo e Redes Sociais */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <ShoppingCart className={styles.logoIcon} />
              <h3 className={styles.logoText}>JÁ Pedidos</h3>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Facebook size={18} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Instagram size={18} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Suporte */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Suporte</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#" className={styles.link}>
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>contato@japedidos.com.br</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>(27) 3000-0000</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>Vitória, ES - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de separação */}
        <div className={styles.separator}></div>

        {/* Rodapé inferior */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>© 2025 JÁ Pedidos - TCC DDS-19-3. Todos os direitos reservados.</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Termos de Uso
            </a>
            <a href="#" className={styles.bottomLink}>
              Privacidade
            </a>
            <a href="#" className={styles.bottomLink}>
              Licença
            </a>
          </div>
        </div>

        {/* Status do Sistema */}
        <div className={styles.systemStatus}>
          <div className={styles.statusIndicator}>
            <div className={styles.statusDot}></div>
            <span>Sistema Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

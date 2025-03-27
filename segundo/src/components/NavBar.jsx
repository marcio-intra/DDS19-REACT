import { NavLink } from "react-router-dom";

import styles from "./css/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.link} to="/home">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
      <NavLink className={styles.link} to="/cadastro">
        Cadastro
      </NavLink>
      <NavLink className={styles.link} to="/sobre">
        Sobre
      </NavLink>
      <NavLink className={styles.link} to="/contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default NavBar;

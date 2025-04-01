import { useState } from "react";

import styles from "./Forms.module.css";

const Forms = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  const handleName = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };

  return (
    <div>
      <h4>Forms</h4>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        {/* Label fora do input, com htmlFor */}
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome..."
          onChange={handleName}
        />

        {/* Label envolvendo o input */}
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha..."
            onChange={(e) => {
                setSenha(e.target.value);
              }}
          />
        </label>
        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: "blue", color: "white" }}
        />
      </form>
    </div>
  );
};

export default Forms;

import { useForm } from "react-hook-form";

import styles from "./Forms.module.css";

const NewForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados:", data);
  };

  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  console.log("RENDERIZEI");
  return (
    <div>
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {/* Label fora do input, com htmlFor */}
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome..."
          {...register("nome", {
            required: "O nome é obrigatório",
            minLength: {
              value: 2,
              message: "O nome deve ter pelo menos 2 caracteres",
            },
            maxLength: {
              value: 20,
              message: "O nome deve ter ate 20 caracteres",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/i,
              message: "O nome só pode conter letras",
            },
          })}
        />
        {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}

        {/* Label envolvendo o input */}
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha..."
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "A senha deve ter menos de 20 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
              },
            })}
          />
          {errors.senha && (
            <p className={styles.error}>{errors.senha.message}</p>
          )}
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            {...register("confirmarSenha", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("senha") || "As senhas não coincidem",
            })}
            placeholder="Confirmar Senha"
          />
          {errors.confirmarSenha && (
            <p className={styles.error}>{errors.confirmarSenha.message}</p>
          )}
        </label>
        <label>
          <span>Descrição:</span>
          <textarea {...register("descricao")} placeholder="Descrição" />
        </label>
        <label>
          <span>Tipo:</span>
          <select {...register("tipo")} defaultValue="tipo1">
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
          </select>
        </label>
        <label>
          <span>Data:</span>
          <input type="date" {...register("data")} />
        </label>
        <label>
          <span>Hora:</span>
          <input type="time" {...register("hora")} />
        </label>
        <label>
          <span>Arquivo:</span>
          <input type="file" {...register("arquivo")} />
        </label>
        <label>
          <span>Cor:</span>
          <input type="color" {...register("cor")} />
        </label>
        <label>
          <span>URL:</span>
          <input type="url" {...register("url")} placeholder="URL" />
        </label>
        <label>
          <span>Telefone:</span>
          <input type="tel" {...register("telefone")} placeholder="Telefone" />
        </label>

        <label>
          <span>Range:</span>
          <input type="range" {...register("range")} min="0" max="100" />
        </label>
        <label>
          <span>Data e Hora:</span>
          <input type="datetime-local" {...register("dataHora")} />
        </label>
        <label>
          <span>Busca:</span>
          <input type="search" {...register("busca")} placeholder="Busca" />
        </label>
        <label>
          <span>Concordo com os termos:</span>
          <input type="checkbox" {...register("checkbox")} />
        </label>
        <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default NewForms;

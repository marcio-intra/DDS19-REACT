import React from "react";

const TemplateExpressions = () => {
  let nome = "Cristiano Ronaldo";

  let aluno = {
    nome: "Rogério Ceni",
    turma: "DDS-01",
    curso: "Desenvolvimento de Sistemas"
  }

  console.log(aluno.curso)
  return (
    <div>
      <h1>O nome do melhor do mundo é: {nome}</h1>
      <p>O nome do aluno é {aluno.nome}, faz o curso de {aluno.curso} na turma {aluno.turma} </p>
    </div>
  );
};

export default TemplateExpressions;

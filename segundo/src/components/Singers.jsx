import React from "react";

const Singers = (props) => {
  return (
    <div>
      <h2>O nome do artista é: {props.nome} </h2>
      <h2>Seu estilo musical é: {props.estiloMusical}</h2>
      {props.premiado && <h3>E já foi muito premiado</h3>}
      <hr />
    </div>
  );
};

export default Singers;

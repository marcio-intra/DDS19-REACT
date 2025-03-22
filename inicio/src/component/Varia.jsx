import { useState } from "react";

const Varia = () => {
  //   Variaveis padrões do javascript
  let algo = 10;
  console.log("Valor inicial de algo:", algo);

  // Variaveis utilizando o hook useState
  const [number, setNumber] = useState(7);
  console.log("Minha variável number:", number);

  return (
    <div>
      <p>Minha variável: {algo}</p>
      <button
        onClick={() => {
          algo = 20;
          console.log("Novo valor de algo:", algo);
        }}
      >
        Alterar
      </button>
      <hr />
      <p>Valor da variável number: {number} </p>
      <button onClick={() => {setNumber(number - 5)}}>-</button>
      <button onClick={() => {setNumber(7)}}>Reset</button>
      <button onClick={() => {setNumber(number + 5)}}>+</button>
    </div>
  );
};

export default Varia;

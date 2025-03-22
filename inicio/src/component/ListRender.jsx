import { useState } from "react";

const ListRender = () => {
  const [lista, setLista] = useState(["Mateus","Marcos","Lucas","João","Peter"]);
  
  const [number, setNumber] = useState(0);
  
  const [users] = useState([
    {
      id: 1,
      name: "Jesus",
      number: 25,
    },
    {
      id: 7,
      name: "Cristiano Ronaldo",
      number: 7,
    },
    {
      id: 10,
      name: "Neymar Jr",
      number: 10,
    },
  ]);

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
          console.log([...lista]);
          setLista([...lista, number]);
        }}
      >
        Adicionar
      </button>

      {/* Lista com index de chave */}
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Lista com id de chave */}
      {users.map((usuario) => (
        // console.log(usuario)
        <h2 key={usuario.id}>
          {" "}
          O nome é {usuario.name}, e seu número é {usuario.number}{" "}
        </h2>
      ))}
    </div>
  );
};

export default ListRender;

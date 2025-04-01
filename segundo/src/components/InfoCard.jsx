import { useParams, useNavigate } from "react-router-dom";

const InfoCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();   

  console.log("O id:", id);

  const VoltarHome = () => {
    navigate("/home");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      InfoCard do cartão: {id}
      <button onClick={VoltarHome}>Voltar</button>
    </div>
  );
};

export default InfoCard;

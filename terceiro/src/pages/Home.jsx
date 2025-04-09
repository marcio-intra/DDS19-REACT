import Button from "react-bootstrap/Button";
import MyCard from "../components/MyCard";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="primary" size="lg">
        CADASTRAR
      </Button>
      <br />
      <MyCard
        titulo="The Goat"
        img="https://jpimg.com.br/uploads/2024/11/cristiano-ronaldo-676x450.jpg"
        desc="O melhor jogador da história do planeta terra"
      />
      <MyCard
        titulo="The Prince"
        img="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/04/07085823/santos-neymar-1.jpg"
        desc="O homem que ousou ser alegre"
      />
      
    </div>
  );
};

export default Home;

import "./App.css";
import { Outlet } from "react-router-dom";
import NewNavBar from "./components/NewNavBar";

//Importação do React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <NewNavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;

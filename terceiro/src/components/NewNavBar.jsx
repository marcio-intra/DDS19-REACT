import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NewNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/CG_Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          C&G Solutions
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>

            <NavDropdown title="Unidades" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="">Vitória</NavDropdown.Item>
              <NavDropdown.Item href="">Serra</NavDropdown.Item>
              <NavDropdown.Item href="">Vila Velha</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="">Brasília</NavDropdown.Item>
              <NavDropdown.Item href="">São Paulo</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Navbar.Text className="p-2">
              Usuário: Cris  
            </Navbar.Text>
            
            <Button variant="danger"> Sair</Button>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavBar;

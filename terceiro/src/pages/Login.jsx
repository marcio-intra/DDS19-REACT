import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="mt-3 w-50 mx-auto ">
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>

      <Alert variant="danger" className="mt-2">Hackearam meu email, Hackearam meu site</Alert>
    </div>
  );
};

export default Login;

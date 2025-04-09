import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary">Ver Mais</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;

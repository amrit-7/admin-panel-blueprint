import { Card } from "react-bootstrap";
import "./card.scss";

const Cards = ({ user }) => {
  const { name, username, email, id } = user;
  return (
    <Card key={id} bg="white" style={{ width: "14rem" }} className="my-2">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Img src={`https://robohash.org/${id}?set=set1`} />
        <Card.Title> {username} </Card.Title>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Cards;

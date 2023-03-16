import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/micro.svg";
import { useContext } from "react";
import { userContext } from "../../context/user.context";

const Topbar = () => {
  const { currentUser } = useContext(userContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Logo className="me-3" />
          <span>AdminWrap</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/"> Profile </Nav.Link>
          <Nav.Link href="/admin"> Admin Panel </Nav.Link>
          {currentUser ? (
            <Nav.Link> Sign Out</Nav.Link>
          ) : (
            <Nav.Link href="/login">Sign In</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Topbar;

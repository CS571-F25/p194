import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; 
import { useTrees } from "./TreeContext";

export default function AppNavbar() {
  const location = useLocation();
  const { cart, favorites } = useTrees();

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Adopt-a-Tree 🌳</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
            <Nav.Link as={Link} to="/browse" active={location.pathname === "/browse"}>Browse</Nav.Link>
            <Nav.Link as={Link} to="/learn-more" active={location.pathname === "/learn-more"}>Learn More</Nav.Link>

            <Nav.Link as={Link} to="/favorites">
              Favs <Badge bg="danger">{favorites.length}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="success">{cart.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
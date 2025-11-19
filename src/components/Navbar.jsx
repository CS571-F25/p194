import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router";

export default function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Adopt-a-Tree 🌳</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
          <Nav.Link as={Link} to="/browse" active={location.pathname === "/browse"}>Browse</Nav.Link>
          <Nav.Link as={Link} to="/learn-more" active={location.pathname === "/learn-more"}>Learn More</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

import { Container, Nav, Navbar } from "react-bootstrap";

import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Tienda de Productos
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/category/equipos_Apple'>Equipos Apple</Nav.Link>
          <Nav.Link as={Link} to='/category/equipos_android'>Equipos Android</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;
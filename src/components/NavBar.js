import './CartWidget.css';

import { Container, Nav, Navbar } from "react-bootstrap";

import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          ¿Que te Vendo?
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Celulares">Celulares</Nav.Link>
          <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
          <Nav.Link href="#contactos">Contactos</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;
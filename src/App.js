import {Col, Container, Row, Button,Nav, Navbar, NavDropdown} from "react-bootstrap";




function App() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav justify-center">
                  <Nav className="mx-auto">
                      <Nav.Link href="#Home">Главная</Nav.Link>
                      <Nav.Link href="#Products">Продукты</Nav.Link>
                      <Nav.Link href="#pricing">О нас</Nav.Link>
                      <Nav.Link href="#pricing">Инструменты</Nav.Link>
                      <Nav.Link href="#pricing">Контакты</Nav.Link>
                  </Nav>

              </Navbar.Collapse>
          </Container>
      </Navbar>

  );
}

export default App;

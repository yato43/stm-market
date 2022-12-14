import {Container, Nav, Navbar} from "react-bootstrap";

function App() {
    return (
        <>
            <Navbar className="justify-content-center nav-bg" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="md-auto"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link2">Link</Nav.Link>
                            <Nav.Link href="#link3">Link</Nav.Link>
                            <Nav.Link href="#link4">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default App;

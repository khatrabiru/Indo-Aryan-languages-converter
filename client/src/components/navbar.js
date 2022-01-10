import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const NavbarNew = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Languages" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/nepali">Nepali</NavDropdown.Item>
                            <NavDropdown.Item href="/hindi">Hindi</NavDropdown.Item>
                            <NavDropdown.Item href="/urdu">Urdu</NavDropdown.Item>
                            <NavDropdown.Item href="/bengali">Bengali</NavDropdown.Item>
                            <NavDropdown.Item href="/punjabi">Punjabi</NavDropdown.Item>
                            <NavDropdown.Item href="/gujarati">Gujarati</NavDropdown.Item>
                            <NavDropdown.Item href="/marathi">Marathi</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavbarNew;

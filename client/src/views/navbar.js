import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const NavbarNew = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <NavDropdown title="Languages" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">Indo Aryan Languages</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Nepali</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Urdu</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Bengali</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Punjabi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gujarati</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Marathi</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavbarNew;

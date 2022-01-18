import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
    return (
        <>
            <Navbar className="bg-dark" fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand >Isaiah Landin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
            </Navbar>
        </>
        
    );
};

export default MyNavbar;
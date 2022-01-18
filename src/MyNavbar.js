import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const MyNavbar = () => {
    return (
        <>
            <Navbar className="bg-dark" fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand >Isaiah Landin</Navbar.Brand>
                <Button variant="outline-light">Contact</Button>
                {/* <Nav.Item>
                    <Nav.Link>
                        Test
                    </Nav.Link>
                </Nav.Item> */}
            </Container>
            </Navbar>
        </>
        
    );
};

export default MyNavbar;
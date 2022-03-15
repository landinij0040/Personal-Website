import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { show } from '../../store/MyOffcanvasSlice';
import { useDispatch } from 'react-redux';

const MyNavbar = () => {
    const dispatch = useDispatch();
    const handleOpen = () => dispatch(show());
    return (
        <>
            <Navbar className="bg-dark" fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Isaiah Landin</Navbar.Brand>
                <Button variant="outline-light" onClick={() => {handleOpen()}}>Contact</Button>
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
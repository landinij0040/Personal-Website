import React from 'react';
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
                <div>
                    <Button style={{position:'absolute', marginTop:'5px', marginLeft:'8px'}} className="contact" variant="outline-light" onClick={() => {handleOpen()}}>Contact</Button>
                    <div className="contact-animation" onClick={() => {handleOpen()}}></div>
                </div>
                
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
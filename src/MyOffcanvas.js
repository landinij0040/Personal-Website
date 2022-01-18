import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react"; 

const MyOffcanvas = () => {
    const [show, setShow] = useState(true); // Todo put this to false
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contact</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Contact info
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

};

export default MyOffcanvas;
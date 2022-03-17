import React from 'react';
import Offcanvas from "react-bootstrap/Offcanvas"; 
import { useSelector, useDispatch } from "react-redux";
import { doNotShow } from "../../store/MyOffcanvasSlice";

const MyOffcanvas = () => {
    // const [show, setShow] = useState(true); // Todo put this to false
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true)
    const show = useSelector((state) => state.offcanvas.value);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(doNotShow());
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contact</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <b>Email:</b> isaiahlandin004@gmail.com
                    <br />
                    <b>Phone:</b> 915-317-8042
                    <br />
                    <b>GitHub:</b> <a href="https://github.com/landinij0040">https://github.com/landinij0040</a>
                    <br />
                    <b>Linkedin:</b> <a href="https://www.linkedin.com/in/isaiah-landin-401a431a3/">https://www.linkedin.com/in/isaiah-landin-401a431a3/</a> 

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MyOffcanvas;
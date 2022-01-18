import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { show, doNotShow } from "./store/MyOffcanvasSlice";

const MyOffcanvas = () => {
    // const [show, setShow] = useState(true); // Todo put this to false
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true)
    const show = useSelector((state) => state.offcanvas.value);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(doNotShow);
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
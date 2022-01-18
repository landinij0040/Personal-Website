import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const MyFooter = () => (
    <>
        <footer className="bg-dark text-center text-white">
            <Container className="p-4">
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/isaiah-landin-401a431a3/">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/isaiah-landin-401a431a3/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/isaiah-landin-401a431a3/">
                    <FontAwesomeIcon icon={faGithub} />
                </a>


            </Container>
        </footer>
    </>
);

export default MyFooter;
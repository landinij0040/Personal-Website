import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MyFooter = () => (
    <>
        <footer className="bg-dark text-center text-white">
            <Container>
                <section className="mb-4">
                    <FontAwesomeIcon icon={faLinkedin} />
                </section>
            </Container>
        </footer>
    </>
);

export default MyFooter;
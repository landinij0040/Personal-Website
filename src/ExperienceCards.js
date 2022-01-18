import { Placeholder } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img_placeholder from './imgs/placeholder.jfif';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';


const experience = [1,2];

const ExperienceCard = () => {
    return (
        <div className="shadow">
            <Card >
                <Card.Img variant="top" src={img_placeholder} />
                <Card.Body>
                    <Card.Title><h1><u>Place</u>/Title</h1><br/>Date</Card.Title>
                    <Card.Text>Description</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

const ExperienceCards = () => (
    <>  
        <Container>
            <Row>
                { experience.map(() => (
                    <Col>
                        <ExperienceCard />
                    </Col>
                    
                ))}
            </Row>
        </Container>
    </>
);

export default ExperienceCards;
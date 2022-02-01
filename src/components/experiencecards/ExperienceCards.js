import { Placeholder } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img_placeholder from '../../imgs/black.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';


const experience = [1,2,3,4,5,6];

const ExperienceCard = () => {
    return (
        <div className="shadow" style={{marginTop:'2em', width:'20em'}}>
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

const styleExperienceCards = {
    marginBottom : '3em'
};


const ExperienceCards = () => (
    <>  
        <Container style={styleExperienceCards}>
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
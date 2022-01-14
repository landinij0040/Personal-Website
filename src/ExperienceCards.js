import { Placeholder } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img_placeholder from './imgs/placeholder.jfif';


const experience = [1,2];

const ExperienceCard = () => {
    return (
        <>
            <Card >
                <Card.Img variant="top" src={img_placeholder} />
                <Card.Body>
                    <Card.Title><h1><u>Place</u>/Title</h1><br/>Date</Card.Title>
                    <Card.Text>Description</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

const ExperienceCards = () => (
    <>
        { experience.map(() => <ExperienceCard />) }
    </>
);

export default ExperienceCards;
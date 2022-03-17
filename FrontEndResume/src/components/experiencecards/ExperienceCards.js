import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import img_placeholder from '../../imgs/black.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import axios from 'axios';

const experience = [1,2,3];

const ExperienceCard = (props) => {
    console.log(props.num);
    return (
        <div className="shadow card" style={{marginTop:'2em', width:'20em'}}>
            <Card >
                    <Card.Img variant="top" src={`http://localhost:8000/image/${props.num}`} />
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


const ExperienceCards = () => {
    const [images, setImages] = useState([]);
    // useEffect(async () =>{
    //     var newImage  = await axios(`http://localhost:8000/image/1`);
    //     setImages(oldImages => [...oldImages, newImage]);
    //     console.log(images);
    // },[]);
    // setImages(oldImages => [...oldImages, newImage]);
    return (
    <>  
        <Container style={styleExperienceCards}>
            <Row>
                { experience.map((elem) => (
                    <Col>
                        <ExperienceCard num={elem} />
                    </Col>
                    
                ))}
            </Row>
        </Container>
    </>
)};

export default ExperienceCards;
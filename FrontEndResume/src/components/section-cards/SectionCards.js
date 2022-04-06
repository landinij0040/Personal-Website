import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import axios from 'axios';

const CardComp = (props) => {
    return (
        <div className="shadow card"  >
        {/* <div className="shadow card my-4" > */}
            <Card >
                <Card.Img style={{objectFit:'contain'}} className=" card-image-height" variant="top" src={`http://localhost:8000/images/image/${props.apiTitle}/${props.image}`} />
                <Card.Body>
                    <Card.Title><h1><u>Place</u>/Title</h1><br/>Date</Card.Title>
                    <Card.Text>Description</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

const styleExperienceCards = { // TODO See what this even looks like without the style
    marginBottom : '3em'
};


const Cards = (props) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            var imageList  = await axios(`http://localhost:8000/images/image/${ props.apiTitle}`);
            var data  = await imageList.data;
            setImages(imageList.data);
        };
        fetchImages();
    },[]);
    return (
    <>  
        {/* <Container style={styleExperienceCards}> */}
        <Container>
            <Row>
                {/* <div className="px-0 my-3"> */}
                    { images.map((elem) => (
                       // <Col xs={4} className="px-0 my-3">
                        <Col className="px-0 my-3 card-image-margin-x card-image-width">
                            <CardComp apiTitle={props.apiTitle} image={elem} />
                        </Col>                    
                    ))}
            </Row>
        </Container>
    </>
)};

export default Cards;
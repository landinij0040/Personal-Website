import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import axios from 'axios';

const CardComp = (props) => {
    console.log(props.image);
    return (
        <div className="shadow card my-4" >
            <Card >
                <Card.Img className=" card-image-height" variant="top" src={`http://localhost:8000/images/image/${props.apiTitle}/${props.image}`} />
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
        <Container style={styleExperienceCards}>
            <Row>
                <div className="px-0 my-3">
                    { images.map((elem) => (
                        <Col>
                            <CardComp apiTitle={props.apiTitle} image={elem} />
                        </Col>                    
                    ))}
                </div> 
            </Row>
        </Container>
    </>
)};

export default Cards;
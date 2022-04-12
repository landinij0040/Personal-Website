import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';

const CardComp = (props) => {
    return (
        <div className="shadow card" onClick={ () => window.location.href = props.website}>
            <Card >
                <Card.Img style={{objectFit:'contain'}} className=" card-image-height" variant="top" src={`http://localhost:8000/images/image/${props.apiTitle}/${props.image}`} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

const styleExperienceCards = { // TODO See what this even looks like without the style
    marginBottom : '3em'
};


const Cards = (props) => {
    var cardsArray = props.cardsArray;
    var apiTitle = props.apiTitle;
    return (
    <>  
        <Container>
            <Row>
                { cardsArray.map((elem) => (
                    <Col className="px-0 my-3 card-image-margin-x card-image-width">
                        <CardComp 
                        apiTitle={apiTitle} 
                        image={elem['image']}
                        title={elem['title']}
                        text={elem['text']}
                        website={elem['website']}
                         />
                    </Col>                    
                ))}
            </Row>
        </Container>
    </>
)};

export default Cards;
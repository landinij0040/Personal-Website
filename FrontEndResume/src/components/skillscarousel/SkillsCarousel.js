import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import img_placeholder from '../../imgs/black.png';
import isaiah from '../../imgs/Isaiah_Landin.jpg';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const skills = [0];
const styleCarousel = {
    marginBottom:  '3em'
};
const stylePicAspectRatio = {
    width:'300px',
    height: 'auto',
};

const SkillsCarousel = () => {
    // Get the skills images from the backend
    // const [skillImages, setSkillsImages] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         var imageList  = await axios(`http://localhost:8000/images/image/skills`);
    //         var data  = await imageList.data;
    //         setSkillsImages(imageList.data);
    //         // console.log(skillImages); TODO Delete later
    //     };
    //     fetchData();
    // },[]);

    const skillImages = [
        "Bootstrap.svg",
        "CSS.svg",
        "Expressjs.svg",
        "Figma.svg",
        "Flask.svg",
        "Github.svg",
        "HTML.svg",
        "JavaScript.svg",
        "MongoDB.svg",
        "Mysql.svg",
        "Nodejs.svg",
        "PHP.svg",
        "Python.svg",
        "React.svg",
        "Sass.svg"
    ];
    return (
    <>
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className={'bg-dark text-center py-5'} style={{'height': '40em'}} >
                        <div className={'photo-container mx-auto'}>
                            <img
                                className={'isaiah'}
                                style={stylePicAspectRatio}
                                src={isaiah}
                            />
                            <div className={'overlay'}>
                                <a href="https://www.linkedin.com/in/isaiah-landin-401a431a3/">
                                    <FontAwesomeIcon icon={faLinkedinIn} className={'linked-in-img'}/>
                                </a>
                            </div>
                        </div>

                        <h1 className={'text-light'}>
                            My name is Isaiah Landin
                        </h1>
                        <h2 className={'text-light'}>
                            A professional Hello World Programmer in  <b>ANY</b> language
                        </h2>
                    </div>
                </Carousel.Item>
                
                {skillImages.map((elem) => (
                        <Carousel.Item key={Math.random(skillImages.length)}>
                            <div style={{'height':'40em'}}>
                                <img
                                    className="d-block w-100"
                                    src={`https://localhost:8000/images/image/skills/${elem}`}
                                    style={{
                                        'width': 'auto',
                                        'height':'40em',

                                    }}
                                />
                                <Carousel.Caption>
                                    <h1>{elem.replace('.svg','')}</h1>
                                    {/* <h2>Description</h2> */}
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>    
                ))}  
            </Carousel>
        </div>
    </>
)};

export default SkillsCarousel;
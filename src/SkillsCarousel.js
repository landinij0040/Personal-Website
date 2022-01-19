import Carousel from 'react-bootstrap/Carousel';
import img_placeholder from './imgs/black.png';
import isaiah from './imgs/Isaiah_Landin.jpg';

const skills = [1,2,3,4,5,5,7,8,9,10];
const styleCarousel = {
    marginBottom:  '3em'
};
const stylePicAspectRatio = {
    width:'300px',
    height: 'auto',
};

const SkillsCarousel = () => (
    <>
        <div style={styleCarousel}>
            <Carousel>
                <Carousel.Item>
                    <div className={'caro-back'}>
                        <img
                            style={stylePicAspectRatio}
                            src={isaiah}
                        />
                    </div>

                </Carousel.Item>
                {skills.map(() => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img_placeholder}
                        />
                        
                        <Carousel.Caption>
                            <h1>Main Title</h1>
                            <h2>Description</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}  
            </Carousel>
        </div>
    </>
);

export default SkillsCarousel;
import Carousel from 'react-bootstrap/Carousel';
import img_placeholder from './imgs/placeholder.jfif';

const skills = [1,2,3,4,5,5,7,8,9,10];
const styleCarousel = {
    marginBottom:  '3em'
};

const SkillsCarousel = () => (
    <>
        <div style={styleCarousel}>
            <Carousel>
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
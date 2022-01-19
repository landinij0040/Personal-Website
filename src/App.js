import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './MyNavbar';
import ExperienceCards from './ExperienceCards';
import SkillsCarousel from './SkillsCarousel';
import Jumbotron from './Jumbotron';
import MyFooter from './MyFooter';
import MyOffcanvas from './MyOffcanvas';

function App() {
  return (
    <>
      <MyOffcanvas />
      <MyNavbar />
      {/* <Jumbotron /> */}
      <SkillsCarousel/>
      {/* <Container> */}

      <ExperienceCards />
        <Row>
          {/* <Col>
            <SkillsCarousel/>
          </Col> */}
        </Row>  
      {/* </Container> */}
      <MyFooter />
    </>

  );
}

export default App;

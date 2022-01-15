import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './MyNavbar';
import ExperienceCards from './ExperienceCards';
import SkillsCarousel from './SkillsCarousel';
import Jumbotron from './Jumbotron';



function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col>
            < Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Objective</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Education</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Experience</h1>
            <ExperienceCards />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Skills</h1>
            <SkillsCarousel/>
          </Col>
        </Row>  
      </Container>
    </>

  );
}

export default App;

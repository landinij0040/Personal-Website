import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Navbar</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>JumboTron</h1>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Skills</h1>
          </Col>
        </Row>  
      </Container>
    </>

  );
}

export default App;

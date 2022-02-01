
import Row from 'react-bootstrap/Row';
import MyNavbar from './components/mynavbar/MyNavbar';
import ExperienceCards from './components/experiencecards/ExperienceCards';
import SkillsCarousel from './components/skillscarousel/SkillsCarousel';
import MyFooter from './components/myfooter/MyFooter';
import MyOffcanvas from './components/myoffcanvas/MyOffcanvas';

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

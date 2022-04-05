import React from 'react';
import MyNavbar from './components/mynavbar/MyNavbar';
import ExperienceCards from './components/experiencecards/ExperienceCards';
import EducationCards from './components/educationcards/EducationCards';
import ProjectCards from './components/projectscards/ProjectCards';
import SkillsCarousel from './components/skillscarousel/SkillsCarousel';
import MyFooter from './components/myfooter/MyFooter';
import MyOffcanvas from './components/myoffcanvas/MyOffcanvas';
import { Container } from 'react-bootstrap';
import Cards from './components/section-cards/SectionCards';

function App() {
  // const homePage = {
  //   // Title
  //   // Paragraph
  //   // Cards
  // }
  const altSections = [
    [
    <>
      <h1 style={{'fontSize':'2.5rem'}}>Projects</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. </p>
    </>,
    "projects"
    ],
    [
    <>
      <h1 style={{'fontSize':'2.5rem'}}>Experience</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. </p> 
    </>,
    "experience"
    ],
    [
      <>
        <h1 style={{'fontSize':'2.5rem'}}>Education</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. </p>
      </>,
      "education"
    ]
  ]
  return (
    <>
      <MyOffcanvas />
      <MyNavbar />
      <SkillsCarousel/>
      {altSections.map((elem, index) => {
        if(index % 2 === 0){
          return (
            <Container fluid className="p-5">
              {elem[0]}
              <Cards apiTitle={elem[1]}/>
            </Container>
          )
        }else{
          return(
            <Container fluid className="bg-dark text-light p-5">
              {elem[0]}
              <div className="text-dark">
                <Cards apiTitle={elem[1]}/>
              </div>
              
            </Container>
          )
        }    
      })}
      {/* <EducationCards/> */}
      <MyFooter />
    </>
  );
}

export default App;

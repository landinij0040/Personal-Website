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
import YouTube from 'react-youtube';

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
  ];


  const vids = [
    "fC-lGtz063o",
    "636LptRbPzI",
    "SGFxEOEyZtQ",
    "7w-BHRAkdJQ",
    "P65Fhxgo1Ls",
    "GyIB_a8nX9s",
    "oExmaq5yfCQ",
    "w0v-YLYcow0",
    "OKFpBQ9tSqA",
    "ERRp3ww32yo",
    "ymHMVFkp_Y4"
  ]
  return (
    <>
      <MyOffcanvas />
      <MyNavbar />
      <SkillsCarousel/>
      <Container className="p-5">
        <h1 style={{'fontSize':'2.5rem'}}>Making Of Website</h1>
        <p>Below are some videos detailing the making of this very website. </p>


        {vids.map((elem) => {
          return (
            <div className='py-2'>
              <YouTube videoId={elem} containerStyle={{width: '100%'}}/>
            </div>
            
          );
        })}        
          
        
        
      </Container>
      {altSections.map((elem, index) => {
        if(index % 2 !== 0){
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

import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/freshly.png')}
          title="Freshly Clone "
          description="It's a clone of a US based website ,in which user can buy different number of freshly prepared meals through the list of various items from different restaurants on desired dates. It was a solo project ."
          technologies="Javascript - HTML - CSS "
          link_two="https://frosty-neumann-1b644b.netlify.app"
          link_three="https://github.com/RanaRajat/freshly-website-clone"
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
          img={require('../images/lybrate.png')}
          title="Lybrate Clone"
          description="It's a clone of online doctor consultation app In which user can buy medical products and also consult with doctors online.This project was done by team of 6."
          technologies="HTML CSS Javascript MongoDB Express.js Node.js Mongoose"
      
          link_two="https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html"
          link_three="https://github.com/m-sehrawat/Lybrate-Website-Clone-Version-2.0"
         
          link_two_text="Visit"
          link_three_text="Github"
        />
        {/* <Card
          img={require('../images/myglamm.png')}
          title="My Glamm Clone"
          description="MyGlamm is a beauty brand that offers an online beauty products marketplace 
          where user can buy beauty products (team project)"
          technologies="Javascript - HTML - CSS - MongoDb - Express.js -Node.js -Mongoose "
          technologies2=""
          link_two="https://myglamm-clone.herokuapp.com/"
          link_three="https://github.com/RanaRajat/MyGlamm-with-Backend"
          link_two_text="Visit"
          link_three_text="Github"
        /> */}
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  width:78%;

  margin:auto;
  margin-bottom:7rem;
 
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
    
  }
`;

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  width:90%;
  margin:auto;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap:1%;

  @media (max-width: 1120px) {
    
    width:100%;
    margin:auto;
  }
  @media (max-width: 850px) {
     
    grid-template-columns: 100%;

  }
  @media (max-width: 385px) {
    
      margin-left:-2rem;
  }
  @media (max-width: 340px) {
    margin-left:-3rem;


  }

  justify-content: center;
`;

export default Projects;

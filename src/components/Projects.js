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
          description="Freshly is a New York-based prepared meal delivery company that delivers throughout the United States 
          where user can buy meals on the desired dates (solo project) "
          technologies="Javascript - HTML - CSS "
          link_two="https://frosty-neumann-1b644b.netlify.app"
          link_three="https://github.com/RanaRajat/freshly-website-clone"
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
          img={require('../images/lybrate.png')}
          title="Lybrate Clone"
          description="Lybrate is the best online doctor consultation app that has revolutionized the way people in India .(Cloned by team of 6)"
          technologies="HTML CSS Javascript MongoDB Express.js Node.js Mongoose"
      
          link_two="https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html"
          link_three="https://github.com/m-sehrawat/Lybrate-Website-Clone-Version-2.0"
         
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
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
        />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }

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

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Projects;

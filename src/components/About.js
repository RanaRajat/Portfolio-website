import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">About</span>
      </h1>
      <Text>
        <p>
          Hi, I'm <strong>Rajat</strong>.
          My interest in coding developed from my school days when I was in class 11 . At that time, I was studying a subject called Information practices in which I learnt some basics of coding and built some small projects such as a calculator using Net Beans. After school, I pursued my B.E in Information Technology . During my college days, I realized that I was extremely interested in building and designing websites. Hence, I joined Masai school to learn web designing and web development.
    

          I am a Determined and enthusiastic aspiring full-stack developer . I am eager to utilise my skills and upgrade my knowledge by building user-friendly platforms. I love to solve problems related to DSA .

          Besides coding, my interests include distant running , cycling and playing chess . I also love to listen to music and watch movies and web series.

         I am looking forward to working with an interesting company to be a part of the emerging trends in web development.

         Technical skills: JS, MongoDB, Express.js, Node.js, HTML, CSS, React.js.

         While learning MERN stack I built many projects and my projects can be found on GitHub
        .
        </p>
      

        <p>
          <strong>Feel free to contact me anytime!</strong>
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
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

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;

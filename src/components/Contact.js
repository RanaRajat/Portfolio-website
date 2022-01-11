import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


 const Contact = ()=>{
  return(
      
    <Social>
        
    <div className="iconcontainer">
      <a
        className="same"
        href="https://github.com/RanaRajat"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Github profile"
      >
        <FaGithub size="8rem" className="icon" />
        <span className="icontext">Github</span>
      </a>
    </div>
    <div className="iconcontainer">
      <a
        className="same"
        href="https://www.linkedin.com/in/rajat-kumar-213184210"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Github profile"
      >
        <FaLinkedin size="8rem" className="icon" />
        <span className="icontext">LinkedIn</span>
      </a>
    </div>
    <div className="iconcontainer">
      <a
        className="same"
        href="mailto:rajatrana.rk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Github profile"
      >
        <FaEnvelope size="8rem" className="icon" />
        <span className="icontext">Email</span>
      </a>
    </div>
    
  </Social>
  );
}


const Social = styled.div`
width:70%;
margin:auto;

.iconcontainer{
    margin-top:10%;
    
    display:flex;
    flex-direction:column;
    height:10rem;
    margin-top:11rem;
    
}
  a {
    transition: color 0.5s;
    color: ${(props) => props.theme.socialStart};
    &:hover {
      color: ${(props) => props.theme.socialStartHover};
    }
    &:focus {
      color: ${(props) => props.theme.socialStartHover};
    }
  }

 

  display: grid;
  grid-template-columns:32% 32% 32%;
  grid-gap:1%;

 

  
  @media (max-width: 740px) {
    grid-template-columns:47% 47% ;
    grid-gap:1%;
    .iconcontainer{
    margin-top:5rem;}
    
  }
 
  @media (max-width: 450px) {
    grid-template-columns:100% ;
    .iconcontainer{
        margin-top:3rem;}
    
  }

  gap: 1.5rem;
`;

export default Contact;
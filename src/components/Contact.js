import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


 const Contact = ()=>{
  return(
      <div className='contactDiv'>
         <h2 className='title'>Get in touch</h2> 
    <Social>
     
    <div className="iconcontainer">
      <a
        className="same"
        href="https://github.com/RanaRajat"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Github profile"
      >
        <FaGithub size="2rem" className="icon" />
        
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
        <FaLinkedin size="2rem" className="icon" />
        
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
        <FaEnvelope size="2rem" className="icon" />
       
      </a>
    </div>
    
  </Social>
  </div>
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
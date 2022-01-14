import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {SiWhatsapp} from "react-icons/si";
import "./contact.css";
 const Contact = ()=>{
  return(
      <div className='contactDiv'>

        <div className='textDiv'><h1 className='title'>Contact</h1> </div> 
    <Social>
     
    <div className="iconcontainer">
      <a
        className="same"
        href="https://github.com/RanaRajat"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Github profile"
      >
        <FaGithub size="3rem" className="icon" />
        
      </a>
    </div>
    <div className="iconcontainer">
      <a
        className="same"
        href="https://www.linkedin.com/in/rajat-kumar-213184210"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Linkedin profile"
      >
        <FaLinkedin size="3rem" className="icon" />
        
      </a>
    </div>
    <div className="iconcontainer">
      <a
        className="same"
        href="mailto:rajatrana.rk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Gmail"
      >
        <FaEnvelope size="3rem" className="icon" />
       
      </a>

      
    </div>

    <div className="iconcontainer">
      <a
        className="same"
        href=" https://wa.me/+917347530947"
        target="_blank"
        rel="noopener noreferrer"
        title="Look through my Whatsapp "
      >
        <SiWhatsapp size="3rem" className="icon" />
       
      </a>

     
    </div>
    
  </Social>
  </div>
  );
}



const Social = styled.div`

margin-top:4rem;
margin-bottom:10rem;
justify-content:center;
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

 

display:flex;


 

  
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
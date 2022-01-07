import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import "./skills.css";
import {ImHtmlFive} from "react-icons/im";
import {SiCss3} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
import {DiJavascript1} from "react-icons/di";

export const Skills = ()=>{
    return (
      <div>
        <div className='SkillClass'>
          
       
        

        <div className='htmlImg'>< ImHtmlFive /></div>
        <div className="jsImg"><SiCss3 /></div>
        <div className='cssImg'><FaReact/></div>
        <div className='reactjsImg'><SiRedux/></div>
        <div className='nodejsImg'><FaNodeJs/></div>
        <div className='reduxImg'><SiExpress/></div>
        <div className='expressImg'><DiMongodb/></div>
        <div className='mongoImg'><DiJavascript1/></div>







        </div>
        </div>
      );
    };

import React from 'react';
import './Skills.css';
import { SiCplusplus, SiMysql, SiCodio, SiPaloaltosoftware } from 'react-icons/si';
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";



function Skills() {
  return (
    <section className="skills">
      <h2><SiPaloaltosoftware size={25}/> Skills</h2>
      <ul>
        <li><b>Programming Languages:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li><SiCplusplus size={30} /> C++ <SiCodio size={25}/> C <FaJava size={30} /> Java <FaPython size={30} /> Python</li>
          </ul>
        </li>
        <li><b>Web Development:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li><TiHtml5 size={35} /> HTML <BiSolidFileCss size={35} /> CSS <FaReact size={30} /> React</li>
          </ul>
        </li>
        <li><b>Database Management:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li><AiOutlineConsoleSql size={35} /> SQL <SiMysql size={40} /> MySQL</li>
          </ul>
        </li>
        <li><b>Software Development:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li> Agile Methodologies, GitHub</li>
          </ul>
        </li>
        <li><b>Hardware Design and Simulation:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li> VHDL</li>
          </ul>
        </li>
        <li><b>Development Environments and IDEs:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li> Visual Studio Code, Codeblocks, Replit, Vivado</li>
          </ul>
        </li>
        <li><b>Modeling programs:</b> Implement the best solution based on the needs by Solid Edge</li>
        
        <li><b>Management Skills:</b> Leveraging expertise in interpersonal communication, team leadership, and strategic business analysis</li>
      </ul>
    </section>
  );
}

export default Skills;

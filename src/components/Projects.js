import React from 'react';

import './Projects.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaProjectDiagram } from "react-icons/fa";


export default function Projects() {

  return (
    <section className='projects'>
      <h2><FaProjectDiagram size={30}/> Projects</h2>
      <br></br>
      <Tabs>
        <TabList className='tabList'>
          <Tab _hover={{bg: "white"}}
          _selected={{ bg: "gray", color: "black"}}>
            <b>Simon Game</b></Tab>
          <Tab _hover={{bg: "white"}}
          _selected={{ bg: "gray", color: "black"}}>
            <b>Classes Schedule</b></Tab>
          <Tab _hover={{bg: "white"}}
          _selected={{ bg: "gray", color: "black"}}>
            <b>SKDCA Website</b></Tab>
        </TabList>

        <TabPanels className='projectDetails'>
          <TabPanel>
            <p>Individual project for ENSE352 class (C Programming)</p>
            <ul>
              <li>Engineered a Simon Game using C on Keil uVision for the ENSE352 class, incorporating an STM32F103 Nucleo Board for hardware interfacing.</li>
              <li>Designed game logic to run 10 levels of increasing difficulty, with visual feedback provided through a system of 4 LEDs and a separate fail indicator LED.
              Implemented input handling via push buttons with debounced inputs for accurate player interaction.</li>
              <li>Utilized classic "Cylon Eye Scanner" as a dynamic start sequence and an innovative binary display to indicate level progression or failure.</li>
              <li>Applied time constraints to user inputs for enhanced gameplay challenge and utilized an isolated resistor for LED current regulation.</li>
            </ul>
            <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/SimonGame" target="_blank" rel="noopener noreferrer">SimonGame</a></p> 
          </TabPanel>
          <TabPanel>
          <p>Individual project for ENEL384 class (VHDL)</p>
          <ul>
            <li>Conceptualized and developed a synchronous digital circuit for class scheduling on a BASYS-3 FPGA board.</li>
            <li>Programmed using VHDL in Vivado to control display logic, including class, lab, seminar, midterm, 
              and final schedules with user-interactive buttons and switches.</li>
            <li>Engineered a multiplexing solution to display text and numbers across four 7-segment displays, 
              achieving seamless visual output through rapid switching (0.0025 seconds interval).</li>
            <li>Implemented LED indicators for class selection and a weekly schedule display, enhancing user 
              experience and interface intuitiveness.</li>
            <li>Demonstrated proficiency in digital system design and the practical application of 
              hardware description languages and FPGA programming.</li>
          </ul>
          <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/ClassesSchedule" target="_blank" rel="noopener noreferrer">ClassesSchedule</a></p> 
          </TabPanel>
          <TabPanel>
            <p>Web Developer (Team Project)</p>
            <p>Saskatchewan Career Development Association (SKCDA) Website</p>
            <ul>
            <li>Collaborated with a team to design and launch a WordPress-based website aimed at supporting 
              Career Development Practitioners across Saskatchewan.</li>
            <li>Engaged in the full project lifecycle from conceptualization to deployment, ensuring the site provides 
              resources, advocacy, and networking opportunities for professional development.</li>
            <li>Integrated features for member engagement, including forums, event calendars, and professional 
              development modules, leveraging WordPress’s versatile platform.</li>
            <li>Coordinated with cross-functional teams to gather requirements, align objectives, and deliver
               a user-centric experience that aligns with SKDCA’s mission and values.</li>
            <li>Contributed to the creation of a content strategy that addresses the needs of diverse stakeholders 
              within the career development field, enhancing the association's digital presence.</li>
          </ul>
          <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/SKCDA---Webpage---Design" target="_blank" rel="noopener noreferrer">SKCDA Project</a></p> 

          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
}

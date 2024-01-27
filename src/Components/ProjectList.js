// src/Components/ProjectList.js
import React from 'react';
import Projects from './Projects.js';

const projects = [
  {
    image: 'https://medicopharmacyrx.com/wp-content/uploads/2021/07/types-of-pharmacy.jpg',
    name: 'Pharmacy Store Management System',
    descripton: 'This project is GUI based window Java project. ',
    project: 'https://github.com/mariaadil/Pharmacy-Management-System',
  },
  {
    image: 'https://s3.studytonight.com/tutorials/uploads/pictures/1649172766-112478.png',
    name: 'Quiz Game',
    descripton: 'This project is created using C language.',
    project: 'https://github.com/mariaadil/Quiz-Game-using-C',
  },
  {  
    image: 'https://codezips.com/wp-content/uploads/2020/07/flight_1555485290-1024x655.jpg',
    name: 'Ticket Resevation System',
    descripton: 'This is desktop (Windows Form) based on C#. ',
    project: 'https://github.com/mariaadil/Ticket-Reservation-System-Desktop-Application-by-C-',
  },
  {
    image: 'https://media.licdn.com/dms/image/D5612AQFN36thbdgS9w/article-cover_image-shrink_720_1280/0/1682430654475?e=2147483647&v=beta&t=Um4x2qjCgtspD1LkH9EhQnVgBPfKMF_QLBeRKK5CHJA',
    name: 'Database / SQL',
    descripton: 'This project is based on SQL using MySql',
    project: 'https://github.com/mariaadil/SQL',
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:1000/1*40TDXOpybrOPxNvuxyIGVA.jpeg',
    name: 'Culinary Chronicles: A journey Through Taste',
    descripton: 'This is React App. ',
    project: 'https://github.com/mariaadil/Semester-Web-Technology-Project-',
  },
];

const ProjectList = () => (
  <section id='projects'>
    <div className='project'>
        <br/>
        <hr/>
        <h1 className='proj-heading'>My Projects</h1>
      {projects.map((project, index) => (
        <Projects key={index} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectList;

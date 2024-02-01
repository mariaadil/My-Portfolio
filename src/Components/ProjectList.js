// src/Components/ProjectList.js
import React from 'react';
import Projects from './Projects.js';

const projects = [
  {
    image: 'https://cdn.myportfolio.com/ae1cc1e8617ab398e63475661da29499/62367078aca83f3b17e3d65d_rw_1920.JPG?h=be6d7eb71ad9561287279040b772b997',
    name: 'Pharmacy Store Management System',
    descripton: 'This project is GUI based window Java project. ',
    project: 'https://github.com/mariaadil/Pharmacy-Management-System',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoqywG4ltgi0WCUqhE5HJsXh1uWsSsWdqWw&usqp=CAU',
    name: 'Culinary Chronicles: A journey Through Taste',
    descripton: 'This is React App. ',
    project: 'https://github.com/mariaadil/Semester-Web-Technology-Project-',
  },
];

const ProjectList = () => (
  <section id='projects'>
    <div className='project'>
        <h1 className='proj-heading'>My Projects</h1>
      {projects.map((project, index) => (
        <Projects key={index} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectList;

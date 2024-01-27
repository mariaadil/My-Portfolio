import React from 'react';

const Projects = ({ image, name, descripton,project }) => (
  <section id='projects'>
    <div className='project-container'>
      <img className='proj-image' src={image} alt={`${name} Output`} />
      <div className='proj-details'>
        <h3 className='proj-name'>{name}</h3>
        <p>{descripton}</p>
        <a className='proj-link' href={project} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </div>
  </section>
);

export default Projects;

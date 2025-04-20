import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-category">{project.category}</div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={`/projects/${project.id}`} className="btn">En savoir plus</Link>
      </div>
    </div>
  );
};

export default ProjectCard;


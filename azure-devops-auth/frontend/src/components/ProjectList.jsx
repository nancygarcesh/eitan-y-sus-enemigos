import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

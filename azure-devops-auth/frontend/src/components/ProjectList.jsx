import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Proyectos</h2>
      {projects.length > 0 ? (
        <select>
          <option value="" disabled>Selecciona un proyecto</option>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      ) : (
        <p>No hay proyectos disponibles.</p>
      )}
    </div>
  );
};

export default ProjectList;

import React from 'react';

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Materialize comes in two different forms. You can select which version you want depending on your preference and expertise. To start using Materialize, all you have to do is download one of the options below.
          </p>
        </div>
        <div className="card-action grey lighten-4">
          <div>Posted by The Project Planet</div>
          <div>3rd November, 3AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

import React from 'react';

export default function Portfolio({projects}) {
  return (
      <main className="container-fluid d-flex flex-wrap flex-column flex-md-row justify-content-center justify-content-md-around align-items-center">
        {projects.map((project) => (
          <div className="card col-10 col-md-5 mt-4 mx-1" key={project.id}> 
            <img className="card-img-top border" src={project.img} alt="App Screenshot"></img>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.text}</p>
              <p className="card-text small text-muted text-center">{project.tech}</p>
              <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-around">
                <a href={project.liveApp} className="btn btn-primary col-10 col-sm-5 mb-2">Live Site</a>
                <a href={project.gitRepo} className="btn btn-secondary col-10 col-sm-5 mb-2">Github</a>
              </div>
            </div>
          </div>
        ))}
      </main>

  );
}

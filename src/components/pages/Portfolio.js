export default function Portfolio({projects}) {
  return (
    <div className='my-2'>
      <main className="container-fluid d-flex flex-wrap flex-column flex-md-row  space-evenly align-items-center align-items-md-start">
        {projects.map((project) => (
          <div className="card col-10 col-xl-5 mt-4 mx-1" key={project.id}> 
            <img className="card-img-top border" src={project.img} alt="App Screenshot"></img>
            
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.text}</p>
              <p className="card-text small text-muted text-center">{project.tech}</p>
              <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-around">
                <a href={project.liveApp} target="_blank" rel='noreferrer' className="btn btn-primary col-10 col-sm-5 mb-2">Live Site</a>
                <a href={project.gitRepo} target="_blank" rel='noreferrer' className="btn btn-secondary col-10 col-sm-5 mb-2">Github</a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>

  );
}

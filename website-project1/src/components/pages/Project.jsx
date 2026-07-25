function Projects(props) {

  const projects = props.projects;
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Projects</h1>
        <p className="text-muted">
          Here are some of the projects I have built using modern web
          technologies.
        </p>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <p className="card-text">{project.description}</p>
                <div className="mb-4">
                  {project.tech.map((item, index) => (
                    <span key={index} className="badge bg-primary me-2">
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <a className="btn btn-outline-primary btn-sm me-2" href={'/project/'+project.slug}>
                     <i className="fa-solid fa-diagram-project"></i>
                     About Project
                  </a>

                  <a className="btn btn-dark btn-sm" href={project.github}>
                    <i className="fa-brands fa-github "></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
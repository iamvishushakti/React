import { useParams } from "react-router-dom";
import projects from "../../data/ptojectData";

function SubProject() {
  const { pid } = useParams();

  const project = projects.find((item) => item.slug === pid);

  if (!project) {
    return (
      <div className="container py-5">
        <h2>Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-body">

          <h1>{project.title}</h1>

          <p className="lead">{project.description}</p>

          <hr />

          <h3>Project Overview</h3>
          <p>{project.overview}</p>

          <h3>Features</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>Technologies Used</h3>

          <div className="mb-4">
            {project.tech.map((item, index) => (
              <span key={index} className="badge bg-primary me-2">
                {item}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark me-3"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>

        </div>
      </div>
    </div>
  );
}

export default SubProject;
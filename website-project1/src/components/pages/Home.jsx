import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-6">
          <h4 className="text-primary">Hello, I'm</h4>
          <h1 className="display-4 fw-bold">Vishal Kumar</h1>
          <h3 className="text-secondary mb-3">
            Software Developer
          </h3>

          <p className="lead">
            I build responsive and user-friendly web applications using
            React, JavaScript, PHP, Laravel, Bootstrap, and MySQL.
            I enjoy solving real-world problems and creating clean,
            scalable, and efficient web solutions.
          </p>

          <Link className="btn btn-primary me-3" to="/project">
            View Projects
          </Link>

          
            <Link className="btn btn-outline-dark" to="/contact">
                Contact
              </Link>
          
        </div>

        <div className="col-md-6 text-center">
          
        </div>

      </div>
    </div>
  );
}

export default Home;
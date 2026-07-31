import { Link } from "react-router-dom";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
               <FontAwesomeIcon icon={faClock} /> 
                Stop Time Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
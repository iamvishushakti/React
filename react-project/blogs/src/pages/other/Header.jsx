import { Link } from "react-router-dom";
import "../../assets/css/header.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container px-4 py-2">

                {/* Logo */}
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    ✦ Blogify
                </Link>


                {/* Mobile Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Menu */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav mx-auto gap-lg-3">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/explore"
                            >
                                Explore
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/categories"
                            >
                                Categories
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/write"
                            >
                                Write
                            </Link>
                        </li> */}

                    </ul>


                    {/* Sign In */}
                    <div className="mt-3 mt-lg-0">
                        <Link
                            to="/login"
                            className="btn btn-dark"
                        >
                            Sign In
                        </Link>
                    </div>

                </div>

            </div>
        </nav>
    );
}
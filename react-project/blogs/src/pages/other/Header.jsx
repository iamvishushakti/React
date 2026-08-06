import { Link } from "react-router-dom";
import "../../assets/css/header.css";
import AuthContext from "../../Context/auth/AuthContext";
import { useContext } from "react";

export default function Header() {
    const {loginUser, logOut} = useContext(AuthContext);
    console.log(loginUser);

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

                    </ul>


                    {/* Sign In */}
                    {
                        Object.keys(loginUser).length === 0? (
                            
                            <div className="mt-3 mt-lg-0">

                                <Link
                                    to="/login"
                                    className="btn btn-dark"
                                >
                                    Sign In
                                </Link>

                            </div>
                        ) : (
                            <div className="dropdown">

                                <button className="btn btn-dark dropdown-toggle">
                                    {loginUser.name}
                                </button>

                                <ul className="dropdown-menu">

                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </li>

                                    <li>
                                        <button className="dropdown-item" onClick={()=>{logOut()}}>
                                            Logout
                                        </button>
                                    </li>

                                </ul>

                            </div>
                        )
                    }
                </div>

            </div>
        </nav>
    );
}
import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
            <div className="row">
            {/* Brand */}
            <div className="col-md-4 mb-3">
                <h5>MyApp</h5>
                <p>
                Building modern web applications with React and Bootstrap.
                </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                <li>
                    <a href="/" className="text-white text-decoration-none">
                    Home
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-white text-decoration-none">
                    About
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-white text-decoration-none">
                    Contact
                    </a>
                </li>
                </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-3">
                <h5>Contact</h5>
                <p>Email: info@myapp.com</p>
                <p>Phone: +91 98765 43210</p>
            </div>
            </div>

            <hr className="border-secondary" />

            <div className="text-center">
            <p className="mb-0">
                © {new Date().getFullYear()} MyApp. All Rights Reserved.
            </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
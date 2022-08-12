import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Landing() {
    return (
        <div className="bg-white" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container" id="test">
                    <NavLink
                        className="navbar-brand text-primary"
                        id="landLogo"
                        to="/"
                    >
                        New LOGO
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <ul className="navbar-nav ms-auto" id="landNavUl">
                            {/* <NavLink
                                className="nav-link navLink active"
                                aria-current="page"
                                to="/about"
                            >
                                ABOUT
                            </NavLink>
                            <NavLink className="nav-link navLink"  to="/activity">
                                ACTIVITIES
                            </NavLink>
                            <NavLink className="nav-link navLink"  to="/gallery">
                                GALLERY
                            </NavLink>
                            <NavLink className="nav-link navLink"  to="/contact">
                                CONTACT
                            </NavLink> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#activities">Activities</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#testimonials">Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">contact</a>
                            </li>
                            <NavLink
                                to="/login"
                                className="nav-link btn btn-primary text-white landLoginBtn"
                            >
                                LOGIN
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
            <footer className="" id="landFooter">
                <p className="d-flex justify-content-center landFooterTxt">
                    <span className="landFooterDaycareTxt">DAYCARE,</span> All
                    rights reserved, 2022
                </p>
            </footer>
        </div>
    );
}

export default Landing;
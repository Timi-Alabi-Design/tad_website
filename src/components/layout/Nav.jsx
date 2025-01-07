import React, { useState } from "react"
import { Link } from "react-router-dom"
import assets from "../../assets"
import "../../styles/global.css"

const Nav = () => {
        const [isOpen, setIsOpen] = useState(false)

        const toggleMenu = () => {
                setIsOpen(isOpen)
        }

        return (
                <nav className="main-navbar">
                        <div className="container">
                                <div className="nav-main-contianer">

                                        <div className="logo-container">

                                                <Link to="/" className="navbar-logo">
                                                        <img src={assets.logo} alt="TAD Logo" className="logo" />
                                                </Link>
                                        </div>
                                        <div className="nav-links">
                                                <Link className="nav-link">Home</Link>
                                                <Link className="nav-link">About Us</Link>
                                                <Link className="nav-link">Projects</Link>
                                                <Link className="nav-link">Services</Link>
                                                <Link className="nav-link">Contact</Link>

                                                <button className="nav-button">Start a Project</button>

                                        </div>
                                </div>

                        </div>

                </nav>
        )

}

export default Nav
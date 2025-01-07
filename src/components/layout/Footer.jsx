import React from "react";
import assets from "../../assets";
import { Link } from "react-router-dom";


const Footer = () => {
        const currentYear = new Date().getFullYear()
        return (
                <>
                        <div className="footer-container">
                                <div className="footer-box container">
                                        <div className="fotoer-grid">
                                                <img src={assets.logoMark} alt="logomark of TAD" className="footer-logo" />
                                        </div>
                                        <div className="footer-link-box">
                                                <h2 className="footer-link-header">Learn More</h2>
                                                <Link className="footer-link" to="/">Home</Link>
                                                <Link className="footer-link" to="/">About Us</Link>
                                                <Link className="footer-link" to="/">Projects</Link>
                                                <Link className="footer-link" to="/">Services</Link>
                                                <Link className="footer-link" to="/">Contact</Link>
                                        </div>
                                        <div className="footer-link-box">
                                                <h2 className="footer-link-header">Core Services</h2>
                                                <Link className="footer-link" to="/">Strategy</Link>
                                                <Link className="footer-link" to="/">Design</Link>
                                                <Link className="footer-link" to="/">Development</Link>
                                        </div>
                                        <div className="footer-link-box">
                                                <h2 className="footer-link-header">Select Projects</h2>
                                                <Link className="footer-link" to="/">Desu Beauty</Link>
                                                <Link className="footer-link" to="/">Ashabrd Oil & Gas</Link>
                                                <Link className="footer-link" to="/">T.A.E</Link>
                                                <Link className="footer-link" to="/">GLSKN</Link>
                                                <Link className="footer-link" to="/">View All Work</Link>
                                        </div>
                                        <div className="copyright-box">
                                                <p className="copyright">&copy; Timi Alabi Desgin {currentYear}. All rights reserved.</p>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Footer
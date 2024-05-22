import React from 'react';
import "./Navbar.css";

import LinkedInIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.png";
import CodeIcon from "../../assets/code.png";

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='nav-logo' >
                BOOKS.
            </div>
            <div className='nav-socials' >
                <a href='https://github.com/ankit-suman-07/books-dashboard' >
                    <img src={CodeIcon} alt='code-icon' />
                </a>
                <a href='https://github.com/ankit-suman-07' >
                    <img src={GitHubIcon} alt='github-icon' />
                </a>
                <a href='https://www.linkedin.com/in/ankit--suman/' >
                    <img src={LinkedInIcon} alt='linked-in-icon' />
                </a>
            </div>
        </div>
    )
}

export default Navbar
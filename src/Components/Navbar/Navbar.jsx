import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="img/logo/logo.svg" alt="logo.svg" />
            </div>

            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="light-dark-btn">
                <div className="toggle-btn">
                    <div className="value">
                        <p>S</p>
                        <p>M</p>
                    </div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
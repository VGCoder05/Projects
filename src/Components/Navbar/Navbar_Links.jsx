import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar_Links = ({ onClose }) => {
    return (
        <>
            <NavLink to="/E-Com/" onClick={onClose}>Home</NavLink>
            <NavLink to="/E-Com/Categories" onClick={onClose}>Categories</NavLink>
            <NavLink to="/E-Com/Deals" onClick={onClose}>Deals</NavLink>
            <NavLink to="/E-Com/Brands" onClick={onClose}>Brands</NavLink>
            <NavLink to="/E-Com/Contact" onClick={onClose}>Contact</NavLink>

            {/* <div className="dropdown">
                <div className="dropdown-content">
                    <NavLink to="/E-Com/Smartphones">Smartphones</NavLink>
                    <NavLink to="/E-Com/Laptops">Laptops</NavLink>
                    <NavLink to="/E-Com/Accessories">Accessories</NavLink>
                    <NavLink to="/E-Com/Home-Appliances">Home Appliances</NavLink>
                </div>
            </div> */}
        </>
    );
};

export default Navbar_Links;
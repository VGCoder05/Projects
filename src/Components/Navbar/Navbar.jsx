import React, { useState } from 'react';
import { Routes, Route, NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import Sidebar from './Sidebar';
import Navbar_Links from './Navbar_Links';

// import './Navbar.css';

const Navbar = () => {
    const [text, setText] = useState("");
    const [cartCount, setCartCount] = useState(3); // cart count
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='navbar vibrant-gradient'>
                <div className="top_bar">

                    <div className="left">
                        <IoMenuOutline className='toggle-menu' onClick={toggleSidebar} />

                        <NavLink to="/E-Com/">
                            <div className="logo">
                                <img src="img/logo/logo.svg" alt="logo.svg" />
                            </div>
                        </NavLink>
                    </div>

                    <div className="mobile-search-bar">
                        <div className="search-bar">
                            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
                            <IoIosSearch className="search-icon" />
                        </div>
                    </div>

                    <div className="icons">
                        <NavLink to="/E-Com/my_order">
                            <div className="order-icon" ></div>
                        </NavLink>


                        <NavLink to="/E-Com/Cart">
                            <div className="cart-icon">
                                <IoBagHandleSharp className="bag-icon" />
                                <span className="cart-count">{cartCount}</span>
                            </div>
                        </NavLink>


                        <NavLink to="/E-Com/Profile"><MdAccountCircle className="profile-icon" /></NavLink>


                    </div>
                </div>

                <hr />

                <div className="lower_bar">
                    <div className="links">
                        <Navbar_Links />                        
                    </div>
                </div>

                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            </div>

        </>

    );
};

export default Navbar;



{/* <div className="light-dark-btn">
<div className="toggle-btn">
<div className="value">
<p>S</p>
<p>M</p>
</div>
<div className="circle"></div>
</div>
</div> */}
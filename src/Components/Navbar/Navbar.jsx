import React, { useState } from 'react';
import { Routes, Route, NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
// import './Navbar.css';

const Navbar = () => {
    const [text, setText] = useState("");
    const [cartCount, setCartCount] = useState(3); // Example cart count

    return (
        <>
            <div className='navbar vibrant-gradient'>
                <div className="top_bar">
                    <NavLink to="/E-Com/">
                        <div className="logo">
                            <img src="img/logo/logo.svg" alt="logo.svg" />
                        </div>
                    </NavLink>

                    <div className="search-bar">
                        <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
                        <IoIosSearch className="search-icon" />
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
                        <NavLink to="/E-Com/">Home</NavLink>
                        <NavLink to="/E-Com/Categories">Categories</NavLink>
                        {/* <div className="dropdown">
                             <div className="dropdown-content">
                                <NavLink to="/E-Com/Smartphones">Smartphones</NavLink>
                                <NavLink to="/E-Com/Laptops">Laptops</NavLink>
                                <NavLink to="/E-Com/Accessories">Accessories</NavLink>
                                <NavLink to="/E-Com/Home-Appliances">Home Appliances</NavLink>
                            </div> 
                        </div>
                            */}
                        <NavLink to="/E-Com/Deals">Deals</NavLink>
                        <NavLink to="/E-Com/Brands">Brands</NavLink>
                        <NavLink to="/E-Com/Contact">Contact</NavLink>
                    </div>
                </div>



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
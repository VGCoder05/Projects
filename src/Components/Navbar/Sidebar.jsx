import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar_Links from './Navbar_Links';


const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
                <Navbar_Links onClose={onClose}/>
            </div>
        </div>
    );
};

export default Sidebar;
import React from 'react';
// import Home_page from './Components/Home_page/Home_page';
// import Navbar from './Components/Navbar/Navbar';
import Routed_navbar from './Components/Navbar/Routed_navbar';
// import Product_page from './Components/Product_page/Product_page';
import { Routes, Route, NavLink } from "react-router";
import './App.css'


const App = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Routed_navbar/>
            {/* <Home_page/> */}
            {/* <Product_page /> */}
        </div>
    );
};

export default App;
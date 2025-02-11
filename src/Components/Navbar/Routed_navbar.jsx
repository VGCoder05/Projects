import React from 'react';
import { Routes, Route, NavLink, useParams, Navigate } from "react-router";
import Navbar from './Navbar';
import Home_page from '../Home_page/Home_page';



const Routed_navbar = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path='/E-Com/' element={<Home_page />} />
                <Route path='/E-Com/Product/:id' element={<Product />} />
                <Route path='/E-Com/About' element={<About />} />
                <Route path='/E-Com/Under_work' element={<Under_work />} />
                <Route path='*' element={<Navigate to="/E-Com/Under_work" />} />

            </Routes>

        </div>
    );
};

export default Routed_navbar;

export const About = () => <h2>About Page</h2>;
export const Work = () => <h2>Work Page</h2>;
export const Contact = () => <h2>Contact Page</h2>;
export const Product = () => {
    const { id } = useParams();

    return (
        <>
            <h2>Product Page: {id}</h2>
        </>
    )
};

export const Under_work = () => <h2>Page is Under Work </h2>;

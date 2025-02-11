import React from 'react';
import { Routes, Route, useNavigate } from "react-router";


const Section = (props) => {
    const navigate = useNavigate();
    const Prod_page = (number) => {
        navigate(`/E-Com/Product/${number}`);
        // alert(`CLicked ${number}`)
    }


    return (
        <div className='section'>
            <div className="grid">
                {[...Array(parseInt(props.cards_no))].map((_, index) => (
                    // Deal Card
                    <div key={index} className="card" onClick={() => { Prod_page(index) }}>
                        {/* Deal Product image */}
                        <div className="image-container">
                            <img
                                src={`img/project${index + 1}.jpg`}
                                alt="Item"
                                className="img"
                            />
                        </div>

                        <h4>Product Name</h4>
                        <div className="price">
                            <span className="original-price">$999</span>
                            <span className="discounted-price">$799</span>
                        </div>
                        <div className="btn">
                            <a href='#'>View Details</a>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className='show-more-btn'>Show More</button>
        </div>
    );
};

export default Section;



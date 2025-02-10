import React from 'react';

const Section = (props) => {
    return (
        <div className='section'>
            <div className="grid">
                {[...Array(parseInt(props.cards_no))].map((_, index) => (
                    // Deal Card
                    <div key={index} className="card">
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
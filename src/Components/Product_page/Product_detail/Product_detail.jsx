import React, { useState } from 'react';

const Product_detail = () => {
    const [mrp, setmrp] = useState(1000);
    const [discount_percentage, setdiscount_percentage] = useState(25);
    const [count, setcount] = useState(1);
    const [disable, setdisable] = useState("");

    return (
        <div className='product_detail_display'>
            <div className="main_detail">
                <h1 className="product_name">Name</h1>
                <small>By Company</small>
                <div className="rating">
                    <p>⭐ 4.5</p>
                </div>
                <div className="price">
                    <div className="discounted_price">{(mrp * (100 - discount_percentage)) / 100}</div>
                    <div className="original_price">{mrp}</div>
                    <div className="discounted_percentage">({discount_percentage}% OFF)</div>
                </div>
                <div className="quantity-btn">
                    <p>Quantity:</p>
                    <div className="btn">
                        <button
                            className='decrease'
                            onClick={
                                () => {
                                    if (count > 0) {
                                        setcount(prev => prev - 1);
                                    }
                                }
                            }
                        >-</button>
                        <p className="quantity">{count}</p>
                        <button
                            className='increase'
                            onClick={
                                () => {
                                    if (count < 10) {
                                        setcount(prev => prev + 1);
                                    }
                                }
                            }
                        >+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product_detail;
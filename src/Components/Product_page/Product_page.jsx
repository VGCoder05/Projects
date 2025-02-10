import React from 'react';
import Product_display from './Product_display/Product_display';
import Product_detail from './Product_detail/Product_detail';
import Features from './Feature/Features';
import Options from './Options/Options';
import About_Product from './About_Product/About_Product';
import './Product_page.css';

const Product_page = () => {
    return (
        <div className='product_page'>
            <div className="right">
                <Product_display />
            </div>
            <div className="left">
                <Product_detail />
                <Features />
                <Options />
                <About_Product />
            </div>
        </div>
    );
};

export default Product_page;
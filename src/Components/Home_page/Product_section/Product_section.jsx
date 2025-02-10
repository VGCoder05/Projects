import React from 'react';
import Section from '../Deals_of_Day_&_Best_Seller_Section/Section';

const Product_section = () => {
    return (
        <div>
            {/* Deals of the Day Section */}
            <section className="product">
                <h2>Product</h2>
                {/* Product Grid */}
                <Section cards_no="12" />
            </section>
        </div>
    );
};

export default Product_section;
import React from 'react';
import Section from '../Deals_of_Day_&_Best_Seller_Section/Section';

const Best_Seller_Section = () => {
    return (
        <>
            {/* Bestsellers Section */}
            <section className="bestsellers">
                <h2>Bestsellers</h2>
                <Section cards_no="4" />
            </section>
        </>
    );
};

export default Best_Seller_Section;
import React from 'react';
import Section from '../Deals_of_Day_&_Best_Seller_Section/Section';

const Deals_of_Day_Section = () => {
    return (
        <>
            {/* Deals of the Day Section */}
            <section className="deals">
                <h2>Deals of the Day</h2>
                {/* Deal Grid */}
                <Section cards_no="4" />
            </section>
        </>
    );
};

export default Deals_of_Day_Section;
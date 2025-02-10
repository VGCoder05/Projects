import React from 'react';

const Categories_Section = () => {
    return (
        <>
            {/* Featured Categories Section */}
            <section className="categories">
                <h2>Featured Categories</h2>
                <div className="grid">
                    {[
                        "Smartphones & Accessories",
                        "Laptops & Computers",
                        "Audio Devices",
                        "Cameras & Accessories",
                        "Gaming",
                        "Home Appliances",
                        "Wearables",
                    ].map((category, index) => (
                        <div key={index} className="category-card">
                            <img
                                src={`img/project${index + 4}.jpg`}
                                alt={category}
                                className="category-image"
                            />
                            <h3>{category}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Categories_Section;
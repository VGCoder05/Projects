import React from 'react';

const Banner_Section = () => {
    return (
        <>
            {/* Hero Section  */}
            <div className="banner-section">
                {/* Carousel */}
                <div className="slide">
                    {/* <div className="banner" style={{ '--img-url': `url(img/banner.jpg)` }}> */}
                    <div className="banner">
                        <img src="img/banner.jpg" />
                        <div className="overlay">
                            <h2>Explore New Smartphones</h2>
                            <button className="btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner_Section;
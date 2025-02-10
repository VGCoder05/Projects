import React from 'react';

const Product_display = () => {
    return (
        <div className='product_display'>
            
            <div className="all_product_img">
                {[...Array(parseInt(5))].map((_, i) => (
                    <img className="products" src={`img/project${i + 1}.jpg`} alt="product" />
                ))}
            </div>

            <div className="product_img_display">
                <img className="product" src={`img/project${1}.jpg`} alt="product" />
            </div>

        </div>
    );
};

export default Product_display;
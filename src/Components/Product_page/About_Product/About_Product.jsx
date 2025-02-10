import React, { useState } from "react";

const About_Product = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowMore = () => {
        setShowAll((prev) => !prev);
    };

    const listItems = [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo modi animi asperiores ullam. Iure, quisquam!",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo modi animi asperiores ullam. Iure, quisquam!",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo modi animi asperiores ullam. Iure, quisquam!",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo modi animi asperiores ullam. Iure, quisquam!",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo modi animi asperiores ullam. Iure, quisquam!"
    ];

    return (
        <div className="about_product">
            <ul>
                {listItems.slice(0, showAll ? listItems.length : 4).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button className="show-more-details" onClick={toggleShowMore}>
                {showAll ? "Show Less" : "See more product details"}
            </button>
        </div>
    );
};

export default About_Product;

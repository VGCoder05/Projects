import React from "react";
import Banner_Section from "./Banner_Section/Banner_Section";
import Categories_Section from "./Categories_Section/Categories_Section";
import Deals_of_Day_Section from "./Deals_of_Day_Section/Deals_of_Day_Section";
import Best_Seller_Section from "./Best_Seller_Section/Best_Seller_Section";
import Product_section from "./Product_section/Product_section";
import "./Home_page.css";

const HomePage = () => {
  return (
    <div className="container">

      {/* Banner Section */}
      <Banner_Section />
      {/* Categories Section */}
      <Categories_Section />
      {/* Deals of the Day Section */}
      <Deals_of_Day_Section />
      {/* Bestsellers Section */}
      <Best_Seller_Section />
      {/* Product Section */}
      <Product_section/>

    </div>
  );
};

export default HomePage;

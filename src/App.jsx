import React from 'react';
import Home_page from './Components/Home_page/Home_page';
import Navbar from './Components/Navbar/Navbar';
import Product_page from './Components/Product_page/Product_page';

const App = () => {
    return (
        <div>
            <Navbar/>
            {/* <Home_page/> */}
            <Product_page />
        </div>
    );
};

export default App;
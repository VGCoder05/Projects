import { useState, useEffect } from "react";
import Multiple_options_option from "./Multiple_options_option";
import Fixed_detail from "./Fixed_detail";

const Options = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("product.json") // Replace with the correct path
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    function Run() {
        console.log(products)
    }
    return (
        <div className='options'>
            <h2>Product</h2>
            {
                products.map((product) => (
                    <>
                        <Multiple_options_option chooices={product.options} />
                        <Fixed_detail fixed_detail={product.fixed_detail} />                        
                    </>
                ))
            }
        </div>
    );
};

export default Options;


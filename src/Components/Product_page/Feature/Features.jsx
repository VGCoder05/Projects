import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
import { GiDiamondTrophy } from "react-icons/gi";

const features = () => {
    return (
        <div>
            <div className="features">
                <div className="feature">
                    <i className="return"></i>
                    <p>7 Days Return</p>
                </div>
                <div className="feature">
                    <CiDeliveryTruck />
                    <p>Free Delivery</p>
                </div>
                <div className="feature">
                    <FaLock />
                    <p>Secure Payment</p>
                </div>
                <div className="feature">
                    <GiDiamondTrophy />
                    <p>Top Brands</p>
                </div>
            </div>
        </div>
    );
};

export default features;
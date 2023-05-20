import React, { useEffect } from 'react';
import './ToyCard.css';
import AOS from "aos";
import "aos/dist/aos.css";

const ToyCard = ({ photo }) => {

    // AOS implement
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    return (
        <div className="card shadow-2xl card-compact border p-7 toyimg w-96 bg-base-100 shadow-xl">
            
            <figure><img data-aos="flip-left" className='h-80 rounded w-full' src={photo} alt="Shoes" /></figure>
            
        </div>
    );
};

export default ToyCard;
import React from 'react';
import './ToyCard.css'

const ToyCard = ({photo}) => {
    return (
        <div className="card shadow-2xl card-compact border p-7 toyimg w-96 bg-base-100 shadow-xl">
        <figure><img className='h-80 w-full' src={photo} alt="Shoes" /></figure>
    </div>
    );
};

export default ToyCard;
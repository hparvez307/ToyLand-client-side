import React from 'react';

const ToyCard = ({photo}) => {
    return (
        <div className="card shadow-2xl card-compact border p-7 border-red-300 w-96 bg-base-100 shadow-xl">
        <figure><img className='h-80 w-full' src={photo} alt="Shoes" /></figure>

    </div>
    );
};

export default ToyCard;
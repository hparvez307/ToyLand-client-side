import React from 'react';

const SubCategoryCard = ({photo}) => {
    return (
        <div className="card mx-auto w-96 bg-base-100 shadow-xl">
  <figure><img className='p-8' src={photo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default SubCategoryCard;
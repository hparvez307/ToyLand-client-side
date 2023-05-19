import React from 'react';

const SubCategoryCard = ({toy}) => {

  const {name,rating,sellerEmail, description, sellerName, subCategory, photo, price, quantity} = toy;

    return (
        <div className="card mx-auto w-96 bg-base-100  shadow-inner shadow-rose-300">
  <figure><img className='p-2' src={photo}alt="Shoes" /></figure>
  <div className="card-body text-center">
  <h2 className="text-3xl text-bold ">  {name}</h2>
  <p><span className='text-bold '>price:</span>  ${price}</p>
    <p><span className='text-bold '>Rating:</span> {rating}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default SubCategoryCard;
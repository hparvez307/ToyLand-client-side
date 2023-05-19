import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../allHooks/useTitle';

const ToyDetails = () => {
  const { id } = useParams();
  useTitle('Toy Details');
  const [toy, setToy] = useState([]);

  const { name, rating, sellerEmail, description, sellerName, subCategory, photo, price, quantity } = toy;

  useEffect(() => {
    fetch(`https://toy-land-server.vercel.app/toys/${id}`)
      .then(res => res.json())
      .then(data => {
        setToy(data)
      })
  }, [])

  return (
    <div className='w-10/12 mx-auto pt-20'>

      <div className="card lg:card-side bg p-10 bg-base-100 shadow-xl">
        <figure><img className='w-[400px] md:ml-36 h-[350px] border' src={photo} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="text-3xl text-bold mb-5">  {name}</h2>
          <h2 className=""><span className='text-bold '>Seller Name:</span> {sellerName}</h2>
          <p className='pt-2'><span className='text-bold  '>Seller Email:</span> {sellerEmail}</p>
          <p><span className='text-bold '>price:</span>  ${price}</p>
          <p><span className='text-bold '>Rating:</span> {rating}</p>
          <p><span className='text-bold '>Available Quantity:</span> {quantity}</p>
          <p> {description}</p>
        </div>
      </div>



    </div>
  );
};

export default ToyDetails;
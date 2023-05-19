import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({toy}) => {
    const {name, sellerName, subCategory, _id, price, quantity} = toy;
    return (
        <>
        
        <tr>
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td className='pl-5'>{subCategory}</td> 
        <td className='pl-3'>${price}</td> 
        <td className='pl-16'>{quantity}</td> 
        <td><Link to={`/toyDetails/${_id}`}><button className='btn btn-error'>View Details</button></Link></td>
      </tr>
      </>
    );
};

export default AllToyRow;
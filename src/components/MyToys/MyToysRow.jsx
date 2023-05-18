import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({toy}) => {
    const {name, sellerName, subCategory, _id, price, quantity} = toy;
    return (
       <>
        
        <tr>
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td className='pl-5'>{subCategory}</td> 
        <td className='pl-3'>{price}</td> 
        <td className='pl-16'>{quantity}</td> 
        <td><Link to={`/toyUpdate/${_id}`}><button className='btn btn-primary'>Update</button></Link></td>
        <td><Link to={`/toyDelete/${_id}`}><button className='btn btn-error'>Delete</button></Link></td>
      </tr>
      </>
    );
};

export default MyToysRow;
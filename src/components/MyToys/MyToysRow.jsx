import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({toy,setReload}) => {
    const {name, sellerName, subCategory, _id, price, quantity} = toy;


    const handleDelete = id => {
        fetch(`https://toy-land-server.vercel.app/toyDelete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setReload(true);
            console.log(data);
           
        })
    }
    return (
       <>
        
        <tr>
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td className='pl-5'>{subCategory}</td> 
        <td className='pl-3'>{price}</td> 
        <td className='pl-16'>{quantity}</td> 
        <td><Link to={`/toyUpdate/${_id}`}><button className='btn btn-primary'>Update</button></Link></td>
        <td><button onClick={()=>handleDelete(_id)} className='btn btn-error'>Delete</button></td>
      </tr>
      </>
    );
};

export default MyToysRow;
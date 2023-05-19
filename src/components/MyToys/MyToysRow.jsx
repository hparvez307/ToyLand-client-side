import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({toy,setReload}) => {
    const {name, sellerName, subCategory, _id,photo, price,sellerEmail, quantity} = toy;


    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-land-server.vercel.app/toyDelete/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    setReload(true);
                    console.log(data);
                   
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
       <>
        
        <tr>


        <td>
          <div className="flex gap-14 items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div cl>
              <div className="font-bold">{sellerName}</div>
              <div className="text-sm opacity-50">{sellerEmail}</div>
            </div>
          </div>
        </td>



        
        <td>{name}</td> 
        <td className='pl-5'>{subCategory}</td> 
        <td className='pl-3'>${price}</td> 
        <td className='pl-16'>{quantity}</td> 
        <td><Link to={`/toyUpdate/${_id}`}><button className='btn btn-primary'>Update</button></Link></td>
        <td><button onClick={()=>handleDelete(_id)} className='btn btn-error'>Delete</button></td>
      </tr>
      </>
    );
};

export default MyToysRow;
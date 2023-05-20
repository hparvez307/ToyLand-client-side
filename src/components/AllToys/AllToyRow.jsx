import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AllToyRow = ({ toy }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { name, sellerName, subCategory, _id, price, quantity } = toy;



  const handleViewDetails = () => {

    // if the user not logged in show a sweet alert and redirect to login page 
    if (!user) {
      Swal.fire({
        title: 'Login!',
        text: `You have to log in first to view ${name} details!`,
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      navigate(`/toyDetails/${_id}`);
    } else {
      navigate(`/toyDetails/${_id}`);
    }
  }
  return (
    <>

      <tr>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td className='pl-5'>{subCategory}</td>
        <td className='pl-3'>${price}</td>
        <td className='pl-16'>{quantity}</td>
        <td><button onClick={handleViewDetails} className='btn btn-error'>View Details</button></td>
      </tr>
    </>
  );
};

export default AllToyRow;
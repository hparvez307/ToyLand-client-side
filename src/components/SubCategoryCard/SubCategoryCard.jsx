import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SubCategoryCard = ({ toy }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { name, rating, _id, photo, price } = toy;


  const handleViewDetails = () => {

    // if the user not logged in show a sweet alert and redirect to login page 
    if (!user) {
      Swal.fire({
        title: 'Login!',
        text: 'You have to log in first to view details!',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      navigate(`/toyDetails/${_id}`);
    } else {
      navigate(`/toyDetails/${_id}`);
    }
  }

  return (
    <div className="card mx-auto w-96 bg-base-100  shadow-inner shadow-rose-300">
      <figure><img className='p-2' src={photo} alt="Shoes" /></figure>
      <div className="card-body text-center">
        <h2 className="text-3xl text-bold ">  {name}</h2>
        <p><span className='text-bold '>price:</span>  ${price}</p>
        <p><span className='text-bold '>Rating:</span> {rating}</p>
        <div className="card-actions justify-center">
          <button onClick={handleViewDetails} className='btn btn-error'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
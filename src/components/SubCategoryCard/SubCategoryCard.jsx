import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const SubCategoryCard = ({ toy }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { name, rating, _id, photo, price } = toy;

  const ratings = parseInt(rating);
  const rate = Math.floor(ratings);

  // AOS implement
  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);


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
    <div data-aos="fade-up" className="card mx-auto  w-96 bg-base-100  shadow-inner shadow-rose-300">
      <figure><img className='p-6 ' src={photo} alt="Shoes" /></figure>
      <div className="card-body text-center">
        <h2 className="text-3xl text-bold ">  {name}</h2>
        <p><span className='text-bold '>price:</span>  ${price}</p>

        <div className='flex justify-center'>
          <div>
            <span className='text-bold '>Rating:</span> {rating}
          </div>
          {
            (rate > 4) ? <div className='flex ml-2 mt-1 text-amber-400 '>
              <FaStar /> <FaStar /><FaStar /> <FaStar /> <FaStar />
            </div>
              : <div className='flex ml-2 mt-1 text-amber-400 '>
                <FaStar /> <FaStar /><FaStar /> <FaStar /> <FaStarHalf />
              </div>
          }
        </div>

        <div className="card-actions  mt-4 justify-center">
          <button onClick={handleViewDetails} className='btn btn-error'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
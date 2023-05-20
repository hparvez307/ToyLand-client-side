import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToyCollectionCard = ({ toy }) => {

    const { name, sellerName, rating, subCategory, _id, photo, price, sellerEmail, quantity } = toy;

    const ratings = parseInt(rating);
    const rate = Math.floor(ratings);

    const notify = () => toast(`Added to cart ${name}`);

    return (
        <div className="card  bg-base-100 shadow-2xl">
            <figure className="px-10  pt-10">
                <figure><img className='p-6 border' src={photo} /></figure>
            </figure>
            <div className="card-body bottom-0 items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>price: {price}</p>
                <div className='flex justify-center'>
                    <div>
                        <span className='text-bold '>rating:</span> {rating}
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

                {/* add toastify for buy now button */}
                <div className="card-actions mt-2">
                    <button onClick={notify} className="btn btn-primary">Buy Now</button>
                    <ToastContainer />
                </div>
            </div>

        </div>

    );
};

export default ToyCollectionCard;
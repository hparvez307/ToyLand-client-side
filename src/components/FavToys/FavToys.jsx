import React from 'react';
import { Link } from 'react-router-dom';

const FavToys = () => {
    return (
        <>
            <div>
                <h1 className='text-5xl mt-20 text-center font-bold opacity-80 '>Favorite Toy Collection</h1>

                <div className='md:h-[90vh] mt-6 flex flex-col md:flex-row justify-between items-center p-10 gap-5'>

                    <div className=' h-full w-full'>
                        <h1 className='text-2xl text-bold text-center mb-4'>Sports Car</h1>
                        <Link to='/toyCard'>
                        <img className='h-full w-full' src="https://i.ibb.co/KVsK5gD/photo-1536454891705-7f5a5c762d3a-ixlib-rb-4-0.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='h-full w-full'>
                        <h1 className='text-2xl text-bold text-center mb-4'>Mixed Collection</h1>

                        <div className='flex flex-col   justify-end gap-9  items-center'>
                            <div className=' '>
                            <Link to='/toyCard'>  <img className='h-[255px]' src="https://i.ibb.co/HKzrmWQ/photo-1596461404969-9ae70f2830c1-ixlib-rb-4-0.jpg" alt="" /> </Link>
                            </div>

                            <div className='  '>
                            <Link to='/toyCard'>  <img className='h-[255px]' src="https://i.ibb.co/zSVPNDw/photo-1585366119957-e9730b6d0f60-ixlib-rb-4-0.jpg" alt="" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-full'>
                        <h1 className='text-2xl text-bold text-center  mb-4'>Toy Police Car</h1>
                        <Link to='/toyCard'> <img className='h-full' src="https://i.ibb.co/b7Mz39V/photo-1503739171234-327ce271626f-ixlib-rb-4-0.jpg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavToys;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './AddToy.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToy = () => {
    const {  user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handleAddToy = (data) => {

        console.log(data)
    }

    return (
        <div className='container my-10 w-11/12 mx-auto'>


            <form className='container w-10/12 mx-auto p-10' onSubmit={handleSubmit(handleAddToy)}>


                <div className='md:flex justify-between gap-10'>
                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Toy Photo Url</span>
                            <input className="input px-3 input-bordered"
                                {...register('photo', { required: true })}
                                type='url'
                                placeholder='Photo Url'
                            /> </label>
                    </div>


                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Toy Name</span>
                            <input className="input px-3 input-bordered"
                                {...register('name', { required: true })}
                                type='text'
                                placeholder='Toy Name'
                            /> </label>
                    </div>
                </div>


                <div className='md:flex justify-between gap-10'>
                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Seller Name</span>
                            <input className="input px-3 input-bordered"
                                {...register('sellerName', { required: true })}
                                type='text'
                                defaultValue={user?.displayName}
                            /> </label>
                    </div>


                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Seller Email</span>
                            <input className="input px-3 input-bordered"
                                {...register('sellerEmail', { required: true })}
                                type='text'
                                defaultValue={user?.email}
                            /> </label>
                    </div>
                </div>





                <div className='md:flex justify-between gap-10'>
                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Sub Category</span>
                            <input className="input px-3 input-bordered"
                                {...register('subCategory', { required: true })}
                                type='text'
                                placeholder='Sub Category'
                            /> </label>
                    </div>


                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Price</span>
                            <input className="input px-3 input-bordered"
                                {...register('price', { required: true })}
                                type='number'
                                placeholder='Price'
                            /> </label>
                    </div>
                </div>


                <div className='md:flex justify-between gap-10'>
                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Rating</span>
                            <input className="input px-3 input-bordered"
                                {...register('rating', { required: true })}
                                type='text'
                                placeholder='Rating'
                            /> </label>
                    </div>


                    <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Available Quantity</span>
                            <input className="input px-3 input-bordered"
                                {...register('quantity', { required: true })}
                                type='number'
                                placeholder='Available Quantity'
                            /> </label>
                    </div>
                </div>



                <div className="my-6 w-full">
                        <label className="input-group input-group-vertical">
                            <span>Detail Description</span>
                            <input className="input px-3 input-bordered"
                                {...register('description', { required: true })}
                                type='text'
                                placeholder='Detail Description'
                            /> </label>
                    </div>



              <button className='btn btn-block'><input type="submit" value='Add Toy' className='text-3xl' /></button>
                
            </form>






        </div>
    );
};

export default AddToy;
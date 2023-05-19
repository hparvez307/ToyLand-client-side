import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useTitle from '../allHooks/useTitle';

const ToyUpdate = () => {
    useTitle('Toy Update');

    const { id } = useParams();
    const [toy, setToy] = useState([]);
    const { description, price, quantity, _id } = toy;



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpdateToy = (data) => {


        Swal.fire({
            title: 'Are you sure to update?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-land-server.vercel.app/updateAToy/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                    })
                Swal.fire(
                    'Updated!',
                    'Your file has been Updated.',
                    'success'
                )
            }
        })

        console.log(data)


    }



    useEffect(() => {
        fetch(`https://toy-land-server.vercel.app/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })
    }, [])
    return (
        <div className='container my-10 w-11/12 rounded mx-auto'>


            <form className='container w-10/12 mx-auto p-10' onSubmit={handleSubmit(handleUpdateToy)}>



                <div className="my-6 w-full">
                    <label className="input-group input-group-vertical">
                        <span>Price</span>
                        <input className="input px-3 input-bordered"
                            {...register('price', { required: true })}
                            type='text'
                            defaultValue={price}
                        /> </label>
                </div>


                <div className="my-6 w-full">
                    <label className="input-group input-group-vertical">
                        <span>Available quantity</span>
                        <input className="input px-3 input-bordered"
                            {...register('quantity', { required: true })}
                            type='text'
                            defaultValue={quantity}
                        /> </label>
                </div>


                <div className="my-6 w-full">
                    <label className="input-group input-group-vertical">
                        <span>Details Description</span>
                        <input className="input px-3 input-bordered"
                            {...register('description', { required: true })}
                            type='text'
                            defaultValue={description}
                        /> </label>
                </div>



                <button className='btn btn-block'><input type="submit" value='Update Toy' className='text-3xl' /></button>

            </form>






        </div>
    );
};

export default ToyUpdate;
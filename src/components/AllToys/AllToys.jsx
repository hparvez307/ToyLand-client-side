import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';
import { useForm } from 'react-hook-form';
import useTitle from '../allHooks/useTitle';





const AllToys = () => {

  useTitle('All Toys');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toys, setToys] = useState([]);


  // setup  filter by toy name for alltoys section 
  const searchToyByName = (data) => {
    console.log(data.name)
    fetch(`https://toy-land-server.vercel.app/allToys?name=${data?.name}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          console.log(data);
          setToys(data);
        }
      })
  }



  useEffect(() => {
    fetch('https://toy-land-server.vercel.app/toys')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setToys(data);
      })
  }, [])




  return (
    <div>

      <form className='container flex mt-3 w-8/12 md:w-4/12 gap-2 mx-auto ' onSubmit={handleSubmit(searchToyByName)}>

        <div className=" w-full">
          <label className="input-group input-group-vertical">
            <input className="input px-3 input-bordered"
              {...register('name', { required: true })}
              type='text'
              placeholder='Toy Name'
            /> </label>
        </div>

        <button className='btn '><input type="submit" value='Search' className='text-xl' /></button>

      </form>


      <div className="overflow-x-auto">
        <table className="table  w-11/12 mx-auto mt-3 mb-10">
          <thead>
            <tr >

              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th >Available Quantity</th>
              <th className='pl-14'>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              toys.slice(0, 20).map((toy, index) => <AllToyRow toy={toy} key={index + 1}></AllToyRow>)
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AllToys;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from './MyToysRow';
import useTitle from '../allHooks/useTitle';

const MyToys = () => {

  useTitle('My Toys');

  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [reload, setReload] = useState(false);

  console.log(myToys)

  const handleMax = () => {
    fetch('https://toy-land-server.vercel.app/maxPriceToy')
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
      })
  }


  const handleMin = () => {
    fetch('https://toy-land-server.vercel.app/minPriceToy')
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
      })
  }



  useEffect(() => {
    fetch(`https://toy-land-server.vercel.app/myToys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data)
        setReload(false);
      })
  }, [reload])
  return (
    <div>

      <div className='flex justify-center  gap-4 mt-10'>
        <h1 className='text-center  text-4xl font-bold'>Filter by:</h1>
        <button onClick={handleMin} className='btn btn-primary'>Lower Price</button>
        <button onClick={handleMax} className='btn btn-error'>Higher Price</button>
      </div>


      <div className="overflow-x-auto">
        <table className="table  w-11/12 mx-auto my-10">
          <thead>
            <tr >

              <th className='text-center'>Seller</th>

              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th >Available Quantity</th>
              <th className='text-end '>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>



            {
              myToys.map((toy, index) => <MyToysRow toy={toy} setReload={setReload} key={index + 1}></MyToysRow>)
            }




          </tbody>

        </table>
      </div>
    </div>

  )
};

export default MyToys;
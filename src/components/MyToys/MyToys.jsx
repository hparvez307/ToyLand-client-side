import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    console.log(myToys)

    useEffect(()=>{
        fetch(`https://toy-land-server.vercel.app/myToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)

        })
    },[])
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table  w-11/12 mx-auto my-10">
    <thead>
      <tr >
        
        <th>Seller Name</th> 
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
        myToys.map((toy, index) => <MyToysRow toy={toy} key={index+1}></MyToysRow>)
    }
   
   
    
   
    </tbody> 
  
  </table>
        </div>
        </div>
    
)};

export default MyToys;
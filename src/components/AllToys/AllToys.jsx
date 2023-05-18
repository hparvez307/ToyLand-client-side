import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';

const AllToys = () => {

    const [toys, setToys] = useState([]);


    useEffect(()=>{
     fetch('https://toy-land-server.vercel.app/toys')
     .then( res => res.json())
     .then(data => {
        console.log(data)
        setToys(data);
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
        <th className='pl-14'>Action</th>
      </tr>
    </thead> 
    <tbody>
      
     
   
    {
        toys.slice(0,20).map((toy, index) => <AllToyRow toy={toy} key={index+1}></AllToyRow>)
    }
   
   
    
   
    </tbody> 
  
  </table>
</div>






























        
        </div>
    );
};

export default AllToys;
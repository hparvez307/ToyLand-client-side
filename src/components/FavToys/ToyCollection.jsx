import React, { useEffect, useState } from 'react';
import ToyCollectionCard from './ToyCollectionCard';

const ToyCollection = () => {
    

    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('https://toy-land-server.vercel.app/toys')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setToys(data);
          })
      }, [])


    return (
    <div className='w-11/12  mx-auto'>

<h1 className='text-5xl text-bold text-center my-5'>Toy Collection</h1>

        <div className='grid grid-cols-1  justify-center gap-5 md:grid-cols-3'>

            


            {
                toys.map((toy)  => <ToyCollectionCard toy={toy} key={toy._id}></ToyCollectionCard>)
            }
        </div>
        </div>
        
    );
};

export default ToyCollection;
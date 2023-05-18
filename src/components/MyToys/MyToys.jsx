import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

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
            
        </div>
    );
};

export default MyToys;
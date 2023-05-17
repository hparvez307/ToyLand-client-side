import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex flex-col gap-6  max-[571px]:mb-32 md:flex-row  items-center justify-between my-10 '>

        <h1 className='text-5xl  font-extrabold tracking-wider'>Toy<span className='' >Land</span></h1>

        <div className=' flex gap-3 items-center'>
            <NavLink to="/" className={({ isActive }) => isActive ? "bg-yellow-500 rounded" : ""} ><span className='px-3 font-bold text-2xl'>Home</span></NavLink>

            <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-yellow-500 rounded" : ""} ><span className='px-3 font-bold text-2xl'>Blog</span></NavLink>


            {
                 <img  className='h-16 w-16 rounded-full'
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /> 
            }


           
                    <Link to='/login' className='font-bold text-2xl'>Login</Link>
            
        </div>



    </div>
    );
};

export default Header;
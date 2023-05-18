import React, { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import './header.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {

    const { logOut, user} = useContext(AuthContext);

    console.log(user);

  

    // user logout
    const handleLogout = () => {
        logOut()
            .then()
            .catch(er => console.log(er.message))
    }


    return (
        <div className="navbar py-10  md:px-6  header rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>HOME</span></NavLink></li>

                        <li>
                            <NavLink to="/alltoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>ALL TOYS</span></NavLink>

                        </li>

                        <li> <NavLink to="/mytoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>MY TOYS</span></NavLink>
                        </li>

                        <li> <NavLink to="/addtoy" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>ADD A TOY</span></NavLink>
                        </li>

                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>BLOG</span></NavLink>
                        </li>

                    </ul>
                </div>

                <img className='h-14' src="logo.png" alt="" />

                <NavLink to="/" ><h1 className='text-4xl  font-extrabold tracking-wider'>TOY<span className='' >LAND</span></h1></NavLink>

            </div>








            <div className="navbar-center opacity-90 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>HOME</span></NavLink></li>

                    <li>
                        <NavLink to="/alltoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>ALL TOYS</span></NavLink>

                    </li>

                    <li> <NavLink to="/mytoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>MY TOYS</span></NavLink>
                    </li>

                    <li> <NavLink to="/addtoy" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>ADD A TOY</span></NavLink>
                    </li>

                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold '>BLOG</span></NavLink>
                    </li>
                </ul>
            </div>




            <div className="navbar-end">

                {
                    user ? <> <img title={user?.displayName} className='user-img'
                        src="https://i.ibb.co/r0T1tyW/photo-1602233158242-3ba0ac4d2167-ixlib-rb-4-0.jpg" alt="" />

                        <button onClick={handleLogout} className='btn font-bold '>Logout</button>
                    </>
                        : <Link to='login' className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;
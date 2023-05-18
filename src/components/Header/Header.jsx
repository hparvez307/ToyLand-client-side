import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <div className="navbar py-10  px-6  header rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>Home</span></NavLink></li>

                        <li>
                            <NavLink to="/alltoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>All Toys</span></NavLink>

                        </li>

                        <li> <NavLink to="/mytoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>My Toys</span></NavLink>
                        </li>

                        <li> <NavLink to="/addatoy" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>Add A Toy</span></NavLink>
                        </li>

                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>Blog</span></NavLink>
                        </li>

                    </ul>
                </div>

                <img className='h-14' src="logo.png" alt="" />

                <NavLink to="/" ><h1 className='text-4xl  font-extrabold tracking-wider'>Toy<span className='' >Land</span></h1></NavLink>

            </div>








            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>Home</span></NavLink></li>

                    <li>
                        <NavLink to="/alltoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>All Toys</span></NavLink>

                    </li>

                    <li> <NavLink to="/mytoys" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>My Toys</span></NavLink>
                    </li>

                    <li> <NavLink to="/addatoy" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>Add A Toy</span></NavLink>
                    </li>

                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "border-gray-900 border" : ""} ><span className=' font-bold text-lg'>Blog</span></NavLink>
                    </li>




                </ul>
            </div>
            
            <div className="navbar-end">
                <Link to='login' className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle } from 'react-icons/fa';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
    }

    return (
        <div className='md:w-1/2 w-10/12 rounded bg mx-auto  my-10'>
              <h1 className='text-5xl text-center font-bold pb-20 pt-10'>Login</h1>

        <form onSubmit={handleLogin} className='p-5'>

            <div className="mb-6">
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="email" placeholder="Your email" name='email' required className="input px-3 input-bordered" />
                </label>
            </div>

            <div className="mb-6">
                <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input type="password" placeholder="Password" name='password' required className="input px-3 input-bordered" />
                </label>
            </div>


            <input className='btn btn-error my-6 w-6/12 mx-auto' type="submit" value="Login" />



        </form>


        <p className='  text-center  mt-5 '>Don't have an account?  <span className='text-blue-700'> <Link to='/register'>Register</Link></span></p>



        <div className='flex flex-col md:ml-8 mt-8 items-center'>
                
                <button  className="btn mb-8 w-[350px] font-bold  btn-outline btn-primary"><FaGoogle className='w-8 text-2xl'></FaGoogle> Login with google</button>
            </div>


    </div>
    );
};

export default Login;
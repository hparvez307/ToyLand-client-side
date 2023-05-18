import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const { loginUser, google } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');



    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                setError('');
                setSuccess('login successful');
                navigate(from, { replace: true });
                console.log(result.user)
            })
            .catch(er => {
                setError('The Password is Wrong')
                console.log(er.message)
                setSuccess('');
            })

    }



    const handleGoogle = () => {
        google()
            .then(res => {
                setError('');
                setSuccess('login successful');
                navigate(from, { replace: true });
                console.log(res.user);
            })
            .catch(er => {
                setSuccess('');
                setError(er.message)
            })
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

                <p className=' mt-3 text-green-500 text-center'>{success}</p>
                <p className='text-red-500 mt-3  text-center '>{error}</p>

                <div className='flex justify-center'>
                    <input className='btn btn-primary my-6 w-6/12 ' type="submit" value="Login" />
                </div>





            </form>


            <p className='  text-center  mt-5 '>Don't have an account?  <span className='text-blue-700'> <Link to='/register'>Register</Link></span></p>



            <div className='flex flex-col md:ml-8 mt-8 items-center'>

                <button onClick={handleGoogle} className="btn mb-8 w-[350px] font-bold  btn-outline btn-primary"><FaGoogle className='w-8 text-2xl'></FaGoogle> Login with google</button>
            </div>


        </div>
    );
};

export default Login;
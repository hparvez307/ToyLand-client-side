import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }




    return (
        <div className='md:w-1/2 w-10/12 rounded bg mx-auto  my-10'>
              <h1 className='text-5xl text-center font-bold pb-20 pt-10'>Register</h1>

            <form onSubmit={handleRegister} className='p-5'>

                <div className="my-6">
                    <label className="input-group input-group-vertical">
                        <span>Name</span>
                        <input type="text" placeholder="Your Name" name='name' required className="input px-3 input-bordered" />
                    </label>
                </div>


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



                <div className="mb-6">
                    <label className="input-group input-group-vertical">
                        <span>Phot Url</span>
                        <input type="file" name='photo' className="input pt-2 required  input-bordered" />
                    </label>
                </div>


                <input className='btn btn-error mt-6  w-6/12 mx-auto' type="submit" value="Register" />

            </form>


            <p className='pb-5  text-center  '>Have an account?  <span className='text-blue-700'> <Link to='/login'>Login</Link></span></p>



        </div>
    );
};

export default Register;
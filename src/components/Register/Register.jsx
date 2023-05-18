import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');



    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);




        // check and show error to user
        if (!/(?=.{6,})/.test(password)) {
            setError('The password is less than 6 characters')
            return;
        }


        // crate user with email and password
        createUser(email, password)
            .then(result => {
                setError('');
                setSuccess('Registration successful');
                updateUserProfile(name)
                    .then(() => {

                        console.log('user updated')
                    })
                    .catch((error) => {
                        console.log('error ocurred', error.message)
                    });
                const user = result.user;
                console.log(user)
            })
            .catch(er => {
                setError(error.message);
                setSuccess('');
                console.log(er.message)
            })
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
                        <input type="file" name='photo' required className="input pt-2   input-bordered" />
                    </label>
                </div>


                <p className=' mt-3 text-green-500 text-center'>{success}</p>
                <p className='text-red-500 mt-3  text-center '>{error}</p>

                <div className='flex justify-center'>
                    <input className='btn btn-error mt-6  w-6/12 mx-auto' type="submit" value="Register" />
                </div>

            </form>


            <p className='pb-5  text-center  '>Have an account?  <span className='text-blue-700'> <Link to='/login'>Login</Link></span></p>



        </div>
    );
};

export default Register;
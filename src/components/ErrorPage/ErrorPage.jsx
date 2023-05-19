import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
import useTitle from '../allHooks/useTitle';

const ErrorPage = () => {

    useTitle('Error Page');
    return (
        <div className='md:h-[100vh] md:text-center  -mt-10 h-[50vh]'>
            <Link to='/' className='mr-28'><button className='btn max-[571px]ml-5 mt-20 btn-primary md:-mb-12 px-12 md:mt-20  absolute z-10'>Back to Home</button></Link>
            <img src="https://i.ibb.co/J2gpJdf/Background-1.png" alt="" />
        </div>
    );
};

export default ErrorPage;
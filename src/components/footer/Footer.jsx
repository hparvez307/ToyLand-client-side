import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaCarSide, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' footer-container  bg  mt-20 '>

            <div className='flex pb-5 pt-16 px-8 flex-col lg:flex-row max-[600px]:text-center justify-between '>

                <div>

                    <div className='flex items-center'>
                        <Link><img className='h-14 max-[571px]:pl-20' src="https://i.ibb.co/CnHwkS5/logo-2.png" alt="" /></Link>

                        <Link to="/" ><h1 className='text-4xl  font-extrabold  tracking-wider'>TOY<span className='' >LAND</span></h1></Link>
                    </div>

                    <p className='my-4'>Find The best toy cars with reasonable  <br />price for kids from our website.</p>

                    <p>Find us on social media:</p>
                    <img className='mt-1 max-[571px]:pl-32' src="https://i.ibb.co/BG7QcdW/Group-9969.png" alt="" />

                </div>

                {/* policies */}
                <div className='max-[571px]:mb-10 max-[571px]:mt-10'>
                    <h1 className='text-2xl my-3  font-bold '>Policies</h1>
                    <div className='space-y-1'>
                    <p>ToyLand Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Refund policy</p>
                    <p>Payment policy</p>
                    
                </div>
                </div>
                {/* important links */}
                <div className='max-[571px]:mb-10'>
                    <h1 className='text-2xl my-3  font-bold '>Important Links</h1>
                   <div className='space-y-1'>
                   <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <p>Shipping Method</p>
                    <p>Order Tracking</p>

                   </div>
                </div>

                {/* contact info */}
                <div >
                    <h1 className='text-2xl my-3 font-bold '>Contact Us</h1>
                    <div className='flex max-[571px]:pl-14  gap-2'>
                        <div className='text-2xl mt-2'>
                            < FaMapMarkerAlt />
                        </div>
                        <p>H#05, RD#05, kaderabad housing, <br /> Mohammadpur, Dhaka-1207, Bangladesh </p>
                    </div>

                    <div className='flex max-[571px]:pl-14 my-4 gap-2'>
                        <div className='text-2xl '>
                            < FaRegEnvelope />
                        </div>
                        <p>hparvez307@gmail.com</p>
                    </div>

                    <div className='flex max-[571px]:pl-14 gap-2'>
                        <div className='text-2xl mt-1'>
                            < FaPhoneAlt />
                        </div>
                        <p>+8801838634389</p>
                    </div>
                </div>
            </div>

            {/* divider */}
            <div className="divider text-7xl text-gray-500"><FaCarSide /> </div>

            <div className='pb-9 text-center pt-4'>
                <p> <span className='text-bold'>&copy;</span> 2023 ToyLand. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
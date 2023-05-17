import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import Lottie from 'lottie-react'
import ani from '../../assets/lotti.json'

const Home = () => {
    return (
        <>

            {/* hero section */}
            <div className='hero flex pt-14 px-7 justify-between flex-col lg:flex-row rounded-xl pb-24'>

                <div className='w-full text-center '>
                    <h1 className='text-7xl max-[571px]:pt-8 text-bold tracking-wider mb-5  -mt-20'>Toys and Games</h1>
                    <p>
                    The concepts of games and toys have a very important role in childrens lives. It contributes to the development of cognitive, motor, psychosocial, emotional, and linguistic skills. It also plays a key role in raising self-confident, creative, and happy children. Therefore, attention should be paid to the concepts of games and toys, which are so important for the child to be a part of society as a healthy individual at every stage of his development. 
                    </p>
                </div>


                <div className='w-full max-[571px]:pt-8'>
                    <Lottie animationData={ani} loop={true} />

                </div>

            </div>

            {/* main section */}

            {/* <div className='chef-container'>

                <h1 className='text-5xl chef-title font-bold opacity-60'>Top 6 Master Chef of Bangladesh</h1>

                <div className='grid mt-16 lg:grid-cols-3 gap-14 justify-center items-center'>

                    {
                        chef.map(c => <Chef key={c.id} c={c}></Chef>)
                    }

                </div>
            </div> */}


            {/* popular item section */}

            {/* <div className='popular-section mt-20 flex flex-col-reverse lg:flex-row justify-between items-center p-10 gap-5'>

                <div className='w-full'>
                    <h1 className='lg:text-5xl text-2xl font-bold'>Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.</h1>
                </div>

                <div className='w-full'>
                    <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>

            </div> */}



            {/* featured food section */}

            {/* <div>

                <h1 className='text-5xl mt-20 chef-title font-bold opacity-60'>Featured Food</h1>

                <div className='featured-item mt-6 flex flex-col-reverse lg:flex-row justify-between items-center p-10 gap-5'>

                    <div className='w-full'>
                        <h1 className='text-2xl featured-title mb-4'>Traditional</h1>
                        <img src="https://plus.unsplash.com/premium_photo-1661777678748-f22506af1965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>

                    <div className='w-full'>
                        <h1 className='text-2xl featured-title mb-4'>Festival</h1>
                        <img src="https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-2xl featured-title mb-4'>Occasional</h1>
                        <img src="https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>

                </div>


            </div> */}
        </>
    );
};

export default Home;
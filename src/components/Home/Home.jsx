import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import Lottie from 'lottie-react'
import ani from '../../assets/lotti.json'
import ToyCard from '../ToyCard/ToyCard';

const Home = () => {

    const toyPhoto = [
        "https://i.ibb.co/0nQBygj/71-I8-DVMEao-L.jpg",
        "https://i.ibb.co/bWX1gds/71p-Dz-MQtj4-S-AC-SL1500.jpg",
        "https://i.ibb.co/x5BDTGt/1-32-die-cast-metal-cars-pullback-toy-mini-cooper-metal-car-for-original-imafqgrfm2j3fhka.webp",
        "https://i.ibb.co/zJJZfrF/1c56e2d1f14675a0ca5e94b6d4370143.jpg",
        "https://i.ibb.co/s6XrHn3/71z-Lklxq-ZSL-SX466-500x500.jpg",
        "https://i.ibb.co/RQCVvGr/1-32-Toy-Car-Mini-Police-Metal-Toy-Alloy-Super-Car-Diecasts-Toy-Vehicles-Car-Model.jpg",
        "https://i.ibb.co/vszWNS1/WH1101-PR-HS.png",
        "https://i.ibb.co/jMgPNvC/158079367-max.jpg",
        "https://i.ibb.co/9rQj8MY/blacks-tobbi-kid-cars-th17t0638-c3-600.jpg"
    ]

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

            <div className='px-7'>

                <h1 className='text-5xl  text-center mt-14 font-bold opacity-70'>Toy Gallery</h1>

                <div className='grid mt-16 w-11/12 mx-auto lg:grid-cols-3 gap-5 justify-between  items-center'>

                    {
                        toyPhoto.map((photo, index) => <ToyCard key={index + 1} photo={photo}></ToyCard>)
                    }

                </div>
            </div>


            {/* tab section */}

            <div className='my-10'>

            </div>


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
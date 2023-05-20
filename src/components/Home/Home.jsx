import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import Lottie from 'lottie-react'
import car from '../../assets/car.json'
import ToyCard from '../ToyCard/ToyCard';
import CategoryTab from '../CategoryTab/CategoryTab';
import HomeSlider from '../HomeSlider/HomeSlider';
import FavToys from '../FavToys/FavToys';
import useTitle from '../allHooks/useTitle';

const Home = () => {

    useTitle('Home');

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

            {/* banner section */}
            <div className='hero bg-primary flex  px-7 justify-between flex-col lg:flex-row  pb-24'>

                <div className='w-full space-y-5 mt-12 text-center '>
                    <h1 className='text-7xl  md:pt-20 pt-8 text-bold tracking-wider mb-5  '>Toys, Cars and Games</h1>
                    <h2 className='text-3xl text-bold text-gray-600 tracking-wide'><span className=''>Sports Car</span> <span className='mx-7'>Truck</span> <span>Police Car</span></h2>
                    <p className='text-gray-600'>
                        The concepts of games and toys have a very important role in childrens lives. It contributes to the development of cognitive, motor, psychosocial, emotional, and linguistic skills. It also plays a key role in raising self-confident, creative, and happy children. Therefore, attention should be paid to the concepts of games and toys, which are so important for the child to be a part of society as a healthy individual at every stage of his development.
                    </p>
                </div>

                <div className='w-full max-[571px]:pt-8'>
                    <Lottie animationData={car} loop={true} />
                </div>

            </div>


            {/* toy gallery section */}

            <div className='px-7 '>

                <h1 className='text-5xl text-center mt-14 font-bold opacity-70'>Toy Gallery</h1>

                <div className='grid mt-16  lg:grid-cols-3 gap-10 justify-center  items-center'>

                    {
                        toyPhoto.map((photo, index) => <ToyCard key={index + 1} photo={photo}></ToyCard>)
                    }

                </div>
            </div>


            {/* shop by category and tab section */}

            <div className='mt-24 mb-24  border-b-[1px] border-gray-400 pb-10'>
                <h1 className='text-5xl  text-center  pb-10 font-bold opacity-70'>Shop by Category</h1>
                <CategoryTab></CategoryTab>
            </div>


            {/* home slider section */}

            <div className='popular-section my-12 bg-primary  justify-between items-center pt-7 pb-20 '>

                <h1 className='text-5xl  text-center pb-10 font-bold opacity-70'>Toy Land Popular Toys</h1>

                <div>
                    <HomeSlider></HomeSlider>
                </div>

            </div>

            {/* favorite toy  section */}

            <div className='my-16 '>
                <FavToys></FavToys>
            </div>
        </>
    );
};

export default Home;
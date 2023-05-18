import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from '../SubCategoryCard/SubCategoryCard';
const CategoryTab = () => {


    const policeCar = [
        "https://i.ibb.co/x5BDTGt/1-32-die-cast-metal-cars-pullback-toy-mini-cooper-metal-car-for-original-imafqgrfm2j3fhka.webp",
        "https://i.ibb.co/RQCVvGr/1-32-Toy-Car-Mini-Police-Metal-Toy-Alloy-Super-Car-Diecasts-Toy-Vehicles-Car-Model.jpg",
        "https://i.ibb.co/s1Hb39B/Screenshot-190.png"
    ]

    const truck = [
        "https://i.ibb.co/0nQBygj/71-I8-DVMEao-L.jpg",
        "https://i.ibb.co/N3tSg79/maxresdefault-1.jpg",
        "https://i.ibb.co/vszWNS1/WH1101-PR-HS.png"
    ]
    const car = [
        "https://i.ibb.co/bWX1gds/71p-Dz-MQtj4-S-AC-SL1500.jpg",
"https://i.ibb.co/s6XrHn3/71z-Lklxq-ZSL-SX466-500x500.jpg",
"https://i.ibb.co/jMgPNvC/158079367-max.jpg"
    ]

    return (

        <div >







            <div>

                <Tabs >
                    <TabList  >
                        <div className='flex justify-center gap-24'>

                            <Tab > <h1 className='text-2xl opacity-70   text-center font-bold '>Police Car</h1></Tab>
                            <Tab > <h1 className='text-2xl opacity-70   text-center font-bold '>Truck</h1></Tab>
                            <Tab > <h1 className='text-2xl opacity-70   text-center font-bold '>Car</h1></Tab>


                        </div>
                    </TabList>



                    {/* tab panel */}

                    <TabPanel>


                        <div className='flex flex-col lg:flex-row gap-7 justify-center p-7'>

                            {/* <div className="card shadow-2xl card-compact mx-auto  w-96 bg-base-100 shadow-xl">
        <figure><img className='h-80 w-full' src="https://i.ibb.co/s1Hb39B/Screenshot-190.png" alt="Shoes" /></figure>
    </div> */}


                            {
                                policeCar.map((photo, index) => <SubCategoryCard key={index + 1} photo={photo}></SubCategoryCard>)
                            }

                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='flex flex-col lg:flex-row gap-7 justify-center p-7'>

                            {/* <div className="card shadow-2xl card-compact mx-auto  w-96 bg-base-100 shadow-xl">
<figure><img className='h-80 w-full' src="https://i.ibb.co/s1Hb39B/Screenshot-190.png" alt="Shoes" /></figure>
</div> */}


                            {
                                truck.map((photo, index) => <SubCategoryCard key={index + 1} photo={photo}></SubCategoryCard>)
                            }

                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='flex flex-col lg:flex-row gap-7 justify-center p-7'>

                            {/* <div className="card shadow-2xl card-compact mx-auto  w-96 bg-base-100 shadow-xl">
<figure><img className='h-80 w-full' src="https://i.ibb.co/s1Hb39B/Screenshot-190.png" alt="Shoes" /></figure>
</div> */}


                            {
                                car.map((photo, index) => <SubCategoryCard key={index + 1} photo={photo}></SubCategoryCard>)
                            }

                        </div>
                    </TabPanel>
                </Tabs>


            </div>
        </div>

    )
};

export default CategoryTab;
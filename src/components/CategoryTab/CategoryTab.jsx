import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from '../SubCategoryCard/SubCategoryCard';
const CategoryTab = () => {


    const [policeCar, setPoliceCar] = useState([]);
    const [truck, setTruck] = useState([]);
    const [sportsCar, setSportsCar] = useState([]);





    useEffect(()=>{
        fetch('https://toy-land-server.vercel.app/toysByCategory?sub_category=police%20car')
        .then(res => res.json())
        .then( data => {
            console.log(data);
            setPoliceCar(data);
        })
    },[])

    useEffect(()=>{
        fetch('https://toy-land-server.vercel.app/toysByCategory?sub_category=truck')
        .then(res => res.json())
        .then( data => {
            console.log(data);
            setTruck(data);
        })
    },[])

    useEffect(()=>{
        fetch('https://toy-land-server.vercel.app/toysByCategory?sub_category=sports%20car')
        .then(res => res.json())
        .then( data => {
            console.log(data);
            setSportsCar(data);
        })
    },[])
    

    
    return (

        <div >

            <div>

                <Tabs >
                    <TabList  >
                        <div className='flex justify-center gap-24'>

                            <Tab > <h1 className='text-2xl opacity-70   text-center font-bold '>Police Car</h1></Tab>
                            <Tab > <h1 className='text-2xl opacity-70   text-center font-bold '>Truck</h1></Tab>
                            <Tab > <h1 className='text-2xl opacity-70   text-center font-bold '>Sports Car</h1></Tab>


                        </div>
                    </TabList>



                    {/* tab panel */}

                    <TabPanel>


                        <div className='flex flex-col lg:flex-row gap-7 justify-center p-7'>

                            {/* <div className="card shadow-2xl card-compact mx-auto  w-96 bg-base-100 shadow-xl">
        <figure><img className='h-80 w-full' src="https://i.ibb.co/s1Hb39B/Screenshot-190.png" alt="Shoes" /></figure>
    </div> */}


                            {
                                policeCar.slice(0,3).map((toy, index) => <SubCategoryCard key={index + 1} toy={toy}></SubCategoryCard>)
                            }

                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='flex flex-col lg:flex-row gap-7 justify-center p-7'>

                            {/* <div className="card shadow-2xl card-compact mx-auto  w-96 bg-base-100 shadow-xl">
<figure><img className='h-80 w-full' src="https://i.ibb.co/s1Hb39B/Screenshot-190.png" alt="Shoes" /></figure>
</div> */}


                            {
                                truck.slice(0,3).map((toy, index) => <SubCategoryCard key={index + 1} toy={toy}></SubCategoryCard>)
                            }

                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='flex flex-col lg:flex-row gap-7 justify-center p-7'>

                            {/* <div className="card shadow-2xl card-compact mx-auto  w-96 bg-base-100 shadow-xl">
<figure><img className='h-80 w-full' src="https://i.ibb.co/s1Hb39B/Screenshot-190.png" alt="Shoes" /></figure>
</div> */}


                            {
                                sportsCar.slice(0,3).map((toy, index) => <SubCategoryCard key={index + 1} toy={toy}></SubCategoryCard>)
                            }

                        </div>
                    </TabPanel>
                </Tabs>


            </div>
        </div>

    )
};

export default CategoryTab;
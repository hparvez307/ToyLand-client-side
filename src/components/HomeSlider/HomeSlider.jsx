import React from 'react';
import './HomeSlider.css'

const HomeSlider = () => {
    return (
        <div className="carousel h-[80vh] w-full">
  <div id="slide1" className="carousel-item slider-item1 relative w-full">
    {/* <img src="https://i.ibb.co/sPLvqrj/photo-1537655780520-1e392ead81f2-ixlib-rb-4-0.jpg" className=" w-full" /> */}
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item slider-item2 relative w-full">
    {/* <img src="https://i.ibb.co/txfWX3r/photo-1502086223501-7ea6ecd79368-ixlib-rb-4-0.jpg" className="w-full" /> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item slider-item3 relative w-full">
    {/* <img src="https://i.ibb.co/xqTrg71/photo-1571210862729-78a52d3779a2-ixlib-rb-4-0.jpg" className="w-full" /> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
    
  
</div>
    );
};

export default HomeSlider;
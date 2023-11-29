// HomePage.js
import React, { useState, useEffect } from 'react';

// Import your carousel images
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';

const images = [image1, image2, image3, image4, image5];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the time (in milliseconds) to control image change interval

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-screen relative overflow-hidden">
        <div className="flex w-full h-full">
              <div className="absolute inset-0 opacity-80"><div className=" relative overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt="Carousel "
        className="object-cover h-full"
      />
    </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" text-4xl text-center sm:text-white  text-[#31525b] text-shadow-md">
                  <b className='text-5xl drop-shadow-[0_35px_35px_rgba(0,0,1,5)] ' >Welcome to Our Hostel</b>
                  <h1 className='text-2xl drop-shadow-2xl :text-[#31525b]'>"Where Learning Meets Comfort"</h1>
                  
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;






"use client"
import React from 'react';

function Home() {
  return (
    <div className='overflow-hidden'>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute duration-700 before:dark:bg-black/30 before:h-full before:w-full before:top-0 before:left-0 before:z-10 ">
        <img src="/home-imgs/background-image.jpg" className="absolute top-0 left-0 min-h-full object-cover " alt="" />
        <div className="relative z-20 max-w-screen-lg mx-auto lg:grid md:grid-cols-6 h-full items-center  flex-col lg:flex-row md:mt-0 mt-28">
          <div className="col-span-3 mb-4 p-6 md:p-0 lg:mb-0">
            <span className="uppercase text-purple-900 text-xs font-bold mb-2 block text-center md:text-left ">WE ARE VISIONARIES</span>
            <h1 className="text-black font-extrabold text-5xl mb-8 text-center md:text-left">Vision360° makes digital dreams a reality.</h1>
            <p className="text-gray-700 text-base text-center md:text-left ">
              Vision360° is your go-to team for turning digital visions into remarkable realities.
              Our expertise spans web design, development, and social media management,
              ensuring that your online presence is nothing short of exceptional.
            </p>
            <a href="/contact">
              <button className="ml-28 md:ml-0 mt-8 rounded-3xl text-black uppercase py-3 font-semibold text-base px-10 border border-black hover:bg-black/60 hover:text-white duration-500" > CONTACT </button>
            </a>
          </div>
          <div className='md:col-span-3 md:col-start-1 lg:col-start-4 '>
            <img src="/home-imgs/home-img.png" alt="" className="w-72 h-72 ml-16 md:ml-0 md:w-full md:h-auto " />
          </div>
        </div>
      </div>
      <div className="bg-white/80 duration-700 dark:bg-black/60 py-10 px-4">
        <div className="max-w-screen-lg mx-auto md:flex md:justify-between md:items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-black duration-700 dark:text-white text-3xl mb-4 text-center md:text-left">Vision360° - Tailored Price Flexibility for Beginners</h2>
            <p className="text-base text-gray-700 duration-700 dark:text-gray-300 text-center md:text-left ">Vision360° is your trusted digital partner, 
            offering quality services and innovative solutions.
            Our flexible rates for beginners ensure confidence in overcoming obstacles.
            Let us lead you to success with passion and expertise</p>
          </div>
         <a href="/services"><button className=" text-black dark:text-white ml-28 md:ml-0 rounded-3xl uppercase py-3 text-base px-10 border border-black dark:border-white font-semibold hover:bg-black/60 hover:dark:bg-white/60 hover:dark:text-white hover:text-white duration-500 my-8 md:my-0">SERVICES</button>
        </a> 
        </div>
      </div>
    </div>
  );
}

export default Home;

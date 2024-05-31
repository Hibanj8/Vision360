"use client"
import React from 'react';


function Home() {
  return (
    <section className="body-font bg-gradient-to-r md:mt-0" style={{ backgroundImage: 'url(/home-imgs/background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=" bg-white/10 dark:bg-black/30 containermx-auto flex lg:px-24 md:py-10 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-8 lg:mt-0 lg:w-1/2 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center  pt-16">
          <h1 className="mb-4 lg:mb-8 uppercase font-semibold text-lg text-primary block text-purple-900">
            WE ARE VISIONARIES</h1>
          <span className=' text-black dark:text-white font-extrabold lg:text-5xl text-5xl md:text-2xl'>
            WE ARE VISIONARIES
            Vision360° makes digital dreams a reality.</span>

          <p className="my-8 lg:pl-0 pl-2 pr-2 lg:mr-44 leading-relaxed text-gray-700 dark:text-gray-200 lg:text-base text-base md:text-2xl">
            Vision360° is your go-to team for turning digital visions into remarkable realities.
            Our expertise spans web design, development, and social media management,
            ensuring that your online presence is nothing short of exceptional.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="text-black dark:text-white inline-flex rounded-3xl font-semibold text-base uppercase py-3 px-10 focus:outline-noneborder-black border border-black dark:border-white hover:bg-black/30 hover:dark:bg-white/60 hover:text-white hover:dark:text-black duration-500 ">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:mt-16 mb-5 lg:w-1/2 lg:mb-24">
          <img className="object-cover object-center rounded" alt="" src="/home-imgs/home-img.png" />
        </div>
      </div>
      <div className="bg-white/80 dark:bg-black/70 py-10 px-4">
        <div className="max-w-screen-lg mx-auto md:flex md:justify-between md:items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-black dark:text-white text-3xl mb-4 text-center md:text-left">Vision360° - Tailored Price Flexibility for Beginners</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 text-center md:text-left ">Vision360° is your trusted digital partner,
              offering quality services and innovative solutions.
              Our flexible rates for beginners ensure confidence in overcoming obstacles.
              Let us lead you to success with passion and expertise</p>
          </div>

          <div className="flex justify-center">
            <a href="/services"><button className="text-black dark:text-white md:ml-0 rounded-3xl uppercase py-3 text-base px-10 border border-black dark:border-white font-semibold hover:bg-black/30 hover:dark:bg-white/60 hover:text-white hover:dark:text-black duration-500 my-8 md:my-0">SERVICES</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
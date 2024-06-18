"use client"
import React from 'react';

function Services() {
  return (
    <div>
        <div className="py-16 mt-10 mb-4 overflow-hidden">  
        <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[400px] md:max-w-[510px]">
               <span data-aos="fade-up" className="uppercase font-semibold text-lg text-primary mb-2 block text-purple-900">
               Our Services
               </span>
               <h2 data-aos="fade-up"
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  duration-700 dark:text-black
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
               <p data-aos="fade-up" className="text-white duration-700 dark:text-black text-body-color">
               Our services encompass a spectrum of creativity and innovation, ensuring your brand stands out amidst a sea of competition.
               </p>
            </div>
         </div>
      </div>
            <div className="container m-auto px-6 text-gray-600 duration-700 dark:text-gray-300 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    <div data-aos="zoom-in" className="bg-white/60 duration-700 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#CB6CE6]">Web Developpement and Graphic Design</h3>
                            <p className="mb-6">Our professional design services encompass creating visually stunning websites that not only represent your brand online but also resonate with your target audience, reflecting your brand's identity and values in every pixel.</p>
                            
                        </div>
                        <img src="/imgs-services/1.png" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div data-aos="zoom-in" className="bg-white/60 duration-700 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#CB6CE6]">Online Presence Management</h3>
                            <p className="mb-6">Let us handle your online presence with comprehensive solutions tailored to maximize visibility, engage with your audience effectively across various digital platforms, and ultimately drive growth and success for your business.</p>
                            
                        </div>
                        <img src="/imgs-services/2.png" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div data-aos="zoom-in" className="bg-white/60 duration-700 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#CB6CE6]">Photography and Video Services</h3>
                            <p className="mb-6">From capturing captivating visuals to producing compelling videos, our photography and video services ensure that your brand's story is told in a visually engaging and memorable way, leaving a lasting impression on your audience.</p>
                            
                        </div>
                        <img src="/imgs-services/3.png" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div data-aos="zoom-in" className="bg-white/60 duration-700 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#CB6CE6]">Packaging and Product Design</h3>
                            <p className="mb-6">Elevate your brand with custom-designed packaging and product visuals that not only stand out on the shelves but also communicate your brand's quality, uniqueness, and value, enhancing the overall customer experience.</p>
                            
                        </div>
                        <img src="/imgs-services/4.png" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div data-aos="zoom-in" className="bg-white/60 duration-700 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#CB6CE6]">Translation and Localization Services</h3>
                            <p className="mb-6">Break language barriers and reach a global audience seamlessly with our precise and culturally sensitive translation and localization services, ensuring that your brand's message is effectively communicated across diverse markets.</p>
                            
                        </div>
                        <img src="/imgs-services/5.png" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                    <div data-aos="zoom-in" className="bg-white/60 duration-700 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                        <div className="mb-12 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#CB6CE6]">Marketing and Promotion Services</h3>
                            <p className="mb-6">Our strategic marketing campaigns and promotional activities are designed to boost your brand's visibility, increase customer engagement, and attract new customers, helping you achieve your business objectives and stay ahead in the competitive landscape.</p>
                            
                        </div>
                        <img src="/imgs-services/6.png" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;

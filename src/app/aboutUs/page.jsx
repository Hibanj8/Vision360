import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row">

      <div className="w-full mt-6 md:mt-0 p-3 order-first md:order-2 md:max-w-[650px] md:w-1/2 md:pt-12 md:pb-12 md:ml-11">
        <div className="relative h-2/3 max-w-full max-h-full md:max-w-[450px] md:max-h-[400px] mt-14 flex items-center justify-center ">
          <img src="/home-imgs/img_aboutUs.png" alt="img_aboutUs" className=" mt-0 md:ml-44 w-3/4 sm:w-1/2 md:w-4/5" />
        </div>
        <div className="w-full h-1/3 max-h-[100px] overflow-hidden backdrop-blur-lg bg-black/60 rounded-full shadow-2xl flex items-center space-x-4 p-2">
          <div className=" md:ml-9 md:w-20 md:h-16 flex-shrink-0 flex flex-col items-center justify-center">
            <img src="/home-imgs/idea.png" alt="Service 1" className="h-16 w-16" />
            <p className=" font-semibold text-xs text-center hidden md:block text-white">Innovative Ideas</p>
          </div>
          <div className="w-px h-2/3 bg-blue-500"></div>

          <div className="md:w-20 md:h-16 flex-shrink-0 flex flex-col items-center justify-center">
            <img src="/home-imgs/site web professionnel.png" alt="Service 2" className="h-16 w-16" />
            <p className=" font-semibold text-xs text-center hidden md:block text-white">Responsive Web Site</p>
          </div>
          <div className="w-px h-2/3 bg-blue-500"></div>

          <div className="md:w-20 md:h-16 flex-shrink-0 flex flex-col items-center justify-center">
            <img src="/home-imgs/Marketing digital.png" alt="Service 3" className="h-16 w-16" />
            <p className=" font-semibold text-xs text-center hidden md:block text-white">Social Media Enhancement</p>
          </div>
          <div className="w-px h-2/3 bg-blue-500"></div>

          <div className="hidden md:flex md:w-20 md:h-16 flex-shrink-0 flex-col items-center justify-center">
            <img src="/home-imgs/disponibilité de 24h.png" alt="Service 4" className="h-16 w-16" />
            <p className=" font-semibold text-xs text-center hidden md:block text-white">24/7 Availability</p>
          </div>
         <a href="/services"><button className=' relative  py-2 px-8 text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-xl hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#C287BB] before:to-[#e7b3e0b7] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0' >
            <div className="h-16 w-20 md:w-20 md:h-16 flex-shrink-0 flex flex-col items-center justify-center">
              <img src="/home-imgs/voir plus.png" alt="Service 3" className="object-cover h-16 w-16 mr-10 md:mr-0" />
            </div>
          </button></a> 

        </div>



      </div>
      <div className="w-full md:w-1/2  md:mt-0 md:order-1 ">
        <div className="flex flex-col m-4 md:ml-8  justify-start items-center md:justify-center min-h-screen">
          <div className="w-full backdrop-blur-lg bg-black/60 rounded-3xl shadow-2xl p-4">
            <div className="flex p-2 gap-1">
              <div className="circle">
                <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle">
                <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="flex items-center">
            <h3 className='text-3xl font-bold text-white'>About US</h3> 
            </div>
            <br />
            <div className="text-gray-300 ">
              <p>At <span className="text-[#CB6CE6] font-bold">Vision360°</span>, we transform innovation into excellence, ensuring your brand shines both online and offline. Our dynamic team excels in everything from crafting <span className="text-pink-500 font-bold">eye-catching logos</span> and <span className="text-green-600 font-bold">professional business cards</span>, to developing custom websites and managing social media.</p> <br />
              <p>We offer a wide range of services, including <span className="text-blue-500 font-bold">advertising production</span> and <span className="text-blue-500 font-bold">product design</span>, to propel your brand towards success. Partner with us for integrated solutions that truly embody your brand and captivate your audience across all platforms.</p>
              <p>Discover how <span className="text-[#CB6CE6] font-bold">Vision360°</span> can elevate your presence in the digital landscape.</p>
              <br /> <br />
            </div>
            <a href="/contact">
            <button
              className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-2xl hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#C287BB] before:to-[#e7b3e0b7] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
             Contact 
            </button></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
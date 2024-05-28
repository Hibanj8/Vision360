"use client"
import React from 'react'

function Team() {
  return (
   
    <div className="  max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24"> 
   <div class="-mx-4 flex flex-wrap">
         <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[400px] md:max-w-[510px] text-center">
               <span class="text-primary mb-2 block text-lg font-semibold uppercase text-purple-900">
               Our Team
               </span>
               <h2
                  class="text-white dark:text-black mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                  >
                  Our Awesome Team
               </h2>
               <p class="text-body-color text-base text-white dark:text-black ">
               Our talented team of professionals ensures that every aspect of your project 
               receives the attention it deserves,
                delivering excellence in every detail.
               </p>
            </div>
         </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 md:ml-0">

        {/* Carte 1 */}
        <div className='mb-4'>
          <div className="shadow-strong shadow-xl bg-white/80 dark:bg-black/60 group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-[#F4EAE0] to-white before:absolute before:top-0 w-80 h-72 relative flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-black dark:bg-white mt-8 rounded-full border-4 border-black/60 dark:border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <img src="/photo-profile/hiba's profile.png" alt="" className='rounded-full' />
            </div>
            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold text-black dark:text-white group-hover:text-black duration-500">Hiba NAJI</span>
              <p className='text-black dark:text-white group-hover:text-black duration-500'>Designer & Front-end Developer</p>
            </div>
            <a className="bg-black/60 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 " href="/team/HibaNAJI">Details</a>
          </div>
        </div>

        {/* Carte 2 */}
        <div className='mb-4'>
          <div className="shadow-strong shadow-xl bg-white/80 dark:bg-black/60 group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-[#C2C3DF] to-white before:absolute before:top-0 w-80 h-72 relative flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-black dark:bg-white mt-8 rounded-full border-4 border-black/60 dark:border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <img src="/photo-profile/salma's profile.png" alt="" className='rounded-full' />
            </div>
            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold text-black dark:text-white group-hover:text-black duration-500">Salma EL HANI</span>
              <p className='text-black dark:text-white group-hover:text-black duration-500'>Full Stack Developer</p>
            </div>
            <a className="bg-black/60 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 " href="/team/SalmaELHANI">Details</a>
          </div>
        </div>

        {/* Carte 3 */}
        <div className='mb-4'>
          <div className="shadow-strong shadow-xl bg-white/80 dark:bg-black/60 group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-[#C9CBD7] to-white before:absolute before:top-0 w-80 h-72 relative flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-black dark:bg-white mt-8 rounded-full border-4 border-black/60 dark:border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <img src="/photo-profile/ismail's profile.png" alt="" className='rounded-full' />
            </div>
            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold text-black dark:text-white group-hover:text-black duration-500">Ismail EL HANI</span>
              <p className='text-black dark:text-white  group-hover:text-black duration-500'>Social Media Manager</p>
            </div>
            <a className="bg-black/60 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 " href="/team/IsmailELHANI">Details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
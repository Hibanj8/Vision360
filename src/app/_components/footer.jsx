
"use client"
import React from 'react';


function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="relative bg-white/80  duration-700 dark:bg-black/60 pt-6 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4"><img src="/logo.png" alt="logo" className='hidden duration-700 dark:block h-14 w-56' /><img src="/LOGO- Vision360° background-White.png" alt="logo with bg-white" className='dark:hidden duration-700 block h-14 w-56' /> <br />
            <h4 className="text-3xl font-semibold text-black duration-700 dark:text-white ">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-600 duration-700 dark:text-gray-300">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex  space-x-2">
              <button className="bg-white text-lightBlue-400 shadow-xl font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none" type="button">
                <img className="h-5 w-5" src="/icons_footer/facebook.png" alt="logo Facebook" />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-xl font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none" type="button">
                <img className="h-5 w-5" src="/icons_footer/instagram.png" alt="logo Instagram" />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-xl font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none" type="button">
                <img className="h-5 w-5" src="/icons_footer/tik-tok.png" alt="logo TikTok" />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-xl font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none" type="button">
                <img className="h-5 w-5" src="/icons_footer/whatsapp.png" alt="logo WhatsApp" />
              </button>
            </div>

          </div>
          <div className="w-full lg:w-6/12 px-4 lg:mt-20">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto mb-6">
                <span className="block uppercase text-[#ACBEE2] text-sm font-semibold mb-4">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                  </li>
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                  </li>
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                  </li>
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-[#ACBEE2] text-sm font-semibold mb-4">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-gray-700 duration-700 dark:text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#ACBEE2]" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-700 duration-700 dark:text-gray-400 font-semibold py-1">
              Copyright © {currentYear}
              <a href="#" className=" text-pink-500 duration-700 dark:text-[#c287bb] hover:text-[#c287bbcf]" target="_blank"> by Vision360° </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

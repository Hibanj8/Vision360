"use client"

import React from 'react';

function Contact() {
  return (
    <div className=' mt-28 overflow-hidden'>
      <div className="container">
        <div className="-mx-4 flex flex-wrap lg:justify-between mb-10 p-5 md-p-0 md:ml-32">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className=" uppercase mb-4 ml-2 block text-base font-semibold text-purple-900 text-center md:text-left ">
                Contact Us
              </span>
              <h2 className="mb-6 text-[32px] font-bold text-white dark:text-black sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Get In Touch With Us
              </h2>
              <p className="mb-9 text-white dark:text-black leading-relaxed text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" text-purple-900 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-purple-900  ">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color text-white dark:text-black">
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="text-purple-900 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_941_17577)">
                      <path
                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_941_17577">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-purple-900">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color text-white dark:text-black">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" text-purple-900 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-purple-900">
                    Email Address
                  </h4>
                  <p className="text-white dark:text-black">
                    vision360.proo@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="max-w-md mx-auto p-8 bg-white/60 dark:bg-black/60 rounded-3xl shadow-2xl form-container">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Say Something!</h2>
              <form action="https://fabform.io/f/insert-form-id" method="POST">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 text-sm font-bold mb-2">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Ahmed Ras" required
                    className="w-full px-3 border-black text-gray-800 dark:text-gray-300  py-2 border rounded-md focus:outline-none focus:border-black focus:dark:border-[#ACBEE2] bg-gray-300 dark:bg-gray-700" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 text-sm font-bold mb-2">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="ahmed@example.com" required
                    className="w-full px-3 border-black text-gray-800 dark:text-gray-300  py-2 border rounded-md focus:outline-none focus:border-black focus:dark:border-[#ACBEE2] bg-gray-300 dark:bg-gray-700" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 text-sm font-bold mb-2">Your Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required
                    className="w-full px-3 border-black text-gray-800 dark:text-gray-300  py-2 border rounded-md focus:outline-none focus:border-black focus:dark:border-[#ACBEE2] bg-gray-300 dark:bg-gray-700"></textarea>
                </div>
                <button type="submit"
                  className="relative py-2 px-8 text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-xl hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#C287BB] before:to-[#e7b3e0b7] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  Send Message
                </button>
                <p className="mt-5 text-black dark:text-white ">If you are not a fan of forms you can email us instead <a
                    className="font-medium text-purple-900 dark:text-[#ACBEE2] hover:underline"
                    href="mailto:vision360.proo@gmail.com">vision360.proo@gmail.com</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

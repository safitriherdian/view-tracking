import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Register() {
  return (

    <section class="h-screen bg-pink-1 lg:px-16 lg:py-20 md:p-5">
      <div class="h-full text-gray-800 bg-white rounded-lg">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 xl:p-6 lg:p-12">

          <div class="grow-0 shrink-1 md:shrink-0 basis-auto lg:w-6/12 md:w-6/12 md:mb-0 center">
            <img src="/images/img-register.png" class="lg:w-3/4 img-register" alt="" />
          </div>

          <div class="card-register xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mt-5">

            <div class="text-center xl:mb-10 lg:mb-8 auth">
              <h2 class="lg:text-2xl xl:text-4xl xl:leading-snug font-extrabold">REGISTER</h2>
              <p>Enter your information to register</p>
            </div>

            <form className='flex flex-col lg:gap-y-5 sm:gap-y-3'>

              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <input type="text" id="name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Full Name" />
              </div>

              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <input type="text" id="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Email Address" />
              </div>

              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>

                </div>
                <input type="text" id="noHP" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="No Handphone" />
              </div>

              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <input type="password" id="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Password" />
              </div>

              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <input type="password" id="confirmPassword" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Confirm Password" />
              </div>

              <Link to='/login'>
                <button
                  type="button"
                  class="mt-4 text-center w-full inline-block px-7 py-3 bg-pink-1 text-white font-bold leading-snug rounded shadow-md hover:bg-pink-2 hover:shadow-lg"
                >
                  REGISTER
                </button>
              </Link>

              <p class="font-medium self-center"> Have an account?
                <Link to='/login'>
                  <a class="text-pink-1 hover:text-pink-2 hover:font-extrabold"> LOGIN </a>
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Register
import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Login() {
  return (

    <body class="bg-pink-1">
      <div class="flex min-h-screen">

        <div class="flex flex-row w-full">

          <div class='hidden lg:flex flex-col justify-between bg-white lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
            <div class="flex items-center justify-start space-x-3">
              <img className="h-10" src="/images/logo-kosme.png" alt="" />
              <img className="h-10" src="/images/logo-pink.png" alt="" />
            </div>
            <div class='space-y-5 text-black'>
              <h1 class="lg:text-2xl xl:text-4xl xl:leading-snug font-extrabold">Enter your account and tracking your packages</h1>
              <p class="text-lg">You do not have an account?</p>

              <Link to='/register'>
                <button
                  class="mt-4 inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-pink-2 text-black hover:bg-pink-1 hover:text-white">Create
                  account here
                </button>
              </Link>

            </div>
            <p class="font-medium text-black">© 2022 KOSME. All Rights Reserved, <br />PT Kosmetika Global Indonesia</p>
          </div>


          <div class="flex flex-1 flex-col items-center justify-center px-10 relative">

            <div class="flex lg:hidden w-full justify-end py-8">
              <img class="h-10" src="/images/kosme-white.png" alt="" />
            </div>

            <div class="flex flex-1 flex-col justify-center space-y-5 max-w-md">

              <img class="lg:hidden" src="/images/logo-white.png" alt="" />

              <div class="flex flex-col space-y-2 text-center">
                <h2 class="text-3xl md:text-4xl font-bold">Sign in to your account!</h2>
                <p class="text-md md:text-xl">Please input your email and password</p>
              </div>
              <div class="flex flex-col max-w-md gap-3">

                <div class="flex">
                  <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <input type="text" id="name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Email Address" />
                </div>

                <div class="flex">
                  <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <input type="password" id="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Password" />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <a href="#!" class="text-black hover:underline">Forgot password?</a>
                </div>

                <Link to='/'>
                  <button class="flex w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white hover:bg-gray-900">LOGIN</button>
                </Link>

                <br />

                <div class="lg:hidden flex items-center space-x-2">
                  <span>Not a member? </span>

                  <Link to='/register'>
                    <a class="underline font-medium text-white">
                      Sign up now
                    </a>
                  </Link>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </body >
  )
}

export default Login

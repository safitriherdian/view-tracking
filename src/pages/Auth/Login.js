import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Login() {
  return (

    <body class="bg-[#F26E70]">
      <div class="flex min-h-screen">

        <div class="flex flex-row w-full">

          <div class='hidden lg:flex flex-col justify-between bg-white lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
            <div class="flex items-center justify-start space-x-3">
              <img className="h-10" src="/images/logo-kosme.png" alt="" />
              <img className="h-10" src="/images/icon.png" alt="" />
              <a class="font-extrabold text-2xl text-black">K|TRACK</a>
            </div>
            <div class='space-y-5 text-black'>
              <h1 class="lg:text-2xl xl:text-4xl xl:leading-snug font-extrabold">Enter your account and tracking your packages</h1>
              <p class="text-lg">You do not have an account?</p>

              <Link to='/register'>
                <button
                  class="mt-4 inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-[#F26E70] text-black">Create
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
              <div class="flex flex-col max-w-md space-y-5">
                <input type="text" placeholder="Email"
                  class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                <input type="password" placeholder="Password"
                  class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />

                <Link to='/'>
                  <button class="flex w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">LOGIN</button>
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

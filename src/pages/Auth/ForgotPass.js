import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPass() {
    return (

        <section class="bg-white">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="flex items-center justify-center gap-3 mb-6">
                    <img className="h-10" src="/images/logo-kosme.png" alt="" />
                    <img className="h-10" src="/images/logo-pink.png" alt="" />
                </div>

                <div class="bg-pink-4 w-full p-6 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">

                    <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                        Forgot Your Password?
                    </h2>
                    <p className='text-black text-sm'>Please enter your email address and new password</p>

                    <form class="space-y-4 lg:mt-6 md:space-y-5" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-black">Email Address</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <input type="text" id="name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="example@company.com" />
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-black">New Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <input type="text" id="name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="**********" />
                            </div>
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-black">Confirm password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <input type="text" id="name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="**********" />
                            </div>
                        </div>

                        <Link to='/login'>
                            <button class="mt-6 flex w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-pink-1 text-white hover:bg-pink-2">RESET PASSWORD</button>
                        </Link>

                    </form>
                    <hr class="my-6 border-t border-black" />

                    <Link to='/register'>
                        <div class="text-center">
                            <a class="inline-block text-sm text-black align-baseline hover:underline hover:font-semibold"> Create an Account! </a>
                        </div>
                    </Link>

                    <Link to='/login'>
                        <div class="text-center">
                            <a class="inline-block text-sm text-black align-baseline hover:underline hover:font-semibold"> Already have an account? Login! </a>
                        </div>
                    </Link>

                </div>
            </div>
        </section>

    )
}

export default ForgotPass
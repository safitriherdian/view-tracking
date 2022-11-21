import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (

        <section class="h-screen bg-pink-1 lg:px-16 lg:py-20 md:p-5">
            <div class="grid content-center h-full text-gray-800 bg-white rounded-lg space-y-5">

                <div className='flex justify-center'>
                    <img src="/images/delivery-2.png" class="w-2/5 item-center" alt="" />
                </div>

                <div class="text-center">
                    <h1 class="lg:text-2xl xl:text-4xl xl:leading-snug font-extrabold">No Result Found</h1>
                    <p>Sorry, the page you are looking for doesn't exist or has been moved</p>
                    <p>We suggest you back to home</p>
                </div>

                <div className='place-self-center'>
                    <Link to='/'>
                        <button
                            className="px-5 justify-center flex bg-pink-1 hover:bg-pink-2 text-white font-bold py-3 w-auto rounded-lg tracking-wider shadow-sm ease-linear transition-all duration-150"
                            type="button">
                            Back to Home
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </Link>
                </div>


            </div>
        </section>

    )
}

export default NotFound
import React from 'react';

function NotFound() {
    return (

        <section class="h-screen bg-pink-1 lg:px-16 lg:py-20 md:p-5">
            <div class="grid h-full text-gray-800 bg-white rounded-lg space-y-5 p-20">
                <body-img className="">
                    <h1 class="lg:text-2xl xl:text-4xl xl:leading-snug font-extrabold">The site is currently down<br />for maintenance</h1>
                    <p className='pt-5'>We apologize for any inconveniences caused</p>
                    <p>We're doing our best and we'll back soon</p>
                </body-img>
            </div>
        </section >

    )
}

export default NotFound
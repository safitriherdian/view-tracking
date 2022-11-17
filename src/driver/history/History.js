import React from 'react';
import { Link } from 'react-router-dom';

function History() {

    return (
        <div className="container">
            <div className="content">
                <div className="flex direction">
                    <div className='flex'>
                        <div className="bg-grey-4 p-2 flex-initial w-15 rounded-lg drop-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-white w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                        <p className="text-base md:text-xl menuIcons">History</p>
                    </div>

                    <div className="ml-auto btn-right">
                        <div className="search">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-grey-4 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="block w-full h-full rounded-md border-grey-3 px-12"
                                placeholder="Search"
                            />
                        </div >
                    </div>
                </div>

                <div className='card mt-6'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p className='text-gray-900 text-sm font-semibold self-center'>8 AGUSTUS 2022</p>
                        </div>
                        <div className='flex'>
                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                                <span aria-hidden="true" class="bg-yellow-2 opacity-25 absolute inset-0 rounded-md"></span>
                                <span class="relative text-xs text-yellow-1 font-medium">Dalam Perjalanan</span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </div>
                    </div>
                    <hr class="my-4 border-t border-grey-50" />
                    <div className='flex justify-between gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>K-LOG. 005</h2>
                            <p className='text-base mt-3'>Kendaraan :</p>
                            <div className='flex gap-2 items-center to-row'>
                                <p className='text-base font-bold'>Wingbox Box Ceper</p>
                                <p className='text-sm'>- N 9163 CE</p>
                            </div>
                        </div>

                        <div className='self-end'>
                            <Link to='details'>
                                <button type="submit"
                                    class="justify-center flex bg-pink-1 hover:bg-pink-2 text-white px-2 py-1 w-full rounded-md shadow-sm text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    See Detail
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='card mt-6'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p className='text-gray-900 text-sm font-semibold self-center'>06 JULI 2022</p>
                        </div>
                        <div className='flex'>
                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                                <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-md"></span>
                                <span class="relative text-xs text-green-1 font-medium">Sudah Diterima</span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </div>
                    </div>
                    <hr class="my-4 border-t border-grey-50" />
                    <div className='flex justify-between gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>K-LOG. 001</h2>
                            <p className='text-base mt-3'>Kendaraan :</p>
                            <div className='flex gap-2 items-center to-row'>
                                <p className='text-base font-bold'>Wingbox Box Besar</p>
                                <p className='text-sm'>- N 9357 EK</p>
                            </div>
                        </div>

                        <div className='self-end'>
                            <Link to='details'>
                                <button type="submit"
                                    class="justify-center flex bg-pink-1 hover:bg-pink-2 text-white px-2 py-1 w-full rounded-md shadow-sm text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    See Detail
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='card mt-6'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p className='text-gray-900 text-sm font-semibold self-center'>23 JUNI 2022</p>
                        </div>
                        <div className='flex'>
                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                            <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-md"></span>
                                <span class="relative text-xs text-green-1 font-medium">Sudah Diterima</span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </div>
                    </div>
                    <hr class="my-4 border-t border-grey-50" />
                    <div className='flex justify-between gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>K-LOG. 002</h2>
                            <p className='text-base mt-3'>Kendaraan :</p>
                            <div className='flex gap-2 items-center to-row'>
                                <p className='text-base font-bold'>NMR</p>
                                <p className='text-sm'>- N 8755 EI</p>
                            </div>
                        </div>

                        <div className='self-end'>
                            <Link to='details'>
                                <button type="submit"
                                    class="justify-center flex bg-pink-1 hover:bg-pink-2 text-white px-2 py-1 w-full rounded-md shadow-sm text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    See Detail
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default History
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

                    <div className="right-btn">
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
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                        <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead className='h-14'>
                                    <tr>
                                        <th>No</th>
                                        <th>Armada</th>
                                        <th>Kendaraan</th>
                                        <th>Plat</th>
                                        <th>Start Time</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>K-LOG. 001</td>
                                        <td>NMR</td>
                                        <td>N 8755 EI</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:28:09 AM</p>
                                        </td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-tight text-center">
                                                <span aria-hidden="true" class="bg-yellow-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-yellow">Dalam Perjalanan</span>
                                            </span>
                                        </td>
                                        <td>
                                            <Link to='details'>
                                                <button className='bg-pink-2 hover:bg-pink-1 p-1 flex-initial w-15 rounded' title='Detail'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>K-LOG. 004	</td>
                                        <td>Wingbox Box Besar</td>
                                        <td>N 9357 EK</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 1th 2022</p><p class="text-gray-600 whitespace-no-wrap">12:28:59 AM</p>
                                        </td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-tight text-center">
                                                <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-green">Sudah Diterima</span>
                                            </span>
                                        </td>
                                        <td>
                                            <Link to='details'>
                                                <button className='bg-pink-2 hover:bg-pink-1 p-1 flex-initial w-15 rounded' title='Detail'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>K-LOG. 005</td>
                                        <td>Wingbox Box Ceper</td>
                                        <td>N 9163 CE</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">July 22th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:28:09 AM</p>
                                        </td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-tight text-center">
                                                <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-green">Sudah Diterima</span>
                                            </span>
                                        </td>
                                        <td>
                                            <Link to='details'>
                                                <button className='bg-pink-2 hover:bg-pink-1 p-1 flex-initial w-15 rounded' title='Detail'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default History

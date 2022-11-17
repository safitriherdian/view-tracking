import React from 'react';
import './Tracking.css';
import { Link } from 'react-router-dom';

function Tracking() {

    return (
        <div className="container">
            <div className="content">
                <div className="flex direction">
                    <div className='flex'>
                        <div className="bg-grey-4 p-2 flex-initial w-15 rounded-lg drop-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <p className="text-base md:text-xl menuIcons">Shipment Tracking</p>
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
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                        <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead className='h-14'>
                                    <tr>
                                        <th>No</th>
                                        <th>Armada</th>
                                        <th>Driver</th>
                                        <th>Kendaraan</th>
                                        <th>Plat</th>
                                        <th>Start Time</th>
                                        <th>Finish</th>
                                        <th>Penerima</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>K-LOG. 005</td>
                                        <td>Agus Hariyanto </td>
                                        <td>Wingbox Box Ceper</td>
                                        <td>N 9163 CE</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 9th 2022</p><p class="text-gray-600 whitespace-no-wrap">9:28:14 AM</p>
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 9th 2022</p><p class="text-gray-600 whitespace-no-wrap">9:55:55 AM</p>
                                        </td>
                                        <td>Alpan Imcoming</td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                                                <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-green-1 font-medium">Sudah Diterima</span>
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
                                        <td>2 </td>
                                        <td>K-LOG. 004</td>
                                        <td>Iskandar</td>
                                        <td>Wingbox Box Ceper</td>
                                        <td>N 9357 EK</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:28:09 AM</p>
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">10:55:35 AM</p>
                                        </td>
                                        <td>Achmad Hardadik</td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                                                <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-green-1 font-medium">Sudah Diterima</span>
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
                                        <td>K-LOG. 001</td>
                                        <td>Itok Wahyudi</td>
                                        <td>NMR</td>
                                        <td>N 8755 EI</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 12th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:01:44 AM</p>
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 12th 2022</p><p class="text-gray-600 whitespace-no-wrap">12:52:34 AM</p>
                                        </td>
                                        <td>Alpan Imcoming</td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                                                <span aria-hidden="true" class="bg-yellow-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-yellow-1 font-medium">Dalam Perjalanan</span>
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
                                        <td>4</td>
                                        <td>K-LOG. 004</td>
                                        <td>Iskandar</td>
                                        <td>Wingbox Box Besar</td>
                                        <td>N 9357 EK</td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:28:09 AM</p>
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">10:55:35 AM</p>
                                        </td>
                                        <td>Achmad Hardadik</td>
                                        <td>
                                            <span class="relative inline-block px-3 py-1 leading-none text-center">
                                                <span aria-hidden="true" class="bg-green-2 opacity-25 absolute inset-0 rounded-full"></span>
                                                <span class="relative text-xs text-green-1 font-medium">Sudah Diterima</span>
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

export default Tracking
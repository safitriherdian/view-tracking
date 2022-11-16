import React from "react";
import './DashboardAdmin.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function alert_warning() {
    const Swal = require('sweetalert2')

    Swal.fire({
        title: 'Ada data yang masih kosong',
        text: 'Silahkan isi data kosong tersebut terlebih dahulu ',
        icon: 'warning',
        confirmButtonText: 'OK',
        width: 600,
        padding: '2em 1em'
    })
}

function toast_success() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Successfully added new package'
    })
}


function Dashboard() {
    return (
        <div className="container">
            <div className="content">
                <div className="flex direction">
                    <div className="flex">
                        <div className="bg-grey-4 p-2 flex-initial w-15 rounded-lg drop-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                        <p className="text-xl menuIcons">Dashboard</p>
                    </div>
                </div>

                <div className='grid grid-cols-7 gap-6 grid-dashboard mt mt-6'>
                    <div className='col-span-3 card'>
                        <p className="xl:text-xl sm:text-base font-bold">Delivery Performance</p>
                        <img className="w-full" src="/images/chart.png" alt="" />
                    </div>
                    <div className='col-span-2 card mt'>
                        <p className="xl:text-xl sm:text-base font-bold">Driver Performance</p>
                        <img className="w-full mt-5" src="/images/chart-pie.png" alt="" />
                    </div>
                    <div className='col-span-2 hide'>
                        <div className="bg-white xl:p-10 sm:p-5 rounded-xl drop-shadow flex flex-row items-center">
                            <img className="photo-profile bg-pink-1 rounded-lg" src="/images/photo.jpg" alt="" />
                            <div className="ml-5">
                                <p className="text-sm">Welcome,</p>
                                <p className="xl:text-xl sm:text-base font-bold">Admin K|TRACK!</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-6 grid-dashboard">
                            <div className="bg-white xl:p-10 sm:p-5 rounded-xl drop-shadow">
                                <div className="bg-blue-3 p-2 h-10 w-10 rounded-full drop-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                                <p className="xl:text-3xl sm:text-xl font-bold mt-14">02</p>
                                <p className="mt-2 xl:text-base sm:text-sm">Total delivery in <b>a day</b></p>
                            </div>
                            <div className="bg-white xl:p-10 sm:p-5 rounded-xl drop-shadow mt">
                                <div className="bg-blue-3 p-2 h-10 w-10 rounded-full drop-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                                <p className="xl:text-3xl sm:text-xl font-bold mt-14">63</p>
                                <p className="mt-2 xl:text-base sm:text-sm">Total delivery in <b>a month</b></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='card-info mt-6'>
                    <div className='content-detail'>
                        <div className='self-center'>
                            <p className='text-lg text-2xl font-bold mb-3'>Total</p>
                            <p className='text-base text-lg'>Accumulated data stored in database</p>
                        </div>
                        <div className='card-content col-span-2'>
                            <div className='px-5'>
                                <div className='flex justify-between'>
                                    <p className='font-bold text-lg'>Driver</p>
                                    <div className="bg-white p-2 flex-initial w-15 rounded-3xl drop-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-pink-1 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className='font-bold text-3xl text-5xl py-5'>05</p>
                            </div>
                            <Link to='driver'>
                                <button class="bg-pink-1 hover:bg-pink-2 text-white py-2 w-full rounded-lg tracking-wider shadow-sm">
                                    Lihat Detail
                                </button>
                            </Link>
                        </div>

                        <div className='card-content col-span-2'>
                            <div className='px-5'>
                                <div className='flex justify-between'>
                                    <p className='font-bold text-lg'>Tipe Kendaraan</p>
                                    <div className="bg-white p-2 flex-initial w-15 rounded-3xl drop-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-pink-1 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className='font-bold text-3xl md:text-5xl py-5'>05</p>
                            </div>
                            <Link to='kendaraan'>
                                <button class="bg-pink-1 hover:bg-pink-2 text-white py-2 w-full rounded-lg tracking-wider shadow-sm">
                                    Lihat Detail
                                </button>
                            </Link>
                        </div>

                        <div className='card-content col-span-2'>
                            <div className='px-5'>
                                <div className='flex justify-between'>
                                    <p className='font-bold text-lg'>Plat Nomor</p>
                                    <div className="bg-white p-2 flex-initial w-15 rounded-3xl drop-shadow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-pink-1 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className='font-bold text-3xl md:text-5xl py-5'>05</p>
                            </div>
                            <Link to='plat'>
                                <button class="bg-pink-1 hover:bg-pink-2 text-white py-2 w-full rounded-lg tracking-wider shadow-sm">
                                    Lihat Detail
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-10 mt-10 mng-table'>
                    <div className='col-span-1 card'>
                        <div className='flex justify-end mb-6'>
                            <p className='span-info'>Data Driver</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 w-6 h-6 self-center">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                            <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead className='h-14'>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama Driver</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Agus Hariyanto</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Nur Wahyudi</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Iskandar</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Itok Wahyudi</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Edi Widodo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2 card'>
                        <div className='flex justify-end mb-6'>
                            <p className='span-info'>Data Tipe Kendaraan dan Plat Nomor</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 w-6 h-6 self-center">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                            <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead className='h-14'>
                                        <tr className='bg-grey-3'>
                                            <th>No</th>
                                            <th>Plat Nomor</th>
                                            <th>Kendaraan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>N 9356 EK</td>
                                            <td>Wingbox Tronton</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>N 9357 EK</td>
                                            <td>Wingbox Tronton</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>N 8231 EH</td>
                                            <td>Wingbox Box Besar</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>N 9443 EJ</td>
                                            <td>Wingbox Box Besar</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>N 8141 EI</td>
                                            <td>Wingbox Box Ceper</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dashboard
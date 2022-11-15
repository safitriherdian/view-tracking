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
                        <p className="text-xl font-bold">Delivery Performance</p>
                        <img className="img-graph" src="/images/chart.png" alt="" />
                    </div>
                    <div className='col-span-2 card mt'>
                        <p className="text-xl font-bold">Driver Performance</p>
                        <img className="img-graph mt-5" src="/images/chart-pie.png" alt="" />
                    </div>
                    <div className='col-span-2'>
                        <div className="bg-white p-10 rounded-xl drop-shadow flex flex-row items-center card-admin">
                            <img className="photo-profile bg-pink-1 rounded-lg" src="/images/photo.jpg" alt="" />
                            <div className="ml-5">
                                <p className="text-sm">Welcome,</p>
                                <p className="text-xl font-bold">Admin K|TRACK!</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-6 grid-dashboard">
                            <div className="bg-white p-10 rounded-xl drop-shadow">
                                <div className="bg-blue-3 p-2 h-10 w-10 rounded-full drop-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                                <p className="text-3xl font-bold mt-14">02</p>
                                <p className="mt-2 text-sm md:text-base">Total shipments in <b>a day</b></p>
                            </div>
                            <div className="bg-white p-10 rounded-xl drop-shadow mt">
                                <div className="bg-blue-3 p-2 h-10 w-10 rounded-full drop-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                                <p className="text-3xl font-bold mt-14">63</p>
                                <p className="mt-2 text-sm md:text-base">Total shipments in <b>a month</b></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard


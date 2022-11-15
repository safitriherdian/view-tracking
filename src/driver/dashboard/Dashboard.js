import React from "react";
import './Dashboard.css';
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
        title: 'Successfully added new delivery'
    })
}


function Dashboard() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className="container">
            <div className="content">
                <div className="flex">
                    <div className="bg-grey-4 p-2 flex-initial w-15 rounded-lg drop-shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </div>
                    <p className="text-xl menuIcons">Dashboard</p>
                </div >

                <div className='grid grid-cols-2 gap-6 mt-6'>

                    <div className="col-span-1">
                        <div className="bg-pink-1 py-4 px-10 rounded-t-lg">
                            <p className="text-lg text-white font-bold">Add New Delivery</p>
                            <p className="text-sm text-white">Fill out the form below and create new delivery</p>
                        </div>

                        <div className="py-5 px-10 rounded-b-lg bg-white mb-4">
                            <div>
                                <p className="font-bold mb-2">Kendaraan</p>
                                <div class="w-fullinline-block relative text-sm">
                                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option>Pilih tipe kendaraan</option>
                                        <option>Wingbox Tronton</option>
                                        <option>Wingbox Box Besar</option>
                                        <option>Wingbox Box Ceper</option>
                                        <option>NLR</option>
                                        <option>NMR</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold mb-2 mt-5">Plat Nomor</p>
                                <div class="w-fullinline-block relative text-sm">
                                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option>Pilih plat nomor</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold mb-2 mt-5">Driver</p>
                                <div class="w-fullinline-block relative text-sm">
                                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option>Pilih driver</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button onClick={alert_warning} class="bg-pink-1 hover:bg-pink-2 text-white mt-4 font-bold py-2 px-6 rounded-lg tracking-widest drop-shadow">
                                    SAVE
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="bg-pink-1 py-4 px-10 rounded-t-lg">

                            <ul className="flex list-none flex-wrap flex-row gap-3" role="tablist">

                                <li className="-mb-px last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 1
                                                ? "text-pink-1 bg-white"
                                                : "text-white bg-pink-2")

                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        <div className="flex">
                                            Rute 1
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="end-position w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="-mb-px last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 2
                                                ? "text-pink-1 bg-white"
                                                : "text-white bg-pink-2")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        <div className="flex">
                                            Rute 2
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="end-position w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="py-5 px-10 rounded-md bg-white mb-4">
                            <div className="flex flex-wrap">
                                <div className="w-full">

                                    <div className="relative flex flex-col min-w-0 break-words w-full">
                                        <div className="flex-auto">
                                            <div className="tab-content tab-space">
                                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                    <div>
                                                        <p className="font-bold mb-2">Point Awal - 1</p>
                                                        <div class="w-fullinline-block relative text-sm">
                                                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option>Pilih point awal</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold mb-2 mt-5">Point Tujuan - 1</p>
                                                        <div class="w-fullinline-block relative text-sm">
                                                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option>Pilih point tujuan</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold mb-2 mt-5">Nomor SJP - 1</p>
                                                        <div class="w-fullinline-block relative text-sm">
                                                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option>Pilih nomor SJP</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <button onClick={alert_warning} class="bg-pink-1 hover:bg-pink-2 text-white mt-4 font-bold py-2 px-6 rounded-lg tracking-widest drop-shadow">
                                                            SAVE
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                    <div>
                                                        <p className="font-bold mb-2">Point Awal - 2</p>
                                                        <div class="w-fullinline-block relative text-sm">
                                                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option>Pilih point awal</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold mb-2 mt-5">Point Tujuan - 2</p>
                                                        <div class="w-fullinline-block relative text-sm">
                                                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option>Pilih point tujuan</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold mb-2 mt-5">Nomor SJP - 2</p>
                                                        <div class="w-fullinline-block relative text-sm">
                                                            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                                <option>Pilih nomor SJP</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <button onClick={alert_warning} class="bg-pink-1 hover:bg-pink-2 text-white mt-4 font-bold py-2 px-6 rounded-lg tracking-widest drop-shadow">
                                                            SAVE
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to='/history'>
                            <button onClick={toast_success} type="submit"
                                class="justify-center flex bg-blue-1 hover:bg-blue-2 text-white font-bold py-3 w-full rounded-lg tracking-wider shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                START
                            </button>
                        </Link>


                    </div>
                </div>



            </div>
        </div >
    )
}

export default Dashboard


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

function toast_success_create() {
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

function toast_success_finish() {
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
        title: 'Delivery successfully sent'
    })
}


function Dashboard() {

    const [openTab, setOpenTab] = React.useState(1);
    const [showModal, setShowModal] = React.useState(false);

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

                        <div className="py-8 px-10 rounded-b-lg bg-white mb-4">
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
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="bg-pink-1 py-4 px-10 rounded-t-lg">

                            <ul className="flex list-none flex-wrap flex-row gap-3" role="tablist">

                                <li className="-mb-px last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
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
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
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

                                <li className="-mb-px last:mr-0 flex-none text-center bg-white hover:bg-pink-2 rounded-lg">
                                    <a className="px-5 py-3 shadow-lg block leading-normal text-pink-1 hover:text-white ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>

                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="py-8 px-10 rounded-md bg-white mb-4">
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
                                                        <button
                                                            className="mt-6 px-5 justify-center flex bg-green-1 hover:bg-green-2 text-white font-bold py-3 w-auto rounded-lg tracking-wider shadow-sm ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(true)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                                            </svg>
                                                            FINISH
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={toast_success_create} type="submit"
                            class="justify-center flex bg-blue-1 hover:bg-blue-2 text-white font-bold py-3 w-full rounded-lg tracking-wider shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            START
                        </button>

                        {showModal ? (
                            <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative max-w-prose">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-xl font-semibold mr-12">
                                                    Confirmation of Delivery Receipt
                                                </h3>

                                                <button
                                                    className="ml-auto bg-transparent border-0 text-gray-700 float-right text-xl px-2"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    ×
                                                </button>

                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <div class="flex">
                                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 w-4 h-4">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-pink-1" placeholder="Nama Penerima" />
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center justify-end p-6 border-t border-solid border-slate-200">
                                                <button
                                                    className="bg-grey-4 text-white hover:bg-grey-3 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    CANCEL
                                                </button>
                                                <button
                                                    className="bg-pink-1 text-white hover:bg-pink-2 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    SAVE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}

                    </div>
                </div>



            </div>
        </div >
    )
}

export default Dashboard


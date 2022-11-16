import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function toast() {
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
        title: 'Successfully added number plate data'
    })
}

function PlatAdd() {

    const navigate = useNavigate();

    return (
        <div className='mng-page'>
            <div className='col-span-2 container'>
                <div className="content">

                    <div className="flex flex-row items-center">
                        <div className="flex-initial bg-grey-4 p-2 w-15 rounded-lg drop-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <p className="text-xl menuIcons">Tambah Plat Nomor</p>
                    </div>

                    <div className='card mt-6'>
                        <div class="input">
                            <p className='input-text mb-2'>Tipe Kendaraan</p>
                            <div class="input-form inline-block relative">
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

                        <div class="input mt-10">
                            <p className='input-text'>Plat Nomor</p>
                            <form class="input-form">
                                <div class="flex items-center border-b border-gray-700 py-2">
                                    <input
                                        class="placeholder-text focus:outline-none"
                                        type="text"
                                        placeholder="Masukkan plat nomor" >
                                    </input>
                                </div>
                            </form>
                        </div>

                        <div className='flex mt-10'>
                            <div className="ml-auto">
                            <button onClick={() => navigate(-1)} class="btn-back hover:bg-blue-3">
                                    KEMBALI
                                </button>
                                <Link to='/admin/management/plat'>
                                    <button onClick={toast} class="btn-submit hover:bg-pink-2">
                                        SIMPAN
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-1 bg-blue-1 page-right'>
                <div className="pt-20 ">
                    <div className="content">

                        <div className="flex flex-row items-center">
                            <div className="flex-initial bg-white p-2 w-15 rounded-lg drop-shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-1 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <p className="text-xl menuIcons text-white">Daftar Plat Nomor</p>
                        </div>

                        <div className='card mt-6'>
                            <div class="-mx-4 sm:-mx-8 px-4 sm:px-4 overflow-x-auto">
                                <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                                    <table class="min-w-full leading-normal">
                                        <thead className='h-14'>
                                            <tr className='bg-grey-3'>
                                                <th>Plat Nomor</th>
                                                <th>Kendaraan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>N 9356 EK</td>
                                                <td>Wingbox Tronton</td>
                                            </tr>
                                            <tr>
                                                <td>N 9357 EK</td>
                                                <td>Wingbox Tronton</td>
                                            </tr>
                                            <tr>
                                                <td>N 8231 EH</td>
                                                <td>Wingbox Box Besar</td>
                                            </tr>
                                            <tr>
                                                <td>N 9443 EJ</td>
                                                <td>Wingbox Box Besar</td>
                                            </tr>
                                            <tr>
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

        </div>

    )
}

export default PlatAdd

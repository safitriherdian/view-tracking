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
        title: 'Successfully updated vehicle data'
    })
}

function KendaraanUpdate() {

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
                        <p className="text-xl menuIcons">Ubah Tipe Kendaraan</p>
                    </div>

                    <div className='card mt-6'>
                        <div class="input">
                            <p className='input-text'>Tipe Kendaraan</p>
                            <form class="input-form">
                                <div class="flex items-center border-b border-gray-700 py-2">
                                    <input
                                        class="placeholder-text focus:outline-none"
                                        type="text"
                                        placeholder="Wingbox Tronton" />
                                </div>
                            </form>
                        </div>
                        <div className='flex mt-10'>
                            <div className="ml-auto">
                            <button onClick={() => navigate(-1)} class="btn-back hover:bg-blue-3">
                                    KEMBALI
                                </button>
                                <Link to='/admin/management/kendaraan'>
                                    <button onClick={toast} type="submit" class="btn-submit hover:bg-pink-2">
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
                            <p className="text-xl menuIcons text-white">Daftar Tipe Kendaraan</p>
                        </div>

                        <div className='card mt-6'>
                            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                                <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                                    <table class="min-w-full leading-normal">
                                        <thead className='h-14'>
                                            <tr>
                                                <th>No</th>
                                                <th>Tipe Kendaraan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Wingbox Tronton</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Wingbox Box Besar</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Wingbox Box Ceper</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>NLR</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>NMR</td>
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

export default KendaraanUpdate

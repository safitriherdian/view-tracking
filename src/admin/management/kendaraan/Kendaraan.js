import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function delete_warning() {
    const Swal = require('sweetalert2')

    Swal.fire({
        title: 'Apakah anda yakin',
        text: "Untuk menghapus data tipe kendaraan ini?",
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Kembali',
        confirmButtonText: 'Hapus'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your data has been deleted',
                'success'
            )
        }
    })
}

function Kendaraan() {

    return (
        <div className="container">
            <div className="content">
                <div className="flex direction">
                    <div className="flex">
                        <div className="bg-grey-4 p-2 flex-initial w-15 rounded-lg drop-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <p className="text-xl menuIcons">Management Kendaraan</p>
                    </div>

                    <div className="ml-auto">
                        <Link to='add'>
                            <button class="btn-add">
                                TAMBAH KENDARAAN
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='card mt-6'>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                        <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead className='h-14'>
                                    <tr className='bg-grey-3'>
                                        <th>No</th>
                                        <th>Tipe Kendaraan</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Wingbox Tronton</td>
                                        <td className='action'>
                                            <Link to='update'>
                                                <button className='bg-yellow-2 hover:bg-yellow-1 p-1 flex-initial w-15 rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <button onClick={delete_warning} className='bg-red-2 hover:bg-red-1 p-1 flex-initial w-15 rounded ml-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Wingbox Box Besar</td>
                                        <td className='action'>
                                            <Link to='update'>
                                                <button className='bg-yellow-2 hover:bg-yellow-1 p-1 flex-initial w-15 rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <button onClick={delete_warning} className='bg-red-2 hover:bg-red-1 p-1 flex-initial w-15 rounded ml-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Wingbox Box Ceper</td>
                                        <td className='action'>
                                            <Link to='update'>
                                                <button className='bg-yellow-2 hover:bg-yellow-1 p-1 flex-initial w-15 rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <button onClick={delete_warning} className='bg-red-2 hover:bg-red-1 p-1 flex-initial w-15 rounded ml-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>NLR</td>
                                        <td className='action'>
                                            <Link to='update'>
                                                <button className='bg-yellow-2 hover:bg-yellow-1 p-1 flex-initial w-15 rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <button onClick={delete_warning} className='bg-red-2 hover:bg-red-1 p-1 flex-initial w-15 rounded ml-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>NMR</td>
                                        <td className='action'>
                                            <Link to='update'>
                                                <button className='bg-yellow-2 hover:bg-yellow-1 p-1 flex-initial w-15 rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <button onClick={delete_warning} className='bg-red-2 hover:bg-red-1 p-1 flex-initial w-15 rounded ml-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kendaraan
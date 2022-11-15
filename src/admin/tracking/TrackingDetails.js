import React from 'react'
import './Tracking.css'
import { useNavigate } from 'react-router-dom';


function TrackingDetails() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="content">

                <div className="title-page">
                    <div className="flex-initial bg-grey-4 p-2 w-15 rounded-lg drop-shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>

                    </div>
                    <p className="text-xl menuIcons">Details Tracking</p>

                    <div className="right-btn-back">
                        <button onClick={() => navigate(-1)} class="bg-blue-1 hover:bg-blue-3 text-white py-2 px-6 rounded-lg tracking-wider shadow-sm">
                            KEMBALI
                        </button>
                    </div>

                </div>

                <div className='content-details'>
                    <div className='grid grid-cols-2 gap-6 card-info'>
                        <div className='col-span-1'>
                            <table className='auto-layout'>
                                <tbody>
                                    <tr>
                                        <td className='w-28'><b>Driver</b></td>
                                        <td className='w-10'>:</td>
                                        <td>Agus Hariyanto</td>
                                    </tr>
                                    <tr>
                                        <td className='w-28'><b>Kendaraan</b></td>
                                        <td className='w-10'>:</td>
                                        <td>Wingbox Box Ceper</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='col-span-1'>
                            <table className='auto-layout'>
                                <tbody>
                                    <tr>
                                        <td className='w-28'><b>Armada</b></td>
                                        <td className='w-10'>:</td>
                                        <td>K-LOG . 009</td>
                                    </tr>
                                    <tr>
                                        <td className='w-28'><b>Plat</b></td>
                                        <td className='w-10'>:</td>
                                        <td>N 9163 CE</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div className='card mt-6'>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                        <div class="inline-block min-w-full shadow-md rounded-md overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead className='h-14'>
                                    <tr>
                                        <th>No</th>
                                        <th>Point Awal</th>
                                        <th>Point Tujuan</th>
                                        <th>SJP</th>
                                        <th>Start Time</th>
                                        <th>Finish</th>
                                        <th>Status</th>
                                        <th>Penerima</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>KOSME NUTRITION</td>
                                        <td>KCI TENAGA</td>
                                        <td>
                                            336/SJ.KGI/22/X/SBY/MSG <br />
                                            337/SJ.KGI/22/X/SBY/MSG <br />
                                            335/SJ.KGI/22/X/SBY/MSG <br />
                                            336/SJ.KGI/22/X/SBY/MSG <br />
                                            338/SJ.KGI/22/X/SBY/MSG
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:28:09 AM</p>
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">10:55:35 AM</p>
                                        </td>
                                        <td>
                                            <span class="status-yes">Sudah Diterima</span>
                                        </td>
                                        <td>Budi</td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>KGI 1</td>
                                        <td>KGI 2</td>
                                        <td>
                                            336/SJ.KGI/22/X/SBY/MSG <br />
                                            337/SJ.KGI/22/X/SBY/MSG <br />
                                            335/SJ.KGI/22/X/SBY/MSG 
                                        </td>
                                        <td>
                                            <p class="text-gray-900 whitespace-no-wrap">August 8th 2022</p><p class="text-gray-600 whitespace-no-wrap">7:28:09 AM</p>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <span class="status-no">Dalam Pengiriman</span>
                                        </td>
                                        <td>-</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default TrackingDetails

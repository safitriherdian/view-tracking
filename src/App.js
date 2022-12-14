import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPass from './pages/Auth/ForgotPass';

import Test from './pages/Profile/Test';

import Maintenance from './pages/Error/Maintenance';
import NotFound from './pages/Error/NotFound';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Dashboard from './admin/dashboard/Dashboard';
import Tracking from './admin/tracking/Tracking';
import TrackingDetails from './admin/tracking/TrackingDetails';
import Management from './admin/management/Management';
import Kendaraan from './admin/management/kendaraan/Kendaraan';
import KendaraanAdd from './admin/management/kendaraan/KendaraanAdd';
import KendaraanUpdate from './admin/management/kendaraan/KendaraanUpdate';
import Plat from './admin/management/plat/Plat';
import PlatAdd from './admin/management/plat/PlatAdd';
import PlatUpdate from './admin/management/plat/PlatUpdate';
import Driver from './admin/management/driver/Driver';
import DriverAdd from './admin/management/driver/DriverAdd';
import DriverUpdate from './admin/management/driver/DriverUpdate';

import HomeDriver from './driver/home/Home';
import HistoryDriver from './driver/history/History';
import HistoryDetails from './driver/history/HistoryDetails';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPass />} />
        <Route path='/test' element={<Test />} />

        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/not-found' element={<NotFound />} />

      </Routes>

      <Navbar />

      <Routes>

        {/* ADMIN */}

        <Route path='/admin' element={<Dashboard />} />

        <Route path='/admin/tracking' element={<Tracking />} />
        <Route path='/admin/tracking/details' element={<TrackingDetails />} />

        <Route path='/admin/management' element={<Management />} />

        <Route path='/admin/management/kendaraan' element={<Kendaraan />} />
        <Route path='/admin/management/kendaraan/add' element={<KendaraanAdd />} />
        <Route path='/admin/management/kendaraan/update' element={<KendaraanUpdate />} />

        <Route path='/admin/management/plat' element={<Plat />} />
        <Route path='/admin/management/plat/add' element={<PlatAdd />} />
        <Route path='/admin/management/plat/update' element={<PlatUpdate />} />

        <Route path='/admin/management/driver' element={<Driver />} />
        <Route path='/admin/management/driver/add' element={<DriverAdd />} />
        <Route path='/admin/management/driver/update' element={<DriverUpdate />} />

        {/* DRIVER */}

        <Route path='/' element={<HomeDriver />} />
        <Route path='/history' element={<HistoryDriver />} />
        <Route path='/history/details' element={<HistoryDetails />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
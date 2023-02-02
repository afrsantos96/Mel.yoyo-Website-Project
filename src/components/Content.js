import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
/* import About from '../views/About'; */
import Gallery from '../views/Gallery';
import Shop from '../views/Shop';
import Flash from '../views/Flash';
import Booking from '../views/Booking';
import NotFound from '../views/NotFound';
import './Content.css';

const Content = () => (
    <main className='content'>
       <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/shop/:flash' element={<Flash />}/>
            <Route path='/booking' element={<Booking />}/>
            <Route path='*' element={<NotFound />}/>
       </Routes>
    </main>
)

export default Content;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Gallery from '../views/Gallery';
import Shop from '../views/Shop';
import Form from '../views/Form';
import NotFound from '../views/NotFound';

const Content = () => (
    <main className='Content'>
       <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/custom' element={<Form />}/>
            <Route path='*' element={<NotFound />}/>
       </Routes>
    </main>
)

export default Content;
import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import './styles/Home.css'

const Home = () => (
    <div className='home'>
        <section className='homepage'>
            <div className='homepage__container'>
                <div className='homepage__container__img1'>
                {/* home-img-container */}
                    <img src='./media//images/home/homeGifhd.gif' className="homepage__img1" alt="..."></img>
                </div>
                <div className='homepage__txt'>{/* home-text */}
                <p>TATTOO</p><p>THERAPY</p><p>& CHOCOLATE</p>
                <p className='homepage__text_quote'>Find yours <Link className='about__link' to={"/shop"}>here.</Link></p>
                </div>
            </div>
        </section>
        <About/>
        <Gallery/>
   </div>
)

export default Home;
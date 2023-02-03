import React from 'react';
import About from './About';
import Gallery from './Gallery';
import './styles/Home.css'

const Home = () => (
    <div className='home'>
        <section className='homepage'>
            <div className='homepage__container'>
                <div className='homepage__container__img1'>
                {/* home-img-container */}
                    <img src='./media/images/home/homeGifHD.gif' className="homepage__img1" alt="slideshow of multiple tattoos made by Mel"></img>
                </div>
                <div className='homepage__txt'>{/* home-text */}
                <p>TATTOO</p><p>THERAPY</p><p>& CHOCOLATE</p>
                <p className='homepage__text_quote'>Find my work <a className='home__link' href="#Gallery">here.</a></p>
                </div>
            </div>
        </section>
        <About/>
        <Gallery/>
   </div>
)

export default Home;
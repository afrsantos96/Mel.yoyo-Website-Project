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
                    <img src='./media//images/home/homeGifhd.gif' className="homepage__img1" alt="..."></img>
                </div>
                <div className='homepage__txt'>{/* home-text */}
                <p>tattoo</p><p>therapy</p><p>& chocolate</p>
                </div>
                <div className='homepage__container__img2'>{/* home-img-container */}
                    <img src='./media/images/home/home3.png' className="homepage__img2" alt="..."></img>
                </div>
            </div>
        </section>
        <About/>
        <Gallery/>
   </div>
)

export default Home;
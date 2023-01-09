import React from 'react';
import './styles/Home.css'

const Home = () => (
   <section className='row homepage'>{/*  */} 
        <div className='col-6 col-lg-4'>
        {/* home-img-container */}
            <img src='./media//images/home/homeGifhd.gif' className="home-img" alt="..."></img>
        </div>
        <div className='col-6 col-lg-4 '>{/* home-text */}
        <p>tattoo</p><p>therapy</p><p>& chocolate</p>
        </div>
        <div className='col-12 col-lg-4'>{/* home-img-container */}
            <img src='./media/images/home/home2.png' className="home-img2" alt="..."></img>
        </div>
   </section>
)

export default Home;
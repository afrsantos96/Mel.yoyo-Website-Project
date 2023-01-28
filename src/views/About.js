import React from 'react';
import './styles/About.css';


const About = () => (
    <div className='about'>
            <div className='about__img_container'>
                <img src='./media/images/about/about.png' className='about__img' alt='Mel'></img>
            </div>
            <div className='about__mel_txt-container'>
                <h1 className='about__title'>It's me Mel</h1>
                <p className='about__studio_txt'>Text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel</p>
            </div>
            <img src='./media/images/home/home2.png' className="about__heart" alt="red heart draw with face"></img>

   </div>
)

export default About;
import React from 'react';
import './styles/About.css';


const About = () => (
    <section className='about'>
        <div className='about__container'>
            <div className='about__img_container'>
                <img src='./media/images/about/about.png' className='about__img' alt='Mel'></img>
            </div>
            <div className='about__mel_txt-container'>
                <h1 className='about__title'>It's me Mel</h1>
                <p className='about__mel__txt'>Text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel</p>
                <p className="about__mel__quote">Text about <a href="#Gallery"className='about__link'>mel</a></p>
                <img src='./media/images/home/home3.png' className="about__heart" alt="red heart draw with face"></img>

            </div>
        </div>
   </section>
)

export default About;
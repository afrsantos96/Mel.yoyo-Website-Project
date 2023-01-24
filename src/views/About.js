import React from 'react';
import './styles/About.css';


const About = () => (
    <div className='about'>
        <div className='about__mel row'>
            <div className='col-8 col-md-4'>
                <img src='./media/images/about/mel.jpg' className='about-mel-img' alt='Mel' width='300px'></img>
            </div>
            <div className='col-8 col-md-5 about__mel_txt-container'>
                <h1 className='about__title'>It's me Mel</h1>
                <p className='about__studio_txt'>Text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel</p>
            </div>
        </div>
        <div className='about__studio row'>
            <div className='col-8 col-md-5 about__studio_txt-container'>
                <h1 className='about__title'>The Studio</h1>
                <p className='about__studio_txt'>Text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel</p>
            </div>
            <div className='col-8 col-md-4'>
                <img src='./media/images/about/studio.jpg' className="about-mel-img" alt="Studio" width='300px'></img>
            </div>
        </div>
        <img src='./media/images/home/home2.png' className="heart-absolute" alt="red heart draw with face"></img>
    </div>
)

export default About;
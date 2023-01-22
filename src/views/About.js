import React from 'react';
import './styles/About.css'

const About = () => (
    <div className='about'>
        <div className='about-row row'>
            <div className='col-4'>
                <img src='./media/images/about/mel.jpg' className='about-mel-img' alt='Mel' width='300px'></img>
            </div>
            <div className='col-5 about-mel-txt'>
                <h1>It's me Mel</h1>
                <p>Text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel</p>
            </div>
        </div>
        <div className='about-row row'>
            <div className='col-5 about-mel-txt'>
                <h1>The Studio</h1>
                <p>Text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel text about mel</p>
            </div>
            <div className='col-4'>
                <img src='./media/images/about/studio.jpg' className="about-mel-img" alt="Studio" width='300px'></img>
            </div>
        </div>
    </div>
)

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/About.css';


const About = () => (
    <section className='about'>
        <div className='about__container'>
            <div className='about__img_container'>
                <img src='./media/images/about/about.png' className='about__img' alt='mel while tattooing'></img>
            </div>
            <div className='about__mel_txt-container'>
                <h1 className='about__title'>It's me Mel</h1>
                <p className='about__mel__txt'>Born in London, with a Portuguese heart.<br/> I discovered design at a young age, and since then it has progressed to a passion and profession that I am proud of.</p>
                <p className='about__mel__txt'>I'm a tattoo artist in my spare time, I like to keep up to date and active. <br/>
                I travel a lot and I think that gives me a good visual culture. I love ceramics, notebooks and imperfect shapes.</p>
                <p className="about__mel__quote">Go pick your <Link to={"/shop"} className='about__link'>next tattoo.</Link></p>
                <img src='./media/images/about/about2.png' className="about__heart" alt="red heart illustration with face"></img>
            </div>
        </div>
   </section>
)

export default About;
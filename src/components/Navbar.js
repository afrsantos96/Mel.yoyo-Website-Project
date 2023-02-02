import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    
        <nav className='navbar sticky-top navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand d-lg-none ">
                    <img src='./media/images/logo_banner.png' className='navbar-brand-logo'width="300" alt=""></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <Link to={"/"} className="navbar-brand d-none d-lg-block nav-banner">
                        <img src="./media/images/logo_small.png" width='100'  alt=""></img>
                    </Link>
                <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/"}>HELLO</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/shop"}>FLASHES</Link>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="https://docs.google.com/forms/d/e/1FAIpQLSdj8bJKJULX7g35WAZgf2IepGM0ocmYdHU0dV4REGiBm-BFag/viewform" target="_blank" rel="noopener noreferrer">BOOKING</a>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </nav>
)

export default Navbar;
import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand d-lg-none mx-auto">
                    <img src='./media/images/logo_banner.png' className='navbar-brand-logo'width="300" alt=""></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <Link to={"/"} className="navbar-brand d-none d-lg-block mx-auto nav-banner">
                        <img src="./media/images/logo_small.png" width='100'  alt=""></img>
                    </Link>
                <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/"}>Mel</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/gallery"}>gallery</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/shop"}>flashes</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/custom"}>custom tattoo</Link>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </nav>
)

export default Navbar;
import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand d-lg-none mx-auto">
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 mx-auto'>
                        <li>
                            <Link to={"/"} className="navbar-brand d-none d-lg-block">
                            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/about"}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/gallery"}>Gallery</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/shop"}>Available</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={"/custom"}>Custom Tattoo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)

export default Navbar;
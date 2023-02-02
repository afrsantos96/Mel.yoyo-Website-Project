import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => (
    <section className='notfound'>
        <div className='notfound__container'>
        <Link className='nav-link' to={"/"}><i class="fa-solid fa-angle-left"></i> Go Back</Link>
            <h1 className='notfound__txt'>Oh no something went wrong!</h1>
            <div className='notfound__img__container'>
                <img src='./media//images/boo.png' className="notfound__img" alt="ghost doodle"></img>
            </div>
        </div>
    </section>
)

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className='NotFound'>
        <h1>Oh no something went wrong!</h1>

        <Link className='nav-link' to={"/"}><i class="fa-solid fa-angle-left"></i> Go Back</Link>
    </div>
)

export default NotFound;
import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Gallery from './Gallery';

import './styles/Flash.css'

export default function Flash() {

    const { flash } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flashes, setFlashes] = useState([]);


    useEffect(() => {
        fetch("../../data/flashes.json")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setFlashes(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);

      if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        
        return <div class="loadingio-spinner-spinner-wkemfo7naoe"><div class="ldio-o0viprjlto">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
    } else {
        console.log(flash);
        if (flash) {
            const data = flashes.filter( selectedFlash => selectedFlash.id === flash);
        return (
        <div className="row">
            {/**Lateral Filter */}
            <div className="shop-filter col-2">
                <Link className='back-link' to={"/shop"}><i class="fa-solid fa-angle-left"></i> Back Button</Link>
            </div>
            {/**Flash container */}
            <div className="col-12 col-lg-6">
                    <div key={flashes[flash-1].id} className="flash-img-container">
                    <img src={flashes[flash-1].url} alt="tattoo flash" className='flash-img'/>
                    </div>
            </div>
            {/**Flash description */}
            <div className="flash-description col-2">
                        <p className="">{flashes[flash-1].title} - {flashes[flash-1].price}€</p>
                    </div>
        </div>

)}}};

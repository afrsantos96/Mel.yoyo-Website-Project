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
        
        return <div className='loading'><div class="loadingio-spinner-spinner-wkemfo7naoe"><div class="ldio-o0viprjlto loading">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div></div>
    } else {
        if (flash) {
            const data = flashes.filter( selectedFlash => selectedFlash.id === flash);
        return (<>
                <div className='flash'>
                    <div className="flash__header">
                        <div className="flash__header__container">
                            <Link className='back__link nav-link' to={"/shop"}><i class="fa-solid fa-angle-left"></i> Back to Gallery</Link>
                            <p className="flash__title">{flashes[flash-1].title}</p>
                            <p className="flash__subtitle">{flashes[flash-1].collection}</p>
                            <p className="flash__subtitle">Min Size: {flashes[flash-1].minsize} cm</p>
                            <p className="flash__subtitle">Price: {flashes[flash-1].price} €</p>
                            <p className='flash__booking'>I wanna <a href="https://docs.google.com/forms/d/e/1FAIpQLSdj8bJKJULX7g35WAZgf2IepGM0ocmYdHU0dV4REGiBm-BFag/viewform" className='flash__booking__link' target="_blank" rel="noopener noreferrer"> book it!</a></p>
                        </div>

                    </div>
                    <div className="flash__page">
                        <div className="flash__container">
                            <div key={flashes[flash-1].id} className="">
                            <img src={flashes[flash-1].url} alt="tattoo flash" className='flash__img'/>
                            </div>
                        </div>

                    </div>
                </div>
                </>
)}}};

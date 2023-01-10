import React,{useEffect, useState}  from 'react';
import './styles/Gallery.css'

const Gallery = props => {
 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('./data/gallery.json')
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setGallery(data);
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
        return <p>Loading...</p>;
    } else {
        return (
            <>
                {gallery.map( (image,index) => {
                        return (
                            <div key={index} className="gallery-img">
                                <img src={image.url} alt="tattoo" />
                                <div className="overlay">
                                <p className="gallery-img-overlay">{image.title}</p>
                                </div>
                            </div>
                    );
                }
            )}
            </>
        );
    }

    
}

export default Gallery;
import React,{useEffect, useState}  from 'react';
import './styles/Gallery.css'

const GalleryContent = () => {
 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch("./data/gallery.json")
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
        console.log("Loading");
        return <p>Loading...</p>;
        
    } else {
        console.log(gallery);
        return (
            <>
                {gallery.map( (image,index) => {
                        return (
                            <div key={index} className="gallery-img-container col-6 col-md-4">
                                <img src={image.url} alt="tattoo" className='gallery-img'/>
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

const Gallery = () => (
        <div className='gallery row' id='Gallery'>
            <GalleryContent/>
        </div>


)


export default Gallery;
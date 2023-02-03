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
                            <div key={index} className="gallery__img__container col-6 col-md-4" >
                                <img src={image.url} alt="fresh tattoo" className='gallery__img'  />
                                <div className="gallery__img__overlay">
                                <p className="gallery__img__overlay__txt">{image.title}</p>
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
    <><section className='gallery' >
    <div className='gallery__container'>
    <div className='gallery__title' id='Gallery'>My work ~</div>
        <div className='gallery__images__container row'>
            <GalleryContent/>
        </div>
        </div>
    </section>
    </>
)


export default Gallery;
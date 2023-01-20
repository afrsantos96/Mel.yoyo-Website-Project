import React from "react";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './styles/Shop.css'

export default function ShopContent(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flashes, setFlashes] = useState([]);
    const [flashesOri, setFlashesOri] = useState([]);
    const [filters, setFilters] = useState({});
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [minPrice, setminPrice] = useState([]);
    const [maxPrice, setmaxPrice] = useState([]);
    const [price, setPrice] = useState([]);
    
    


    const priceRangeInput = (e) => {
    setPrice(e.target.value);
  };

  const tagsInput = (e) => {
    const newTags = [...selectedTags];
    if (e.target.checked) {
        newTags.push(e.target.getAttribute("tag"));
    } else {
        newTags.splice(newTags.indexOf(e.target.getAttribute("tag")), 1);
    }
    setSelectedTags(newTags);
  };

  const sizeInput = (e) => {
    const newSizes = [...selectedSizes];
    if (e.target.checked) {
        newSizes.push(e.target.getAttribute("tag"));
    } else {
        newSizes.splice(newSizes.indexOf(e.target.getAttribute("tag")), 1);
    }
    setSelectedSizes(newSizes);
};

    useEffect(() => {
        fetch("./data/flashes.json")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setFlashes(data);
                    setFlashesOri(data);
                    setminPrice (Math.min(...(data.map(data => data.price))));
                    setmaxPrice (Math.max(...(data.map(data => data.price))));
                    setPrice (Math.max(...(data.map(data => data.price))));
                    console.log(maxPrice);
                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);

    const allTags = [...new Set(flashes.map(flash => flash.tags[0]))];

    const allSizes = [...new Set(flashes.map(flash => flash.size))]

      if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        
        return (
            <>
                <div className="row">
                    <div className="shop-filter col-2"> 
                        {/* Price Range Input */}     
                        <div className="price-range">
                            <label htmlFor="pricefilter" className='form-label'>PriceFilter</label>
                            <input type="range" className='form-range' id="pricefilter" name="pricefilter" min={minPrice} max={maxPrice} step="5" value={price} onInput={priceRangeInput} />
                            <p>{price}</p>

                        </div>
                            {/* Tag Inputs */}
                        <div className="tags-filter">
                            <p>Tags Filter</p>
                            {allTags.map((tag) => (
                                <label key={tag}>
                                    <input
                                        type="checkbox"
                                        checked={filters[tag]}
                                        onChange={tagsInput}
                                        tag={tag}
                                        className="tags-filter-input"
                                    />
                                    {tag}
                                </label>
                            ))}
                        </div>
                        <br/>
                        {/* Size Inputs */}
                        <div className="size-filter">
                            <p>Size Filter</p>
                            {allSizes.map((size) => (
                                <label key={size}>
                                    <input
                                        type="checkbox"
                                        checked={filters[size]}
                                        onChange={sizeInput}
                                        tag={size}
                                        className="size-filter-input"
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className='gallery row'>
                        {flashes
                            .filter((flash) => {
                            return  flash.price <= price && 
                            selectedTags.every((tag) => flash.tags.includes(tag)) &&
                            selectedSizes.every((size) => flash.size.includes(size));
    })
                            .map((flash) => {
                                return (
                                    <div key={flash.id} className="gallery-img-container col-6 col-md-4">{/**data-bs-toggle="modal" data-bs-target="#flashModal" */}
                                        {/**Tattoo Gallery with Link to each Flash */}
                                        <Link className='nav-link' to={`/shop/${flash.id}`}>
                                            <img src={flash.url} alt="tattoo" className='gallery-img'/>
                                            <div className="overlay">
                                                <p className="gallery-img-overlay">{flash.title} - {flash.price}€</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
        
                 </div>
            </>
        );
    }

}

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
            <><div className="shop__header">
                <div className="shop__header__container">
                    <p className="shop__title">FLASH GALLERY</p>
                    <p className="shop__subtitle">Made with love</p>
                </div>
            </div>
                <div className="row shop">
                <button class="filter__button btn " type="button" data-bs-toggle="collapse" data-bs-target="#filters" aria-expanded="false" aria-controls="collapseWidthExample">
                        Filters
                        </button>
                    <div className="shop__filter col-12 col-lg-2 collapse" id="filters"> 
                        
                        {/* Price Range Input */}     
                        <div className="price__filter">
                            <label htmlFor="pricefilter" className='filter__title'>PriceFilter</label>
                            <input type="range" className='form-range' id="pricefilter" name="pricefilter" min={minPrice} max={maxPrice} step="5" value={price} onInput={priceRangeInput} />
                            <div className="price__filter__status"><p>Max price:</p><p>{price} €</p></div>

                        </div>
                            {/* Tag Inputs */}
                        <div className="tags__filter">
                            <p className="filter__title">Tags Filter</p>
                            {allTags.map((tag) => (
                                <label key={tag} className="checkbox__container">
                                    <input
                                        type="checkbox"
                                        checked={filters[tag]}
                                        onChange={tagsInput}
                                        tag={tag}
                                        className="tags__filter-input"
                                    /> {tag}
                                    <span className="checkmark"></span>
                                </label>
                                
                            ))}
                        </div>
                        <br/>
                        {/* Size Inputs */}
                        <div className="size__filter">
                            <p className="filter__title">Size Filter</p>
                            {allSizes.map((size) => (
                                <label key={size} className="checkbox__container">
                                    <input
                                        type="checkbox"
                                        checked={filters[size]}
                                        onChange={sizeInput}
                                        tag={size}
                                        className="size__filter-input"
                                    /> {size}
                                    <span className="checkmark"></span>
                                </label>
                            ))}
                        </div>
                    
                    </div>
                    <div className="col-12 col-lg-10">
                        <div className='shop__container row'>
                        {flashes
                            .filter((flash) => {
                            return  flash.price <= price && 
                            selectedTags.every((tag) => flash.tags.includes(tag)) &&
                            selectedSizes.every((size) => flash.size.includes(size));
    })
                            .map((flash) => {
                                return (
                                    <div key={flash.id} className="flash__img__container col-6 col-md-4">
                                        {/**Tattoo Gallery with Link to each Flash */}
                                        <Link className='nav-link' to={`/shop/${flash.id}`}>
                                            <img src={flash.url} alt="tattoo" className='flash__img'/>
                                            <div className="flash__img__overlay">
                                                <p className="flash__img__overlay__txt__title">{flash.title}</p>
                                                <p className="flash__img__overlay__txt__price">{flash.price}€</p>
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

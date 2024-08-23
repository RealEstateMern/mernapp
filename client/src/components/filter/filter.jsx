import React from 'react'
import '../filter/filter.scss'

function filter() {
  return (
    <div className="filter">
        <h1>Search Results for <b>London</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type='text' id='city' name='city' placeholder='City Location'/>
            </div>

        </div>

        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select id='type' name='type' >
                <option value="any">any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>

            <div className="item">
                <label htmlFor="property">Property</label>
                <select id='property' name='property' >
                    <option value="any">any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>

            <div className="item">
                <label htmlFor="minPrize">Min Price</label>
                <input type='number' id='minPrice' name='minPrize' placeholder='any'/>
            </div>

            <div className="item">
                <label htmlFor="maxPrize">Max Price</label>
                <input type='number' id='maxPrice' name='maxPrize' placeholder='any'/>
            </div>

            <div className="item">
                <label htmlFor="bedroom">Location</label>
                <input type='bedroom' id='bedroom' name='city' placeholder='any'/>
            </div>

            <button>
                <img src='/search.png' alt=""/>
            </button>
        </div>
    </div>
  )
}

export default filter
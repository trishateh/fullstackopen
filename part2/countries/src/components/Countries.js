import React from 'react'
import Country from './Country'

const Countries = ({newFilter, countries, showCountry, weather, handleCountryChange}) => {

   const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))

    if (filteredCountries.length === countries.length) {
        return(
            <div> </div>
        )
    } else if (filteredCountries.length === 1) {
        handleCountryChange(filteredCountries[0].capital)
      return(
            <div key={filteredCountries[0].name} >
                <Country country={filteredCountries[0]} weather={weather} />
            </div>     
        )
    } else if (filteredCountries.length <=10 ) {
        return(
            filteredCountries.map(country => 
               <div key={country.name} >
                   <span>{country.name}</span> 
                   <button type='button' value={country.name} onClick={showCountry}>show</button>
               </div>
            )
        )
    } else {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
}

export default Countries
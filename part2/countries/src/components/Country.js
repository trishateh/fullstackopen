import React from 'react'

const Country =({country, weather}) => {
    return(
        <div>
            <h1>{country.name}</h1>
            <p>Capital {country.capital} </p>   
            <p>Population {country.population} </p> 
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map(language =>
                 <li key={language.name}>{language.name}</li>   
                    )}
            </ul>
            <img src={country.flag} alt={`Flag of ${country.name}`} height='100' width='100' />
            
            <h2>Weather in {country.capital} </h2>
            <p><b>Temperature:</b>{weather['current'].temperature} celcius</p>
            <img src={weather['current'].weather_icons[0]} alt='weather icon' />
            <p><b>Wind:</b> {weather['current'].wind_speed} mph direction {weather['current'].wind_dir} </p>
        </div>
    )
}

export default Country
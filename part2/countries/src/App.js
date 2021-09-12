import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [weather, setWeather] = useState([])
  const [capital, setCapital] = useState('singapore')

  const api_key = process.env.REACT_APP_API_KEY
 
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])


  useEffect(() => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
    .then(response => {
      console.log('promise fulfilled')
      setWeather(response.data)
    })
  }, [api_key, capital])

const handleFilterChange = (event) => {
  if (weather.hasOwnProperty('error')) {
    alert(`${weather.error.type}`)
  } else {
    setNewFilter(event.target.value)
  }
}


const handleCountryChange = (capital) => setCapital(capital)

const showCountry = (event) => {
  event.preventDefault()
  setNewFilter(event.target.value)
}

  return (
    <div>
     <Filter value={newFilter} onChange={handleFilterChange} />
     <Countries 
        newFilter={newFilter}
        countries={countries}
        showCountry={showCountry}
        weather = {weather}
        handleCountryChange = {handleCountryChange}
     />
    </div>
  )

}

export default App;

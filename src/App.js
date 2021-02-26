import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const url = "https://restcountries.eu/rest/v2/all"

  const [countries, setCountries] = useState([]);
  // console.log(countries);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>

      {
        countries.map(countryInfo => <Country countryInfo = {countryInfo} key={countryInfo.alpha3Code}></Country>)
      }

    </div>
  );
}

export default App;

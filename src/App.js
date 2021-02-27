import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const url = "https://restcountries.eu/rest/v2/all"

  const [countries, setCountries] = useState([]);
  // console.log(countries);
  const [addedCountry, setAddedCountry] = useState([]);
  // console.log(addedCountry);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddBtn = (added) => {
    console.log(added);
    const afterAdding = [...addedCountry, added]
    setAddedCountry(afterAdding);
  }

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h1>Country Added: {addedCountry.length}</h1>

      {
        countries.map(countryInfo => <Country countryInfo={countryInfo} handleAddBtn={handleAddBtn} key={countryInfo.alpha3Code}></Country>)
      }

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const url = "https://restcountries.eu/rest/v2/all"
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div className="App">
      <h1>CountryLoaded:{countries.length}</h1>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

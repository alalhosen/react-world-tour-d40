import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    // fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited Countries</h3>
        <ul>

        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  ); 
};

export default Countries;

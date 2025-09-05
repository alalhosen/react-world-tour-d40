import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);

useEffect(()=>{
    // fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders')
    .then(res => res.json())
    .then(data => setCountries(data));
}, [])



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;
import { useState } from "react";
import "./Countey.css";

// const Country = ({country}) => {
// const {name, flags, population, area, language} = country
//     return (
//         <div className='country'>
//             <h2>Name: {name?.common}</h2>
//            <img src={flags.png} alt="" />
//            <p>Population: {population}</p>
//            <p>Area: {area}</p>
//            <p>Language: {firstLanguage}</p>
//         </div>
//     );
// };

// export default Country;

const Country = ({ country }) => {
  const { name, flags, population, area, languages, capital, tid,} =
    country;

  // first language বের করা
  const firstLanguage = languages ? Object.values(languages)[0] : "N/A";

const [visited, setVisited] = useState(false);
const handleVisited = () =>{
  setVisited(!visited);
}

  return (
    <div className="country">
      <h2>Name : {name?.common}</h2>
      <p>Language : {firstLanguage}</p>
      <p>Capital : {capital}</p>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Tid : {tid}</p>
      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ?'I have visited this country':'I want to visit.'}
    </div>
  );
};

export default Country;

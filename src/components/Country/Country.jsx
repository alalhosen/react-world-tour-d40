import './Countey.css'


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
  const { name, flags, population, area, languages } = country;

  // first language বের করা
  const firstLanguage = languages ? Object.values(languages)[0] : "N/A";

  return (
    <div className="country">
      <h2>Name: {name?.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Language: {firstLanguage}</p>
    </div>
  );
};

export default Country;

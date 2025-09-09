import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  // const {country, handleVisitedCountry,handleVisitedFlags}
  return (
    <div>
      <h2>Country Detail</h2>
      <br />
      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;

import React, { useState, useEffect } from "react";

const Nationality = ({ setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <select className="select" onChange={handleChange}>
      <option hidden> Select (optional) </option>
      {countries.map((country) => (
        <option>{country.name}</option>
      ))}
    </select>
  );
};

export default Nationality;

import React, { useState, useEffect } from "react";

const Nationality = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      console.log(data);
      setCountries(data);
    };
    fetchCountries();
  }, []);
  return (
    <div>
      <select>
        {countries.map((country) => (
          <option>{country.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Nationality;

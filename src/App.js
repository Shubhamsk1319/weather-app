// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=aac86e38c6df410e6010639de4a0a13f`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    }
    fetchApi();
  }, [search])
  return (
    <>
      <div className="main">
        <input type="search" defaultValue="" onChange={(event) => { setSearch(event.target.value) }} value={search}/>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div className="info">
            <h2><i className="fa-solid fa-street-view" style={{ color: "white", marginRight: "0.8rem" }}></i>{search}</h2>
            <h3>{city.temp}°C</h3>
            <h4>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h4>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
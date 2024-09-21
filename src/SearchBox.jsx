import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "58b12d2dd377cc62aa6a60c2d51086bb";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        Weather: jsonResponse.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      // console.log(city);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <h2>Search for the weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="br"
        /> &nbsp;
        <Button variant="contained" type="submit" className="SearchIcon">
            <SearchIcon />
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}

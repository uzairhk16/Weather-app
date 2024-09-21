import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 32.71,
    humidity: 70,
    temp: 28.99,
    tempMax: 28.99,
    tempMin: 28.99,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
      <div>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
  );
}

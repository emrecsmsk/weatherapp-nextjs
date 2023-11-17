"use client"

import { useEffect } from "react";
import SearchBar from "./components/SearchBar"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store"
import WeatherReducer from "./redux/reducers/WeatherReducer";
import CurrentWeather from "./components/CurrentWeather";
import TodaysForecast from "./components/TodaysForecast";
import AirConditions from "./components/AirConditions";
import Forecast from "./components/Forecast";

const Home = () => {

  const dispatch = useDispatch<any>()
  const { weather } = useSelector((state: RootState) => state.weather)

  useEffect(() => {
    const getWeather = async () => {

      dispatch(WeatherReducer.getWeather("istanbul"))

    }

    getWeather()
  }, [])


  return (
    <div className="flex lg:flex-row flex-col m-5 gap-5">
      {
        weather &&
        <>
          <div
            className="flex-1"
          >
            <SearchBar />
            <CurrentWeather
              cityName={weather.location.name}
              chanceOfRain={weather.forecast.forecastday[0].day.daily_chance_of_rain}
              temp={Math.floor(weather.current.temp_c)}
              weatherImg={"https:" + weather.current.condition.icon}
              weatherText={weather.current.condition.text}
            />
            <TodaysForecast
              forecast={weather.forecast.forecastday[0]}
            />
            <AirConditions
              realFeel={Math.floor(weather.current.feelslike_c)}
              wind={weather.current.wind_kph}
              chanceOfRain={weather.forecast.forecastday[0].day.daily_chance_of_rain}
              uv={weather.current.uv}
            />
          </div>
          <div className="flex-1">
            <Forecast
              forecast={weather.forecast}
            />
          </div>
        </>
      }
    </div >
  )
}

export default Home
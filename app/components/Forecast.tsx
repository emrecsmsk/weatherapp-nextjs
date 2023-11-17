import { Forecast } from "../models/WeatherModel"
import ForecastCard from "./ForecastCard"

interface ForecastProps {
    forecast: Forecast
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {

    const title = "7-DAY FORECAST"

    return (
        <div
            className="w-full bg-[#eaecef] rounded-3xl p-6 lg:mt-16 h-[812px]"
        >
            <h1
                className="text-sm text-[#a8adb5] font-extrabold mb-6"
            >
                {title}
            </h1>
            <ForecastCard
                day={"Today"}
                weatherImg={"https:" + forecast.forecastday[0].day.condition.icon}
                weatherText={forecast.forecastday[0].day.condition.text}
                maxTemp={Math.floor(forecast.forecastday[0].day.maxtemp_c)}
                minTemp={Math.floor(forecast.forecastday[0].day.mintemp_c)}
            />
            <ForecastCard
                day={"Today"}
                weatherImg={"https:" + forecast.forecastday[1].day.condition.icon}
                weatherText={forecast.forecastday[1].day.condition.text}
                maxTemp={Math.floor(forecast.forecastday[1].day.maxtemp_c)}
                minTemp={Math.floor(forecast.forecastday[1].day.mintemp_c)}
            />
            <ForecastCard
                day={"Today"}
                weatherImg={"https:" + forecast.forecastday[2].day.condition.icon}
                weatherText={forecast.forecastday[2].day.condition.text}
                maxTemp={Math.floor(forecast.forecastday[2].day.maxtemp_c)}
                minTemp={Math.floor(forecast.forecastday[2].day.mintemp_c)}
            />
            <p className="text-center mt-5">
                The API supports only three days, so there are no additional days.
                <br />
                .
                <br />
                .
                <br />
                .
            </p>
        </div>
    )
}

export default Forecast
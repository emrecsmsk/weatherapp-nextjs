import { Forecastday } from "../models/WeatherModel"
import TodaysForecastCard from "./TodaysForecastCard"

interface TodayForecastProps {
    forecast: Forecastday
}


const TodaysForecast: React.FC<TodayForecastProps> = ({ forecast }) => {

    const title = "TODAY'S FORECAST"

    const extractTime = (dateTimeString: string): string => {
        const dateObject = new Date(dateTimeString);
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        return formattedTime;
    };

    return (
        <div
            className="h-128 sm:h-64 w-full bg-[#eaecef] rounded-3xl p-6 mb-5"
        >
            <h1
                className="text-sm text-[#a8adb5] font-extrabold mb-6"
            >
                {title}
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
                <TodaysForecastCard
                    hour={extractTime(forecast.hour[6].time)}
                    weatherImg={"https:" + forecast.hour[6].condition.icon}
                    temp={Math.floor(forecast.hour[6].temp_c)}
                    weatherText={forecast.hour[6].condition.text} />
                <TodaysForecastCard
                    hour={extractTime(forecast.hour[9].time)}
                    weatherImg={"https:" + forecast.hour[9].condition.icon}
                    temp={Math.floor(forecast.hour[9].temp_c)}
                    weatherText={forecast.hour[9].condition.text}
                />
                <TodaysForecastCard
                    hour={extractTime(forecast.hour[12].time)}
                    weatherImg={"https:" + forecast.hour[12].condition.icon}
                    temp={Math.floor(forecast.hour[12].temp_c)}
                    weatherText={forecast.hour[12].condition.text}
                />
                <TodaysForecastCard
                    hour={extractTime(forecast.hour[15].time)}
                    weatherImg={"https:" + forecast.hour[15].condition.icon}
                    temp={Math.floor(forecast.hour[15].temp_c)}
                    weatherText={forecast.hour[15].condition.text}
                />
                <TodaysForecastCard
                    hour={extractTime(forecast.hour[18].time)}
                    weatherImg={"https:" + forecast.hour[18].condition.icon}
                    temp={Math.floor(forecast.hour[18].temp_c)}
                    weatherText={forecast.hour[18].condition.text}
                />
                <TodaysForecastCard
                    hour={extractTime(forecast.hour[21].time)}
                    weatherImg={"https:" + forecast.hour[21].condition.icon}
                    temp={Math.floor(forecast.hour[21].temp_c)}
                    weatherText={forecast.hour[21].condition.text}
                />
            </div>
        </div>
    )
}

export default TodaysForecast
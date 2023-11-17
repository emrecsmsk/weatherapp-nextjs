import Image from "next/image"

interface CurrentWeatherProps {
    cityName: string,
    chanceOfRain: number,
    temp: number,
    weatherImg: string,
    weatherText: string
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ cityName, chanceOfRain, temp, weatherImg, weatherText }) => {
    return (
        <div className="flex flex-row h-64 items-center mt-10 ml-10">
            <div
                className="flex-1 h-64"
            >
                <h2
                    className="text-4xl font-extrabold mb-3"
                >
                    {cityName}
                </h2>
                <h3 className="text-[#a8adb5] font-extrabold mb-12">
                    Chance of rain: {chanceOfRain}%
                </h3>
                <h1
                    className="text-6xl font-extrabold mb-3"
                >
                    {temp}°
                </h1>
            </div>
            <div className="h-64 flex items-center sm:mr-12">
                <Image 
                className=""
                height={150}
                width={150}
                src={weatherImg}
                alt={weatherText} />
            </div>
        </div>
    )
}

export default CurrentWeather
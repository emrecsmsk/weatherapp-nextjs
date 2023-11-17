import Image from "next/image"

interface ForecastCardProps {
    day: string
    weatherImg: string,
    weatherText: string
    maxTemp: number,
    minTemp: number
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, weatherImg, weatherText, maxTemp, minTemp }) => {
    return (
        <div
            className="flex flex-row items-center justify-between h-20"
        >
            <p
                className="text-md text-[#a8adb5] font-bold"
            >
                {day}
            </p>
            <div
                className="flex-1 flex flex-row items-center justify-center"
            >
                <Image
                    height={50}
                    width={50}
                    src={weatherImg}
                    alt={weatherText} />
                <p
                    className="text-md font-bold"
                >
                    {weatherText}
                </p>
            </div>
            <p
                className="text-md text-black font-bold"
            >
                {
                    maxTemp
                }
            </p>
            <p
                className="text-md text-[#a8adb5] font-bold"
            >
                /
                {
                    minTemp
                }
            </p>
        </div>
    )
}

export default ForecastCard
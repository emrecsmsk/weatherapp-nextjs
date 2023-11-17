import Image from "next/image"

interface TodaysForecastCardProps {
    hour: string,
    weatherImg: string,
    weatherText: string
    temp: number,
}

const TodaysForecastCard: React.FC<TodaysForecastCardProps> = ({ hour, weatherImg, weatherText, temp }) => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <p
                className="text-md text-[#a8adb5] font-bold"
            >
                {hour}
            </p>
            <Image
                height={50}
                width={50}
                src={weatherImg}
                alt={weatherText} />
            <p
                className="text-3xl font-bold"
            >
                {temp}°
            </p>
        </div>

    )
}

export default TodaysForecastCard
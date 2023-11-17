import { FaThermometerHalf, FaWind, FaSun } from "react-icons/fa"
import { MdWaterDrop } from "react-icons/md"

interface AirConditionsProps {
    realFeel: number,
    wind: number,
    chanceOfRain: number,
    uv: number
}

const AirConditions: React.FC<AirConditionsProps> = ({ realFeel, wind, chanceOfRain, uv }) => {

    const title = "AIR CONDITIONS"

    return (
        <div
            className="h-128 sm:h-64 w-full bg-[#eaecef] rounded-3xl p-6"
        >
            <h1
                className="text-sm text-[#a8adb5] font-extrabold mb-6"
            >
                {title}
            </h1>
            <div
                className="grid grid-cols-2 gap-5"
            >
                <div className="flex flex-row">
                    <FaThermometerHalf
                        className="text-[#a8adb5] h-6 mr-3"
                        size={20}
                    />
                    <div>
                        <p
                            className="text-lg text-[#a8adb5] font-bold"
                        >
                            Real Feel
                        </p>
                        <p
                            className="text-4xl font-bold"
                        >
                            {realFeel}°
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <FaWind
                        className="text-[#a8adb5] h-6 mr-3"
                        size={20}
                    />
                    <div>
                        <p
                            className="text-lg text-[#a8adb5] font-bold"
                        >
                            Wind
                        </p>
                        <p
                            className="text-4xl font-bold"
                        >
                            {wind} km/h
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <MdWaterDrop
                        className="text-[#a8adb5] h-6 mr-3"
                        size={20}
                    />
                    <div>
                        <p
                            className="text-lg text-[#a8adb5] font-bold"
                        >
                            Chance of rain
                        </p>
                        <p
                            className="text-4xl font-bold"
                        >
                            {chanceOfRain}%
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <FaSun
                        className="text-[#a8adb5] h-6 mr-3"
                        size={20}
                    />
                    <div>
                        <p
                            className="text-lg text-[#a8adb5] font-bold"
                        >
                            UV Index
                        </p>
                        <p
                            className="text-4xl font-bold"
                        >
                            {uv}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirConditions
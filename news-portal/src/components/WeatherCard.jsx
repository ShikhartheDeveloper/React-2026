import { MapPin, Cloud } from "lucide-react"
import { useContext } from "react"
import WeatherContext from "../context/weather/WeatherContext"



const WeatherCard = () => {

    const { weatherData } = useContext(WeatherContext)



    return (
        <div className="lg:col-span-1 h-fit">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 space-y-4 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-sm flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> {weatherData.city}
                            </p>
                            <p className="text-4xl font-bold text-cyan-400 mt-1">{weatherData.temp}°</p>
                        </div>

                    </div>
                    <p className="text-slate-300">{weatherData.condition}</p>
                </div>
            </div>
        </div>

    )
}

export default WeatherCard

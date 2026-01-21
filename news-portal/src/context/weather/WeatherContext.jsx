import { createContext, useReducer } from "react";
import { WeatherReducer } from "./WeatherReducer";

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {

    const initialState = {
        weatherData: {
  "location": {
    "name": "Indore",
    "region": "Madhya Pradesh",
    "country": "India",
    "lat": 22.7167,
    "lon": 75.8333,
    "tz_id": "Asia/Kolkata",
    "localtime_epoch": 1768550488,
    "localtime": "2026-01-16 13:31"
  },
  "current": {
    "last_updated_epoch": 1768550400,
    "last_updated": "2026-01-16 13:30",
    "temp_c": 27.3,
    "temp_f": 81.1,
    "is_day": 1,
    "condition": {
      "text": "Sunny",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
      "code": 1000
    },
    "wind_mph": 2.7,
    "wind_kph": 4.3,
    "wind_degree": 161,
    "wind_dir": "SSE",
    "pressure_mb": 1018,
    "pressure_in": 30.06,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 26,
    "cloud": 0,
    "feelslike_c": 25.5,
    "feelslike_f": 77.8,
    "windchill_c": 26.9,
    "windchill_f": 80.5,
    "heatindex_c": 25.2,
    "heatindex_f": 77.3,
    "dewpoint_c": 1.6,
    "dewpoint_f": 34.8,
    "vis_km": 6,
    "vis_miles": 3,
    "uv": 6.1,
    "gust_mph": 3.1,
    "gust_kph": 5,
    "air_quality": {
      "co": 1338.85,
      "no2": 19.55,
      "o3": 52,
      "so2": 11.35,
      "pm2_5": 59.75,
      "pm10": 61.15,
      "us-epa-index": 3,
      "gb-defra-index": 8
    }
  }
}
    }   


    const [state, dispatch] = useReducer(WeatherReducer, initialState)


    return (
        <WeatherContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WeatherContext.Provider>
    )


}


export default WeatherContext
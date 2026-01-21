import { useContext, useEffect, useState } from "react"
import SearchSection from "../components/SearchSection"
import NewsCategory from "../components/NewsCategory"
import WeatherCard from "../components/WeatherCard"
import NewsCard from "../components/NewsCard"
import NewsContext from "../context/news/NewsContext"
import { fetchNews } from "../context/news/NewsService"
import { fetchWeather } from "../context/weather/WeatherService"



export default function Home() {

    const [isLoading, setIsLoading] = useState(false)

    const { newsData, dispatch } = useContext(NewsContext)

    const getNews = async(topic) =>{
        const data =  await fetchNews(topic) 
       dispatch({
        type : "FETCH_NEWS",
        payload : data
       })
    }

    const getWeather = async(city) =>{
        const data2 =  await fetchWeather(city) 
       dispatch({
        type : "FETCH_WEATHER",
        payload : data2
       })
    }

    useEffect(() =>{
       getNews("indore")
       getWeather("indore")
       
    }, [])



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 dark">
            {/* Header Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-8">
                {/* Search Section */}
                <SearchSection />

                {/* Category Row */}
                <NewsCategory />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Weather Card - Left */}
                    <WeatherCard />
                    {/* News Cards - Right */}
                    <div className="lg:col-span-3 space-y-4">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-96">
                                <div className="flex flex-col items-center gap-4">
                                    {/* Animated Spinner */}
                                    <div className="relative w-16 h-16">
                                        <div className="absolute inset-0 rounded-full border-2 border-slate-700/50" />
                                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-500 border-r-cyan-400 animate-spin" />
                                    </div>
                                    <p className="text-slate-400 text-sm">Scanning the nexus...</p>
                                </div>
                            </div>
                        ) : (
                            !newsData ? <><h1 className="text-center">Loading...</h1></>  :  newsData.map((article,index) => (
                                <NewsCard key={index} article={article} />
                            )
                         
                        
                        )
                        )}
                    </div>
                </div>
            </div>

            {/* Ambient Bottom Glow */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-orange-500/3 to-transparent pointer-events-none" />
        </div>
    )
}

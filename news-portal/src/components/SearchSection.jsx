import { Search } from "lucide-react"
import { useContext, useState } from "react"
import NewsContext from "../context/news/NewsContext"
import { fetchNews } from "../context/news/NewsService"

const SearchSection = () => {

    const {dispatch} = useContext(NewsContext)

    const [topic , setTopic] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const data = await fetchNews(topic)

        dispatch({
            type: "FETCH_NEWS",
            payload  : data
        })
    }



    return (
        <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-400 bg-clip-text text-transparent mb-8">
                NEXUS
            </h1>

            {/* Search Bar */}
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-2xl mx-auto">
                <div className="flex-1 relative group">
                    <input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                        type="text"
                        placeholder="Search news topics..."
                        className="w-full px-6 py-3 rounded-full bg-slate-800/50 border border-orange-400/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 backdrop-blur-sm"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-cyan-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
                </div>
                <button
                type="submit"

                    className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-orange-500/50 hover:scale-105 active:scale-95"
                >
                    <Search className="w-5 h-5" />
                    <span className="hidden sm:inline">Search</span>
                </button>
            </form>
        </div>
    )
}

export default SearchSection

import React, { useContext } from 'react'
import { fetchNews } from '../context/news/NewsService'
import NewsContext from '../context/news/NewsContext'

const CATEGORIES = ["Tech", "AI", "Business", "Sports", "Gaming", "Crypto", "gaming","Current Affairs"]




const NewsCategory = () => {

     const {dispatch} = useContext(NewsContext)

    const getNews = async(topic) =>{

        const data = await fetchNews(topic)

        dispatch({
            type: "FETCH_NEWS",
            payload  : data
        })
    }
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mx-4">
            <div className="flex gap-2 flex-nowrap px-4 md:px-0">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => getNews(category)}
                        className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${"tech" === category
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50 scale-105"
                            : "bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-cyan-400/50 hover:text-cyan-300"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default NewsCategory

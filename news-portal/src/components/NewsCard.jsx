import { Calendar } from "lucide-react"

const NewsCard = ({ article }) => {
    return (
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-orange-400/10 rounded-xl overflow-hidden hover:border-orange-400/30 transition-all duration-300 flex flex-col sm:flex-row h-full">
                {/* Image */}
                <img
                    src={article.urlToImage || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full sm:w-48 h-40 sm:h-auto object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300"
                />

                

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-slate-400 text-sm sm:text-base line-clamp-2">{article.description}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                        <p className="text-xs sm:text-sm font-semibold text-cyan-400/80">{article.author}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {article.time}
                        </p>
                    </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
        </div>
    )
}

export default NewsCard

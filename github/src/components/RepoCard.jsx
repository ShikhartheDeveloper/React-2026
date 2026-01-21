"use client"

import { Star, GitFork } from "lucide-react"



const LANGUAGE_COLORS = {
    JavaScript: "bg-yellow-500/20 text-yellow-300",
    TypeScript: "bg-blue-500/20 text-blue-300",
    Python: "bg-green-500/20 text-green-300",
    Rust: "bg-orange-500/20 text-orange-300",
    "C++": "bg-pink-500/20 text-pink-300",
    Go: "bg-cyan-500/20 text-cyan-300",
}

export default function RepoCard({ repo }) {
    const colorClass = LANGUAGE_COLORS[repo.language] || "bg-gray-500/20 text-gray-300"

    return (
        <button className="w-full text-left group">
            <div className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-cyan-500/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/0">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <h4 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">{repo.name}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap ${colorClass}`}>
                        {repo.language}
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300 font-mono">{repo.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GitFork className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300 font-mono">{repo.forks.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </button>
    )
}

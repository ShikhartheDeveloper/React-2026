

import { ArrowRight } from "lucide-react"


export default function UserCard({ user, onSelect }) {
    return (
        <button onClick={onSelect} className="group text-left">
            <div className="relative p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-cyan-500/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                {/* Avatar */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                        <img
                            src={user.avatar_url || "/placeholder.svg"}
                            alt={user.login}
                            className="w-16 h-16 rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
                        />
                        <div className="absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors" />
                    </div>
                    <div className="flex-1 pt-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">@{user.login}</h3>
                        <p className="text-xs text-gray-400 font-mono">developer</p>
                    </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">{user.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-t border-cyan-500/10">
                    <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">
                            {user.followers > 1000 ? `${(user.followers / 1000).toFixed(1)}K` : user.followers}
                        </div>
                        <div className="text-xs text-gray-500">Followers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{user.following}</div>
                        <div className="text-xs text-gray-500">Following</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-pink-400">{user.public_repos}</div>
                        <div className="text-xs text-gray-500">Repos</div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm group-hover:text-cyan-300 transition-colors">
                    View Profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </button>
    )
}

import { ArrowLeft, Github, MapPin, Zap, Users, Star, LinkIcon } from "lucide-react"
import RepoCard from "../components/RepoCard"

const DUMMY_REPOS = [
    {
        name: "awesome-framework",
        stars: 45000,
        forks: 12000,
        language: "JavaScript",
    },
    {
        name: "devtools-pro",
        stars: 32000,
        forks: 8500,
        language: "TypeScript",
    },
    {
        name: "cli-ninja",
        stars: 28000,
        forks: 6200,
        language: "Rust",
    },
    {
        name: "web-engine",
        stars: 55000,
        forks: 15000,
        language: "C++",
    },
    {
        name: "data-utils",
        stars: 18000,
        forks: 4100,
        language: "Python",
    },
    {
        name: "api-gateway",
        stars: 22000,
        forks: 5800,
        language: "Go",
    },
]

export default function ProfilePage({ user, onBack }) {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Background effect */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="flex items-center justify-between px-6 py-6 border-b border-cyan-500/20">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-mono">Back</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <Github className="w-6 h-6 text-cyan-400" />
                        <h1 className="text-xl font-bold tracking-wider">PROFILE</h1>
                    </div>
                    <div className="text-xs text-cyan-400/60 font-mono">@{user.login}</div>
                </header>

                {/* Profile Content */}
                <main className="px-6 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Panel */}
                            <div className="lg:col-span-1 space-y-6">
                                {/* Avatar Card */}
                                <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-cyan-500/20 backdrop-blur-sm text-center">
                                    <div className="mb-6">
                                        <div className="relative w-32 h-32 mx-auto mb-4">
                                            <img
                                                src={user.avatar_url || "/placeholder.svg"}
                                                alt={user.login}
                                                className="w-full h-full rounded-full border-4 border-cyan-500/30"
                                            />
                                            <div className="absolute inset-0 rounded-full ring-2 ring-cyan-500/20" />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-cyan-300 mb-1">{user.login}</h2>
                                    <p className="text-gray-400 text-sm mb-4">{user.bio}</p>

                                    {/* Social Stats */}
                                    <div className="space-y-3 mb-6 py-4 border-t border-b border-cyan-500/10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 flex items-center gap-2">
                                                <Users className="w-4 h-4 text-cyan-400" />
                                                Followers
                                            </span>
                                            <span className="text-cyan-400 font-bold">{user.followers.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 flex items-center gap-2">
                                                <Users className="w-4 h-4 text-purple-400" />
                                                Following
                                            </span>
                                            <span className="text-purple-400 font-bold">{user.following}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 flex items-center gap-2">
                                                <Star className="w-4 h-4 text-pink-400" />
                                                Repos
                                            </span>
                                            <span className="text-pink-400 font-bold">{user.public_repos}</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={`https://github.com/${user.login}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95"
                                    >
                                        View on GitHub
                                    </a>
                                </div>

                                {/* Info Cards */}
                                {user.location && (
                                    <div className="p-4 rounded-lg bg-white/5 border border-cyan-500/20 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 text-cyan-400 mb-2">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-xs font-mono">Location</span>
                                        </div>
                                        <p className="text-white font-semibold">{user.location}</p>
                                    </div>
                                )}

                                {user.company && (
                                    <div className="p-4 rounded-lg bg-white/5 border border-cyan-500/20 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 text-purple-400 mb-2">
                                            <Zap className="w-4 h-4" />
                                            <span className="text-xs font-mono">Company</span>
                                        </div>
                                        <p className="text-white font-semibold">{user.company}</p>
                                    </div>
                                )}

                                {user.blog && (
                                    <div className="p-4 rounded-lg bg-white/5 border border-cyan-500/20 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 text-pink-400 mb-2">
                                            <LinkIcon className="w-4 h-4" />
                                            <span className="text-xs font-mono">Blog</span>
                                        </div>
                                        <a
                                            href={`https://${user.blog}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:text-cyan-300 text-sm break-all"
                                        >
                                            {user.blog}
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Right Panel - Repositories */}
                            <div className="lg:col-span-2">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-cyan-300 mb-2">Featured Repositories</h3>
                                    <p className="text-gray-400 text-sm">Top {DUMMY_REPOS.length} repositories by stars</p>
                                </div>

                                <div className="space-y-4">
                                    {DUMMY_REPOS.map((repo, index) => (
                                        <RepoCard key={index} repo={repo} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

import { Github, Search } from "lucide-react"
import { useState } from "react"
import SearchPage from "./search"

export default function Home() {
    const [isSearching, setIsSearching] = useState(false)

    if (isSearching) {
        return <SearchPage onBack={() => setIsSearching(false)} />
    }

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Animated background grid effect */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-cyan-500/10 ring-1 ring-cyan-500/30">
                        <Github className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h1 className="text-xl font-bold tracking-wider">GITHUB.FINDER</h1>
                </div>
                <div className="text-xs text-cyan-400/60 font-mono">v2026.01</div>
            </header>

            {/* Hero Section */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 py-20">
                <div className="max-w-2xl w-full text-center space-y-8">
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                            Find Any Developer
                            <br />
                            on GitHub
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
                            Search users, explore repositories, and analyze profiles in style
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8">
                        <button
                            onClick={() => setIsSearching(true)}
                            className="group relative px-8 py-4 text-lg font-bold tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
                        >
                            <span className="flex items-center gap-2 justify-center">
                                <Search className="w-5 h-5" />
                                Search GitHub Users
                            </span>
                        </button>
                    </div>

                    {/* Floating stats */}
                    <div className="pt-12 grid grid-cols-3 gap-4 text-center">
                        {[
                            { label: "Developers", value: "100M+" },
                            { label: "Repositories", value: "500M+" },
                            { label: "Countries", value: "195" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="p-4 rounded-lg bg-white/5 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
                            >
                                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

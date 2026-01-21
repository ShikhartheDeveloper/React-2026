import { ArrowLeft, Github, SearchIcon } from "lucide-react"
import { useState } from "react"

import ProfilePage from "./profile"
import UserCard from "../components/UserCard"

const DUMMY_USERS = [
    {
        id: 1,
        login: "torvalds",
        avatar_url: "https://avatars.githubusercontent.com/u/1024?v=4",
        bio: "Creator of Linux. Passionate about open source.",
        followers: 250000,
        following: 0,
        public_repos: 1,
        company: "Linux Foundation",
        blog: "",
        location: "Portland, OR",
    },
    {
        id: 2,
        login: "gvanrossum",
        avatar_url: "https://avatars.githubusercontent.com/u/35941?v=4",
        bio: "Python creator. Passionate about code quality.",
        followers: 150000,
        following: 50,
        public_repos: 100,
        company: "Microsoft",
        blog: "python.org",
        location: "San Francisco, CA",
    },
    {
        id: 3,
        login: "brendaneich",
        avatar_url: "https://avatars.githubusercontent.com/u/244185?v=4",
        bio: "JavaScript creator, co-founder of Mozilla.",
        followers: 120000,
        following: 25,
        public_repos: 150,
        company: "Brave Software",
        blog: "brendaneich.com",
        location: "San Francisco, CA",
    },
    {
        id: 4,
        login: "dhh",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        bio: "Rails creator, CTO at Basecamp. 🤙",
        followers: 100000,
        following: 40,
        public_repos: 200,
        company: "Basecamp",
        blog: "dhh.dk",
        location: "Chicago, IL",
    },
    {
        id: 5,
        login: "satoshis",
        avatar_url: "https://avatars.githubusercontent.com/u/1000000?v=4",
        bio: "Blockchain visionary. Early pioneer.",
        followers: 500000,
        following: 0,
        public_repos: 50,
        company: "Bitcoin",
        blog: "",
        location: "Unknown",
    },
    {
        id: 6,
        login: "timberners-lee",
        avatar_url: "https://avatars.githubusercontent.com/u/2000000?v=4",
        bio: "World Wide Web inventor. Open web advocate.",
        followers: 200000,
        following: 30,
        public_repos: 75,
        company: "W3C",
        blog: "w3.org",
        location: "London, UK",
    },
]


export default function SearchPage({ onBack }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedUser, setSelectedUser] = useState(null)
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)

    const handleSearch = (query) => {
        setSearchQuery(query)
        if (query.trim()) {
            const filtered = DUMMY_USERS.filter(
                (user) =>
                    user.login.toLowerCase().includes(query.toLowerCase()) ||
                    user.bio.toLowerCase().includes(query.toLowerCase()),
            )
            setFilteredUsers(filtered)
        } else {
            setFilteredUsers(DUMMY_USERS)
        }
    }

    if (selectedUser) {
        return <ProfilePage user={selectedUser} onBack={() => setSelectedUser(null)} />
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Background effect */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
                        <h1 className="text-xl font-bold tracking-wider">GITHUB.FINDER</h1>
                    </div>
                    <div className="text-xs text-cyan-400/60 font-mono">SEARCH</div>
                </header>

                {/* Search Section */}
                <section className="px-6 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Search Bar */}
                        <div className="relative mb-12">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-75" />
                            <div className="relative flex items-center gap-3 px-6 py-4 rounded-lg bg-black/50 border border-cyan-500/30 backdrop-blur-sm focus-within:border-cyan-400 focus-within:shadow-lg focus-within:shadow-cyan-500/20 transition-all">
                                <SearchIcon className="w-5 h-5 text-cyan-400" />
                                <input
                                    type="text"
                                    placeholder="Search users, repos, bios..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                                />
                            </div>
                        </div>

                        {/* Results Info */}
                        <div className="mb-8 text-sm text-gray-400">
                            Found <span className="text-cyan-400 font-bold">{filteredUsers.length}</span> developers
                            {searchQuery && ` matching "${searchQuery}"`}
                        </div>

                        {/* Users Grid */}
                        {filteredUsers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredUsers.map((user) => (
                                    <UserCard key={user.id} user={user} onSelect={() => setSelectedUser(user)} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-lg">No developers found</div>
                                <div className="text-gray-500 text-sm mt-2">Try another search query</div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

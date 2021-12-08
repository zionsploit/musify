import Image from 'next/image'
import { SearchIcon } from "@heroicons/react/outline"
import { CogIcon, BellIcon } from "@heroicons/react/solid"

const Header = () => {
    return (
        <div className="px-10 pt-5 pb-5 bg-gradient-to-b from-gray-800">
            <div className="text-gray-400 flex justify-between items-center">
                <div className="flex items-center space-x-5">
                    <span className="font-semibold tracking-wide text-lg cursor-pointer hover:text-gray-500 transition-all">MUSIC</span>
                    <span className="font-semibold tracking-wide text-lg cursor-pointer hover:text-gray-500 transition-all">PODCAST</span>
                    <span className="font-semibold tracking-wide text-lg cursor-pointer hover:text-gray-500 transition-all">LIVE</span>
                </div>
                <div>
                    <div className="flex space-x-2 items-center bg-gray-800 p-3 rounded-lg w-80 border-2 border-gray-500 transition-all focus-within:border-gray-400">
                        <SearchIcon className="w-5 h-5" />
                        <input className="outline-none border-none bg-transparent text-white font-semi tracking-wider h-full w-full" placeholder="Type name to search" />
                    </div>
                </div>
                <div className="flex items-center space-x-5">
                    <span>
                        <BellIcon className="W-7 h-7 hover:text-gray-500 cursor-pointer transition-all" />
                    </span>
                    <span>
                        <CogIcon className="W-7 h-7 hover:text-gray-500 cursor-pointer transition-all" />
                    </span>
                    <div className="flex items-center space-x-1 bg-gray-600 rounded-md hover:bg-gray-700 transition-all cursor-pointer">
                        <div className="rounded-l-lg flex items-center">
                            <Image src="/assets/me.jpg" alt="Me" quality={75} width={45} height={45} className="rounded" />
                        </div>
                        <span className="font-semibold text-white px-5">John Mark</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

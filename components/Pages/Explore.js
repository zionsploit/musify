import Header from '../Header'
import { HeartIcon, PlayIcon, PlusCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, RefreshIcon, SwitchHorizontalIcon, ViewGridIcon } from '@heroicons/react/outline'

const Explore = () => {
    return (
        <div>
            <div className="relative">
                <Image src="/assets/backgroundImage.png" alt="backgroundImage" width={2000} height={450} objectFit="cover" className="relative" />
                <div className="absolute top-0 w-full backdrop-filter backdrop-blur-md h-full">
                    <Header />
                    <div className="px-20 py-5 text-white flex flex-col justify-items-start">
                        <span className="font-semibold tracking-wider text-blue-300">Trending New Hits</span>
                        <div className="flex flex-col justify-items-start space-y-2 mt-10 ml-5">
                            <span className="text-5xl font-bold tracking-wider">In My Feelings</span>
                            <span className="flex space-x-5 items-center">
                                <span className="text-lg font-bold tracking-wider">
                                    Camila Cabello
                                </span>
                                <span className="font-semibold tracking-wider text-gray-400">
                                    63 Million Plays
                                </span>
                            </span>
                            <div className="flex justify-items-start items-center space-x-5">
                                <button className="bg-blue-500 px-5 py-2 rounded-2xl text-white font-bold tracking-wide hover:bg-blue-600 transition-all">Listen Now</button>
                                <button className="border-2 border-white p-2 rounded-full hover:border-gray-500 transition-all">
                                    <HeartIcon className="w-5 h-5 text-blue-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ bottom: '-33em', left: "20em" }} className="absolute">
                    <div className="flex justify-center space-x-3 items-center">
                        <div className="flex flex-col justify-start items-start">
                            <div style={{ width: "40em" }} className="h-max p-4 bg-gray-700">
                                <div className="flex flex-col justify-items-start space-y-5">
                                    <span className="flex justify-between space-x-5 ml-5">
                                        <span className="font-semibold text-white">Top Artists</span>
                                        <span className="font-semibold text-gray-400 cursor-pointer hover:text-gray-300 transition-all">See All</span>
                                    </span>
                                    <div className="grid grid-cols-6 gap-2 pt-2 pb-3">
                                        <div className="flex flex-col items-center">
                                            <Image src="/assets/travis_scott.png" alt="travis" layout="intrinsic" quality={70} height={50} width={55} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                            <span className="font-medium text-gray-300 text-xs">Travis Scott</span>
                                            <span className="text-gray-500 text-xs">44M Plays</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image src="/assets/billie_eilish.png" alt="billie" layout="intrinsic" quality={70} height={50} width={55} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                            <span className="font-medium text-gray-300 text-xs">Billie Eillish</span>
                                            <span className="text-gray-500 text-xs">203M Plays</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image src="/assets/ava_max.jpg" alt="AvaMax" layout="intrinsic" quality={70} height={50} width={55} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                            <span className="font-medium text-gray-300 text-xs">Ava Max</span>
                                            <span className="text-gray-500 text-xs">63M Plays</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image src="/assets/kanye.png" alt="Kanye" layout="intrinsic" quality={70} height={50} width={55} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                            <span className="font-medium text-gray-300 text-xs">Kanye</span>
                                            <span className="text-gray-500 text-xs">15M Plays</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image src="/assets/nicki_minaj.jpg" alt="Nickie Minaj" layout="intrinsic" quality={70} height={50} width={55} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                            <span className="font-medium text-gray-300 text-xs">Nickie Minaj</span>
                                            <span className="text-gray-500 text-xs">180M Plays</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image src="/assets/Starboy.jpg" alt="Star Boy" layout="intrinsic" quality={70} height={50} width={55} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                            <span className="font-medium text-gray-300 text-xs">Star Boy</span>
                                            <span className="text-gray-500 text-xs">100M Plays</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-3 flex items-start justify-between">
                                <div className="bg-gray-700 h-max w-max px-2">
                                    <span className="flex justify-between space-x-5 mt-2">
                                        <span className="font-semibold text-white">Genres</span>
                                        <span className="font-semibold text-gray-400 cursor-pointer hover:text-gray-300 transition-all">See All</span>
                                    </span>
                                    <div className="flex flex-col space-y-2 py-2">
                                        <button style={{ backgroundColor: "#ef476f" }} className="text-gray-200 rounded-lg font-bold text-sm tracking-wide shadow py-3 px-2">Dance Beat</button>
                                        <button style={{ backgroundColor: "#ffd166" }} className="text-gray-800 rounded-lg font-bold text-sm tracking-wide shadow py-3 px-2">Electro Pop</button>
                                        <button style={{ backgroundColor: "#06d6a0" }} className="text-gray-800 rounded-lg font-bold text-sm tracking-wide shadow py-3 px-2">Alternative Indle</button>
                                        <button style={{ backgroundColor: "#118ab2" }} className="text-gray-200 rounded-lg font-bold text-sm tracking-wide shadow py-3 px-2">Hip Hop</button>
                                        <button style={{ backgroundColor: "#073b4c" }} className="text-gray-200 rounded-lg font-bold text-sm tracking-wide shadow py-3 px-2">Classical Period</button>
                                        <button style={{ backgroundColor: "#036666" }} className="text-gray-200 rounded-lg font-bold text-sm tracking-wide shadow py-3 px-2">Hip Hop Rap</button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-items-start">
                                    <div style={{ width: "30em" }} className="bg-gray-700 h-max px-2">
                                        <span className="flex justify-between space-x-5 mt-3 px-8">
                                            <span className="font-semibold text-white">Top Charts</span>
                                            <span className="font-semibold text-gray-400 cursor-pointer hover:text-gray-300 transition-all">See All</span>
                                        </span>
                                        <div style={{ margin: "1.35em 0" }} className="flex flex-col justify-items-start px-5 space-y-3 mt-3">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200 font-medium">01</span>
                                                    <Image src="/assets/CamillaCard.jpg" alt="camillaCard" layout="intrinsic" quality={70} height={45} width={50} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                                    <span className="flex flex-col items-start">
                                                        <span className="text-gray-200 font-bold text-base">Havana</span>
                                                        <span className="text-gray-400 text-sm">Camilla Cabello</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200">3:45</span>
                                                    <PlayIcon className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-600 transition-all" />
                                                    <PlusCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500 transition-all" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200 font-medium">02</span>
                                                    <Image src="/assets/KanyeCard.jpg" alt="KanyeCard" layout="intrinsic" quality={70} height={45} width={50} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                                    <span className="flex flex-col items-start">
                                                        <span className="text-gray-200 font-bold text-base">Jesus is King</span>
                                                        <span className="text-gray-400 text-sm">Kanye West</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200">3:45</span>
                                                    <PlayIcon className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-600 transition-all" />
                                                    <PlusCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500 transition-all" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200 font-medium">03</span>
                                                    <Image src="/assets/Chainsmokercard.jpg" alt="Chainsmokercard" layout="intrinsic" quality={70} height={45} width={50} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                                    <span className="flex flex-col items-start">
                                                        <span className="text-gray-200 font-bold text-base">Closer</span>
                                                        <span className="text-gray-400 text-sm">The Chainsmokers</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200">3:45</span>
                                                    <PlayIcon className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-600 transition-all" />
                                                    <PlusCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500 transition-all" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200 font-medium">04</span>
                                                    <Image src="/assets/MajorCard.jpg" alt="MajorCard" layout="intrinsic" quality={70} height={45} width={50} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                                    <span className="flex flex-col items-start">
                                                        <span className="text-gray-200 font-bold text-base">Lean On</span>
                                                        <span className="text-gray-400 text-sm">Major Lazer ft. DJ Snake</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200">3:45</span>
                                                    <PlayIcon className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-600 transition-all" />
                                                    <PlusCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500 transition-all" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200 font-medium">05</span>
                                                    <Image src="/assets/avamaxCard.jpg" alt="avamaxCard" layout="intrinsic" quality={70} height={45} width={50} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                                    <span className="flex flex-col items-start">
                                                        <span className="text-gray-200 font-bold text-base">Everytime I Cry</span>
                                                        <span className="text-gray-400 text-sm">Ava Max</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-200">3:45</span>
                                                    <PlayIcon className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-600 transition-all" />
                                                    <PlusCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500 transition-all" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "25em" }} className="h-max bg-gray-700">
                            <div className="flex flex-col items-center px-5">
                                <span className="flex justify-between items-center w-full mt-3">
                                    <span className="font-semibold text-gray-300 text-base">
                                        Player
                                    </span>
                                    <span>
                                        <ViewGridIcon className="text-gray-400 w-5 h-5 hover:text-gray-500 transition-all cursor-pointer" />
                                    </span>
                                </span>
                                <div className="py-10 flex flex-col items-center justify-center">
                                    <Image src="/assets/travis_scott.png" alt="travis" layout="intrinsic" quality={70} height={200} width={250} objectFit="cover" objectPosition="center" className="rounded-lg" />
                                    <span className="flex flex-col justify-center items-center">
                                        <span className="text-2xl tracking-wide font-bold text-gray-200 antialiased">Butterfly Effect</span>
                                        <span className="text-lg font-semibold tracking-wide text-gray-300 antialiased">Travis Scott</span>
                                        <span className="text-sm font-medium tracking-wide text-gray-500 antialiased">Best of 2021</span>
                                    </span>
                                    <div className="w-full flex justify-between items-center mt-5">
                                        <span className="text-gray-400 text-xs">2:45</span>
                                        <div style={{ width: "10em" }} className="rounded-full h-1 relative overflow-hidden">
                                            <div className="w-full h-full bg-gray-600 absolute"></div>
                                            <div className="transition-all ease-out h-full bg-gray-200 relative" style={{ width: "80%" }}></div>
                                        </div>
                                        <span className="text-gray-400 text-xs">1:04</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-blue-500 rounded-t-lg">
                                <div className="w-full flex justify-between items-center px-20 py-2">
                                    <SwitchHorizontalIcon className="w-5 h-5 text-gray-200 hover:text-gray-300 transition-all cursor-pointer" />
                                    <ChevronLeftIcon className="w-5 h-5 text-gray-200 hover:text-gray-300 transition-all cursor-pointer" />
                                    <PlayIcon className="w-10 h-10 text-gray-200 hover:text-gray-300 transition-all cursor-pointer" />
                                    <ChevronRightIcon className="w-5 h-5 text-gray-200 hover:text-gray-300 transition-all cursor-pointer" />
                                    <RefreshIcon className="w-5 h-5 text-gray-200 hover:text-gray-300 transition-all cursor-pointer" />
                                </div>
                                <div style={{ padding: "9px 0" }} className="flex flex-col items-center">
                                    <ChevronUpIcon className="w-5 h-5 text-gray-200" />
                                    <span className="font-medium text-gray-200 text-xs">LYRICS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Explore


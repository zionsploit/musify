import { CubeTransparentIcon } from '@heroicons/react/outline';
import { InformationCircleIcon, MusicNoteIcon, StopIcon, MicrophoneIcon, RefreshIcon, ClipboardListIcon, HeartIcon, FolderIcon, DocumentAddIcon, PlayIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageSelected } from '../pages/features/reducers/pageSelect';

const Sidebar = () => {
    const [isSelect, setIsSelect] = useState('explore')

    useDispatch()(
        pageSelected(isSelect)
    )

    return (
        <div>
            <div className="bg-gray-900 h-screen w-60">
                <div className="pt-10 space-x-5 flex items-center w-full ml-14">
                    <CubeTransparentIcon className="w-5 h-5 text-white" />
                    <span className="text-white prose prose-xl">Musify</span>
                </div>
                <div className="mt-14">
                    <span className="prose text-gray-400 prose-sm tracking-wide px-12">MENU</span>
                    <div className="mt-5 flex flex-col items-center justify-start w-full space-y-1">
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'explore' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('explore')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <InformationCircleIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Explore</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'genres' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('genres')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <MusicNoteIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Genres</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'albumsMenu' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('albumsMenu')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <StopIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Albums</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'artists' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('artists')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <MicrophoneIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Artists</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <span className="prose text-gray-400 prose-sm tracking-wide px-12">LIBRARY</span>
                    <div className="mt-5 flex flex-col items-center justify-start w-full space-y-1">
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'recent' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('recent')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <RefreshIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Recent</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'albumsLibrary' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('albumsLibrary')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <ClipboardListIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Albums</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'favorite' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('favorite')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <HeartIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Favorite</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'local' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('local')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <FolderIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Local</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <span className="prose text-gray-400 prose-sm tracking-wide px-12">PLAYLIST</span>
                    <div className="mt-5 flex flex-col items-center justify-start w-full space-y-1">
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'createNew' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('createNew')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <DocumentAddIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Create New</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'designFlow' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('designFlow')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <PlayIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Design Flow</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'bestOfYear' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('bestOfYear')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <PlayIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Best of 2021</span>
                            </div>
                        </div>
                        <div className={`w-full cursor-pointer transition-all h-8 ${isSelect === 'bestArtist' ? 'border-r-4 border-blue-500 text-blue-500' : 'text-white border-blue-500'}`} onClick={() => setIsSelect('bestArtist')}>
                            <div className="flex ml-8 items-center space-x-5 w-full">
                                <PlayIcon className="w-4 h-4" />
                                <span className="prose-sm tracking-wide font-bold">Nigeria James</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

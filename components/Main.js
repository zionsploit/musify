import { useSelector } from "react-redux"
import AlbumsLibrary from "./Pages/AlbumsLibrary"
import AlbumsMenu from "./Pages/AlbumsMenu"
import Artists from "./Pages/Artists"
import CreateNew from "./Pages/CreateNew"
import Explore from "./Pages/Explore"
import Favorite from "./Pages/Favorite"
import Genres from "./Pages/Genres"
import Local from "./Pages/Local"
import Recent from "./Pages/Recent"

const IsPage = ({ page }) => {
    if (page === 'explore') return <Explore />
    if (page === 'genres') return <Genres />
    if (page === 'albumsMenu') return <AlbumsMenu />
    if (page === 'artists') return <Artists />
    if (page === 'recent') return <Recent />
    if (page === 'albumsLibrary') return <AlbumsLibrary />
    if (page === 'favorite') return <Favorite />
    if (page === 'local') return <Local />
    if (page === 'createNew') return <CreateNew />
}

const Main = () => {
    const pageSelector = useSelector((state) => state.pageReducer.value)
    return (
        <div>
            <section>
                <IsPage page={pageSelector} />
            </section>
        </div>
    )
}

export default Main

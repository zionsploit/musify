import Main from "./Main"
import Sidebar from "./Sidebar"

const Layout = () => {
    return (

        <div className="flex">
            {/* SideBar */}
            <Sidebar />
            {/* Main */}
            <main style={{ width: "100%", height: "100vh" }} className="bg-gray-900">
                <Main />
            </main>
        </div>
    )
}

export default Layout

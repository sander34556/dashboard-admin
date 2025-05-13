
import { useState } from "react"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Dashboard from "../pages/Dashboard"



const Layout = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [miniSidebar, setMiniSidebar] = useState(false);



    return (
        <main>
            <Navbar setSidebarToggle={setSidebarToggle} setMiniSidebar={setMiniSidebar} miniSidebar={miniSidebar} />
            <Sidebar sidebarToggle={sidebarToggle} setMiniSidebar={setMiniSidebar} miniSidebar={miniSidebar} />

            <div className={`flex flex-col min-h-screen pt-16 ${miniSidebar ? 'sm:ml-16' : 'sm:ml-60'} `}>
                <div className="container flex-1 px-6 py-6 ">
                    <Dashboard />
                </div>
                <Footer />
            </div>

        </main>
    )
}
export default Layout
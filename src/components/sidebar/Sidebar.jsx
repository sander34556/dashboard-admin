import { useEffect } from "react";


const Sidebar = ({ sidebarToggle, miniSidebar, setMiniSidebar }) => {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setMiniSidebar(true);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <aside className={`fixed w-60 hover:sm:w-60 ${miniSidebar ? 'sm:w-16' : 'sm:w-60'} ${sidebarToggle ? 'left-0' : '-left-60'} sm:left-0 pt-16 z-10 shadow transition-all`}>
            <div className="min-h-screen bg-amber-300 ">
                Sidebar
            </div>
        </aside>
    )
}
export default Sidebar
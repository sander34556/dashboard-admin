import { useEffect } from "react";
import { itemList } from '../../utils/sidebarItem'

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
            <div className="min-h-screen bg-white py-4 px-3 group text-gray-600 text-sm">
                <ul className="">
                    {
                        itemList.map((item, index) =>
                            <li key={index} className="my-3">
                                <a href="" className="flex items-center gap-2 p-2 hover:text-blue-700 rounded">
                                    < item.icon className="min-w-6" />
                                    <span className={`capitalize max-h-6 overflow-hidden text-ellipsis mx-1 group-hover:block ${miniSidebar && !sidebarToggle ? 'hidden' : ''}`}>
                                        {item.label}
                                    </span>
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        </aside>
    )
}
export default Sidebar
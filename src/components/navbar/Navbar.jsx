import { AlignLeft, Ellipsis, Menu } from 'lucide-react'
import Logo from './Logo'
import UserIcon from './UserIcon'


const Navbar = ({ setSidebarToggle, setMiniSidebar, miniSidebar }) => {
    return (
        <header>
            <nav className="flex items-center justify-between w-full min-h-16 bg-white shadow fixed top-0 z-50">
                <div className={`flex items-center justify-between h-full px-4 sm:px-0 w-full  ${miniSidebar ? 'sm:w-16' : 'sm:w-60'} transition-all`}>
                    <AlignLeft onClick={() => { setSidebarToggle(prev => !prev) }} className='block sm:hidden cursor-pointer ' />
                    <Logo miniSidebar={miniSidebar} />
                    <Ellipsis className='block sm:hidden' />

                </div>
                <div className='hidden sm:flex items-center justify-between w-full px-4 h-full'>
                    <Menu onClick={() => { setMiniSidebar(prev => !prev) }} className='text-gray-400' />
                    <UserIcon />
                </div>
            </nav>
        </header>
    )
}
export default Navbar
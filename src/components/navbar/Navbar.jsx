import { AlignLeft, Ellipsis, Menu } from 'lucide-react'
import Logo from './Logo'
import UserIcon from './UserIcon'


const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between w-full min-h-16 bg-white shadow fixed top-0">
                <div className='flex items-center justify-between w-full h-full px-4 sm:px-0 sm:w-16 lg:w-60'>
                    <AlignLeft className='block sm:hidden' />
                    <Logo />
                    <Ellipsis className='block sm:hidden' />

                </div>
                <div className='hidden sm:flex items-center justify-between w-full px-4 h-full'>
                    <Menu className='text-gray-400' />
                    <UserIcon />
                </div>
            </nav>
        </header>
    )
}
export default Navbar
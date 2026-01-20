import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import { useState } from 'react';
import Header from './header';

function Layout() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

    return (
        <div className=' w-full h-screen flex'>
            <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
            <div className='flex-1 border border-amber-300'>
                <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
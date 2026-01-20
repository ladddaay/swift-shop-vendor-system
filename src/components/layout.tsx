import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

function Layout() {
    return (
        <div>
            <Navbar /> This NavigationBar component is a static part of the layout
            <div>
                <Outlet />  {/* This is where child components will be displayed */}
            </div>
        </div>
    );
}

export default Layout;
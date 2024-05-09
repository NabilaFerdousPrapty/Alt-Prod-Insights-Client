
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto font-oswald'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
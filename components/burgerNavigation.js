import { navigationItems } from '../const/navbarList';
import NavBar from './navbar';

const BurgerNavigation = ({ isOpen }) => {
    return (
        <div className={`${!isOpen ? 'translate-x-full' : 'translate-x-0'
            } top-0 transform translate fixed left-0 m-0 p-0 bg-hci-header md:hidden w-screen transition duration-500 ease-in-out flex flex-col justify-center items-center h-screen z-40`}
        >
            <NavBar className=" flex  flex-column h-full w-full justify-center items-center" />

        </div>
    )
}

export default BurgerNavigation;
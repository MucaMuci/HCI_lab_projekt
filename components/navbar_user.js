import { navigationItems } from '../const/navbarList_user';

const NavBarUser = () => {
    return (
        <nav className="flex list-none bg-hci-header">
            {navigationItems.map((item) => (
                <li
                    key={item}
                    className="px-2 py-2 text-white self-end text-lg"
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBarUser;
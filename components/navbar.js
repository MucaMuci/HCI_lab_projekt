import { navigationItems } from '../const/navbarList';

const NavBar = () => {
    return (
        <nav className="inline-flex list-none">
            {navigationItems.map((item) => (
                <li
                    key={item}
                    className="px-4 py-2 border"
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBar;
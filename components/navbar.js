import { navigationItems } from '../const/navbarList';

const NavBar = () => {
    return (
        <nav className="inline-flex list-none">
            {navigationItems.map((item) => (
                <li
                    key={item}
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBar;
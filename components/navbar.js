import { navigationItems } from '../const/navbarList';

const NavBar = () => {
    return (
        <nav>
            {navigationItems.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default NavBar;
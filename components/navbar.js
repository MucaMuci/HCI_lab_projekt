import { navigationItems } from '../const/navbarList';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {

    const router = useRouter();

    return (
        <nav className="flex list-none bg-hci-header">
            {navigationItems.map((link, index) => (
                <ul className={router.pathname == link.path ? "bg-white text-hci-modra px-1 mx-1 my-2 rounded-3xl hover:cursor-pointer" : "text-white mx-2 my-2 hover:cursor-pointer "}>
                    <Link href={link.path}>
                        <li
                            key={index}
                            className="  self-end text-lg"
                        >
                            {link.name}
                        </li>
                    </Link>
                </ul>
            ))}
        </nav>
    );
};

export default NavBar;
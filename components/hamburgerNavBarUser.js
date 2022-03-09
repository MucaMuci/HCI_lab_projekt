import { useRouter } from "next/router";
import { navigationItems } from "../const/navbarList_user";
import Link from "next/link";

const HamburgerNavBar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col list-none bg-hci-header  h-full w-full justify-center items-center">
      {navigationItems.map((link, index) => (
        <ul
          className={
            router.pathname == link.path
              ? "bg-white text-hci-modra px-[10px] mx-1 my-2 rounded-3xl hover:cursor-pointer"
              : "text-white mx-2 my-2 hover:cursor-pointer "
          }
          key={index}
        >
          <Link href={link.path}>
            <li className="  self-end text-lg">{link.name}</li>
          </Link>
        </ul>
      ))}
    </nav>
  );
};

export default HamburgerNavBar;

import Image from "next/image";
import Hamburger from "../assets/hamburger.png";
import UserImg from "../assets/user.png";
import HamburgerNavBar from "./hamburgerNavBarUser";
import { useRouter } from "next/router";
import UseUser from "../firebase/useUser";

const BurgerNavigation = ({ isOpen, setIsOpen }) => {

  const { user, logout } = UseUser();
  const router = useRouter();


  return (
    <div
      className={`${!isOpen ? "translate-x-full " : "translate-x-0"
        } top-0 right-0 transform translate w-[50%] fixed m-0 p-0 bg-slate-600 md:hidden transition duration-500 ease-in-out flex flex-col h-screen z-40`}
    >
      <div className="flex justify-between w-full pl-6">


        {user != undefined ?
          (
            <button
              onClick={() => logout()}
              className="justify-start hover:cursor-pointer"
            >
              <Image src={UserImg} width={50} height={50} alt="User" />
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="justify-start hover:cursor-pointer"
            >
              <Image src={UserImg} width={50} height={50} alt="User" />
            </button>)
        }
        <div className="flex justify-end p-6">
          <Image
            onClick={() => setIsOpen(!isOpen)}
            src={Hamburger}
            width={40}
            height={40}
            layout="fixed"
            alt="Menu"
          />
        </div>
      </div>
      <HamburgerNavBar />
    </div>
  );
};

export default BurgerNavigation;

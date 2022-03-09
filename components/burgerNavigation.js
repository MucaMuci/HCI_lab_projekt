import Image from "next/image";
import Hamburger from "../assets/hamburger.png";
import UserImg from "../assets/user.png";
import HamburgerNavBar from "./hamburgerNavBarUser";

const BurgerNavigation = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        !isOpen ? "translate-x-full " : "translate-x-0"
      } top-0 right-0 transform translate w-[50%] fixed m-0 p-0 bg-slate-600 md:hidden transition duration-500 ease-in-out flex flex-col h-screen z-40`}
    >
      <div className="flex justify-center w-full pl-6">
        <button
          onClick={() => router.push("/login")}
          className="justify-start hover:cursor-pointer"
        >
          <Image src={UserImg} width={50} height={50} alt="User" />
        </button>
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

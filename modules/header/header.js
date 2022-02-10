import { useState } from "react";
import NavBar from "../../components/navbar";
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';
import UserImg from '../../assets/user.png';
import UserManImg from '../../assets/user_man.png';
import Hamburger from '../../assets/hamburger.png'
import BurgerNavigation from '../../components/burgerNavigation'

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <header className="bg-hci-header">
            <main className=" max-w-6xl mx-auto flex justify-between bg-hci-header ">
                <div className="flex flex-row py-2 bg-hci-header" >
                    <div className="md:hidden lg:flex bg-hci-header">
                        <Image
                            src={LogoImg}
                            layout="fixed"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col  justify-center lg:justify-end py-2">
                        <div className="text-4xl text-white text-center md:hidden lg:block">
                            MEDUZA
                        </div>
                        <div className="text-2xl md:hidden lg:block lg:text-2xl  text-white  ">
                            Rent a Boat
                        </div>

                    </div>
                </div>
                <div className="hidden md:flex md:flex-col md:items-center lg:justify-end lg:items-end bg-hci-header">
                    <div className="flex items-end">
                        <div className="px-2 text-4xl text-white text-center hidden md:flex lg:hidden">
                            MEDUZA
                        </div>
                        <div className="text-2xl text-white text-center hidden md:flex lg:hidden">
                            Rent a Boat
                        </div>
                    </div>
                    <NavBar />
                </div>
                <div className="hidden md:flex md:self-center md:pr-3">
                    <Image
                        src={UserImg}
                        width={70}
                        height={70}
                    />
                    {/* <Image
                        src={UserManImg}
                        width={70}
                        height={70}
                    /> */}

                </div>
                <div className=" md:hidden self-center pr-3">
                    {/* <BurgerNavigation isOpen={isClicked}
                        className={`cursor-pointer z-50 transition-all ease-linear duration-500 ${isClicked ? 'transform rotate-90' : ''
                            }`} /> */}
                    <Image
                        onClick={() => setIsClicked(!isClicked)}
                        src={Hamburger}
                        width={40}
                        height={40}
                        layout='fixed'
                        alt="Menu" />
                </div>



            </main>

        </header>

    );
}

export default Header;
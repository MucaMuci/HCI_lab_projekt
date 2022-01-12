import NavBar from "../../components/navbar";
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';

const Header = () => {
    return (
        <header >
            <main className="flex flex-row ">
                <div>
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col">
                    <h1 >
                        MEDUZA
                    </h1>
                    <h3>
                        Rent a Boat Company
                    </h3>
                    <NavBar />
                </div>

            </main>

        </header>

    );
}

export default Header;
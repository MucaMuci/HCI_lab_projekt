import NavBar from "../../components/navbar";
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="flex ">
            <main className="inline-flex"> {/* Zašto ne radi flex-row */}
                <div >
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={100}
                        height={100}
                    />
                </div>
                <div >
                    <h1 >
                        MEDUZA
                    </h1>
                    <h3>
                        Rent a Boat Company
                    </h3>
                    <NavBar /> {/*Kako izdvojit Sign in */}
                </div>

            </main>

        </header>

    );
}

export default Header;
import NavBar from "../../components/navbar";
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex items-center">
            <main>
                <div>
                    <h1 >
                        MEDUZA
                    </h1>
                    <h3>
                        Rent a Boat Company
                    </h3>
                </div>
                <div>
                    <NavBar />
                </div>
            </main>

        </header>

    );
}

export default Header;
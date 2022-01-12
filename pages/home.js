import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import Reservations from "../modules/reservations/reservations";

const Home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-row justify-between">
                <div>

                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-around">
                        <button>
                            go one day backward
                        </button>
                        <div>
                            Today:
                        </div>
                        <button>
                            go one day forward
                        </button>
                        <Reservations />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
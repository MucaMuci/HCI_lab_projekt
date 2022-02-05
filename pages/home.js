import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import Notes from "../modules/notes/notes";
import Reservations from "../modules/reservations/reservations";

const Home = () => {
    return (
        <>

            <Header />
            <main className="">
                <div className="flex flex-col justify-center">

                    <div className="flex flex-col pt-10 pb-2">
                        <div className="flex flex-row justify-center">
                            <button>
                                --
                            </button>
                            <div className="px-5 text-lg font-semibold">
                                Today&apos;s schedule:
                            </div>
                            <button>
                                --
                            </button>

                        </div>
                    </div>
                    <div>
                        <div className='self-center border border-solid w-full h-0 border-black'></div>
                        <div className="flex max-w-5xl mx-auto justify-center">
                            <Reservations />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
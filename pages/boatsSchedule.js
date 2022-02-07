import Header from "../modules/header/header";
import Filter from "../modules/filter/filter";
import Footer from "../modules/footer/footer";
import Calendar from "react-calendar";
import { useState } from "react";
import Image from "next/image";
import SunImg from "../assets/sun.png"


const BoatsSchedule = () => {
    const [date, setDate] = useState(new Date());

    function onChange(nextValue) {
        setDate(nextValue);
    }
    return (
        <div className="">
            <Header />
            <div className="">
                <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">

                </div>
                <div className="bg-hci-siva-2 flex justify-center py-2">
                    <div className="text-4xl">
                        SEARCH BY
                    </div>
                </div>
                <div className=" flex max-w-6xl mx-auto justify-center pt-5 pb-10">
                    <Filter />
                </div>
                <div className="bg-hci-siva-2 flex justify-center py-2">
                    <div className="text-4xl">
                        CALENDAR
                    </div>
                </div>
                <div className="italic max-w-6xl mx-auto pb-4">
                    <span>This is a calendar that let&apos;s you view every specific month.</span>
                    <span className="font-medium"> To find more information</span>
                    <span> about specific date&apos;s reservations </span>
                    <span className="font-medium"> click on the wanted day in calendar.</span>
                </div>
                <div className="flex-col flex sm:flex-row max-w-6xl mx-auto justify-center pb-5 ">
                    <div className="border border-hci-siva shadow-btn-sjena rounded-3xl sm:w-2/5 mb-5 h-fit mr-3">
                        <Calendar className="text-center" onChange={onChange} value={date} />
                    </div>
                    <div className="flex flex-col border border-hci-siva shadow-btn-sjena rounded-3xl grow ">
                        <div className="bg-hci-siva-2 flex justify-center border-t border-hci-siva py-2 rounded-t-3xl">
                            <div className="">
                                WEATHER
                            </div>
                        </div>
                        <div className="flex justify-between px-3 py-2">
                            <div className="flex">
                                <div className="pr-2">
                                    Temperature:
                                </div>
                                <div>
                                    33°C
                                </div>
                            </div>
                            <div className="pt-1">
                                <Image src={SunImg}
                                    width={20}
                                    height={20} />
                            </div>
                            <div className="flex">
                                <div className="pr-2">
                                    Wind:
                                </div>
                                <div>
                                    3 m/s
                                </div>
                            </div>

                        </div>
                        <div className="bg-hci-siva-2 flex justify-center py-2 border-t border-hci-siva">
                            <div className="">
                                FREE BOAT&apos;S
                            </div>
                        </div>
                        <div className="flex flex-col pb-5 px-2">
                            <div className="table text-center table-auto">
                                <div className="table-header-group">
                                    <div className="table-row">
                                        <div className="table-cell text-left">BOAT&apos;S NAME</div>
                                        <div className="table-cell ">PRICE</div>
                                        <div className="table-cell ">MAX. PASSANGERS</div>
                                        <div className="table-cell ">LENGTH</div>
                                    </div>
                                </div>
                                <div className=" table-row-group ">
                                    <div className="table-row bg-green-300 ">
                                        <div className="table-cell text-left">Barracudda 734</div>
                                        <div className="table-cell">400€</div>
                                        <div className="table-cell">7</div>
                                        <div className="table-cell">7.34m</div>
                                    </div>
                                    <div className="table-row bg-green-300  ">
                                        <div className="table-cell text-left">Bigbarka33 </div>
                                        <div className="table-cell">400€</div>
                                        <div className="table-cell">7</div>
                                        <div className="table-cell">7.34m</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="bg-hci-siva-2 flex justify-center py-2 border-t border-hci-siva">
                            <div className="">
                                RESERVED BOAT&apos;S
                            </div>
                        </div>
                        <div className="rounded-b-3xl pb-5 flex flex-col px-2">
                            <div className="table text-center">
                                <div className="table-header-group">
                                    <div className="table-row">
                                        <div className="table-cell text-left">BOAT&apos;S NAME</div>
                                        <div className="table-cell text-left">PRICE</div>
                                        <div className="table-cell ">PASSANGERS</div>
                                        <div className="table-cell ">LENGTH</div>
                                    </div>
                                </div>
                                <div className=" table-row-group ">
                                    <div className="table-row bg-red-300 ">
                                        <div className="table-cell text-left">Barracudda 755</div>
                                        <div className="table-cell text-left">360€</div>
                                        <div className="table-cell">5/7</div>
                                        <div className="table-cell">6.55m</div>
                                    </div>
                                    <div className="table-row bg-red-300  ">
                                        <div className="table-cell text-left">Quicksilver 555</div>
                                        <div className="table-cell text-left">400€</div>
                                        <div className="table-cell">3/6</div>
                                        <div className="table-cell">5.78m</div>
                                    </div>
                                    <div className="table-row bg-red-300  ">
                                        <div className="table-cell text-left">Mala Barka 333</div>
                                        <div className="table-cell text-left">90€</div>
                                        <div className="table-cell">5/5</div>
                                        <div className="table-cell">4.75m</div>
                                    </div>
                                    <div className="table-row bg-red-300  ">
                                        <div className="table-cell text-left">Domaći Kaić 82</div>
                                        <div className="table-cell text-left">100€</div>
                                        <div className="table-cell">4/6</div>
                                        <div className="table-cell">5.00m</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BoatsSchedule;

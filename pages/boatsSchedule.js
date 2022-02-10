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
                    <div className="flex flex-col border font-medium border-hci-siva shadow-btn-sjena rounded-3xl grow ">
                        <div className="bg-hci-siva-2 flex justify-center border-t border-hci-siva py-2 rounded-t-3xl">
                            <div className="text-2xl">
                                WEATHER
                            </div>
                        </div>
                        <div className="flex px-3 py-2 text-lg">
                            <div className="flex flex-1">
                                <div className="pr-2 ">
                                    Temperature:
                                </div>
                                <div>
                                    33°C
                                </div>
                            </div>
                            <div className="pt-1 flex-1 text-center ">
                                <Image src={SunImg}
                                    width={20}
                                    height={20} />
                            </div>
                            <div className="flex flex-1 justify-end">
                                <div className="pr-2">
                                    Wind:
                                </div>
                                <div>
                                    3 m/s
                                </div>
                            </div>

                        </div>
                        <div className="bg-hci-siva-2 flex justify-center py-2 border-t border-hci-siva">
                            <div className="text-2xl">
                                FREE BOAT&apos;S
                            </div>
                        </div>
                        <div className="flex flex-col pb-5 px-2">
                            <div className="w-full text-center font-medium">
                                <div className="font-medium text-sm">
                                    <div className="flex">
                                        <div className="text-left w-1/3 px-1">BOAT&apos;S NAME</div>
                                        <div className=" w-1/6">PRICE</div>
                                        <div className=" w-1/3">MAX. PASSANGERS</div>
                                        <div className=" w-1/6">LENGTH</div>
                                    </div>
                                </div>
                                <div className=" ">
                                    <div className="flex bg-green-200 mb-2 rounded-md px-1">
                                        <div className="text-left w-1/3 ">Barracudda 734</div>
                                        <div className="w-1/6">400€</div>
                                        <div className="w-1/3 ">7</div>
                                        <div className="w-1/6">7.34m</div>
                                    </div>
                                    <div className="flex bg-green-200 rounded-md px-1">
                                        <div className="text-left w-1/3">Bigbarka33 </div>
                                        <div className="w-1/6">400€</div>
                                        <div className="w-1/3">7</div>
                                        <div className="w-1/6">7.34m</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="bg-hci-siva-2 flex justify-center py-2 border-t border-hci-siva">
                            <div className="text-2xl">
                                RESERVED BOAT&apos;S
                            </div>
                        </div>
                        <div className="flex flex-col pb-5 px-2">
                            <div className="w-full text-center font-medium">
                                <div className="font-medium text-sm">
                                    <div className="flex">
                                        <div className="text-left w-1/3 px-1">BOAT&apos;S NAME</div>
                                        <div className=" w-1/6">PRICE</div>
                                        <div className=" w-1/3">PASSANGERS</div>
                                        <div className=" w-1/6">LENGTH</div>
                                    </div>
                                </div>
                                <div className=" ">
                                    <div className="flex bg-red-200 mb-2 rounded-md px-1">
                                        <div className="text-left w-1/3 ">Barracudda 755</div>
                                        <div className="w-1/6">360€</div>
                                        <div className="w-1/3 ">5/7</div>
                                        <div className="w-1/6">6.55m</div>
                                    </div>
                                    <div className="flex bg-red-200 rounded-md px-1 mb-2">
                                        <div className="text-left w-1/3">Quicksilver 555 </div>
                                        <div className="w-1/6">400€</div>
                                        <div className="w-1/3">3/6</div>
                                        <div className="w-1/6">5.78m</div>
                                    </div>
                                    <div className="flex bg-red-200 rounded-md px-1 mb-2">
                                        <div className="text-left w-1/3">Mala Barka 333 </div>
                                        <div className="w-1/6">90€</div>
                                        <div className="w-1/3">5/5</div>
                                        <div className="w-1/6">4.75m</div>
                                    </div>
                                    <div className="flex bg-red-200 rounded-md px-1 mb-2">
                                        <div className="text-left w-1/3">Domaći Kaić 82 </div>
                                        <div className="w-1/6">100€</div>
                                        <div className="w-1/3">4/6</div>
                                        <div className="w-1/6">5.00m</div>
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

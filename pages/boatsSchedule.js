import Header from "../modules/header/header";
import Filter from "../modules/filter/filter";
import Footer from "../modules/footer/footer";
import Calendar from "react-calendar";
import { useState } from "react";


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
                <div className=" flex max-w-6xl mx-auto justify-center pt-5 pb-20">
                    <Filter />
                </div>
                <div className="bg-hci-siva-2 flex justify-center py-2">
                    <div className="text-4xl">
                        CALENDAR
                    </div>
                </div>
                <div className="italic max-w-6xl mx-auto">
                    <span>This is a calendar that let&apos;s you view every specific month.</span>
                    <span className="font-medium"> To find more information</span>
                    <span> about specific date&apos;s reservations </span>
                    <span className="font-medium"> click on the wanted day in calendar.</span>
                </div>
                <div className="flex max-w-6xl mx-auto ">
                    <div className="border border-hci-siva rounded-3xl">
                        <Calendar className="text-center" onChange={onChange} value={date} />
                    </div>
                    <div className="flex flex-col border border-hci-siva rounded-3xl">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BoatsSchedule;

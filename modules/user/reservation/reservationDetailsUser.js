import Image from "next/image";
import CalendarImg from "../../../assets/calendar.png";
import DownArrow from "../../../assets/down_arrow.png";
import Minus from "../../../assets/minus.png";
import Plus from "../../../assets/plus.png";
import FlagImg from "../../../assets/flag.png";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import hr from 'date-fns/locale/hr';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';



registerLocale('hr', hr)


const ReservationDetailsUser = ({ formStep, nextFormStep, name }) => {
    function handleSubmit() {
        nextFormStep();
    }

    const [startDate, setStartDate] = useState(new Date());

    const [numberOfPeolple, setNumberOfPeople] = useState(1);

    const [needDriver, setNeedDriver] = useState("Yes");

    const [pickUpTime, setPickUpTime] = useState('09:30');



    return (
        <div className={formStep === 0 ? "flex" : "hidden"}>
            <div className="flex flex-col px-5 sm:px-20 py-3 font-medium max-w-5xl border border-hci-siva rounded-xl">
                <div className="text-2xl text-center font-semibold pb-4">
                    {name + " RESERVATION"}
                </div>
                <div className="text-sm">Date</div>
                <div className="flex items-center text-center border border-hci-siva rounded-md bg-hci-siva-2 text-lg w-fit">
                    <DatePicker locale={hr} dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                {/* <div className="flex items-center pb-2">
                    <input
                        className=" w-1/3 text-center border border-hci-siva rounded-md bg-hci-siva-2 text-lg placeholder-hci-siva-slova"
                        placeholder="DD/MM/YY"
                    ></input>
                    <div className="pl-2 hover:cursor-pointer">
                        <Image src={CalendarImg} width={20} height={20} alt="Calendar" />
                    </div>
                </div> */}

                <div className=" text-sm font-medium pt-1">Number of people</div>
                <div className="flex px-2 border  border-hci-siva rounded-md bg-hci-siva-2 w-fit">

                    <button className={`my-auto text-2xl font-bold ${numberOfPeolple !== 1 ? "text-hci-modra" : "text-hci-modra-cool"}`}
                        disabled={numberOfPeolple === 1}
                        onClick={() => { setNumberOfPeople(numberOfPeolple - 1) }}>
                        -
                    </button>
                    <div className="px-4 pt-1">
                        {numberOfPeolple}
                    </div>
                    <button className={`my-auto text-2xl font-bold ${numberOfPeolple !== 9 ? "text-hci-modra" : "text-hci-modra-cool"}`}
                        disabled={numberOfPeolple === 9}
                        onClick={() => { setNumberOfPeople(numberOfPeolple + 1) }}>
                        +
                    </button>
                </div>

                <div className="pt-6 text-sm font-medium">Pick-up time</div>
                <div className="flex">
                    <input
                        className="border  border-hci-siva rounded-md bg-hci-siva-2 w-1/12 text-lg placeholder-hci-siva-slova text-center"
                        placeholder="9"
                    ></input>
                    <div>:</div>
                    <input
                        className="border  border-hci-siva rounded-md bg-hci-siva-2 w-1/12 text-lg placeholder-hci-siva-slova text-center"
                        placeholder="30"
                    ></input>

                </div>





                <div className="pt-2 text-sm font-medium">Pick-up place</div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova">
                        Type location
                    </div>
                </div>


                <div className="pt-2 text-sm font-medium">Check-out place</div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova">
                        Type location
                    </div>
                </div>

                <div className="text-sm pt-6 font-medium">Additional equipment</div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova">
                        Select
                    </div>
                </div>

                <div className="pt-2 text-sm font-medium">Needs a skipper</div>
                <div className="flex">
                    <button onClick={() => setNeedDriver("Yes")} className={`hover:cursor-pointer font-normal border px-1 text-lg  border-hci-siva rounded-md bg-hci-siva-2 w-fit  ${needDriver == "Yes" ? "text-white bg-hci-modra" : "text-hci-modra"}`}>
                        {" "}
                        Yes
                    </button>
                    <div className="px-1"></div>
                    <button onClick={() => setNeedDriver("No")} className={`hover:cursor-pointer font-normal border px-1 text-lg  border-hci-siva rounded-md bg-hci-siva-2 w-fit  ${needDriver == "No" ? "text-white bg-hci-modra" : "text-hci-modra"}`}>
                        No
                    </button>
                </div>
                {needDriver == "No" &&
                    <>
                        <div className="font-semibold text-lg pt-12">
                            DRIVER&apos;S BOAT LICENCE DATA
                        </div>

                        <div className="text-sm pt-2 font-medium">Issuing country</div>
                        <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
                            <div className="px-1">
                                <Image src={FlagImg} width={20} height={15} alt="Flag" />
                            </div>
                            <button>
                                <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
                            </button>
                            <div className="font-normal text-lg pl-2 text-hci-siva-slova border-hci-siva rounded-md bg-hci-siva-2  ">
                                Croatia
                            </div>
                        </div>

                        <div className="text-sm pt-2 font-medium">Category</div>
                        <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>

                        <div className="text-sm pt-2 font-medium">Licence number</div>
                        <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>
                    </>
                }
                <div className="pt-2 flex justify-end text-hci-modra ">
                    <button onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div>
    );
};
export default ReservationDetailsUser;

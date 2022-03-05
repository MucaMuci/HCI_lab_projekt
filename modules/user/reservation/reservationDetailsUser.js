import Image from "next/image";
import CalendarImg from "../../../assets/calendar.png";
import DownArrow from "../../../assets/down_arrow.png";
import Minus from "../../../assets/minus.png";
import Plus from "../../../assets/plus.png";
import FlagImg from "../../../assets/flag.png";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import hr from 'date-fns/locale/hr';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import moment from "moment"
import { CountryDropdown } from "react-country-region-selector";
import Select from "react-select"
import countryList from "../../../const/countryList";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import AppContext from "../../../components/AppContext";



registerLocale('hr', hr)


const ReservationDetailsUser = ({ formStep, nextFormStep, name, handleData }) => {

    const value = useContext(AppContext)

    function handleSubmit() {

        if (startDate && numberOfPeolple && pickUpTime && pickUpPlace && checkOutPlace) {

            let data = {};
            let addEquipment = []

            if (additionalEquipment) {
                addEquipment = additionalEquipment.map((el) => el.value);
            }


            if (needDriver == "No" && issuingCountry && category && licenceNumber) {
                data = {
                    StartDate: new Date(startDate).toISOString().split('T')[0],
                    NumberOfPeolple: numberOfPeolple,
                    PickUpTime: new Date(pickUpTime._d).toISOString().split('T')[1],
                    PickUpPlace: pickUpPlace.value,
                    CheckOutPlace: checkOutPlace.value,
                    AdditionalEquipment: addEquipment,
                    NeedDriver: needDriver,
                    IssuingCountry: issuingCountry.value,
                    Category: category,
                    LicenceNumber: licenceNumber,
                    BoatName: name

                }

                handleData(data)
                nextFormStep();
            }
            else {
                data = {
                    StartDate: new Date(startDate).toISOString().split('T')[0],
                    NumberOfPeolple: numberOfPeolple,
                    PickUpTime: new Date(pickUpTime._d).toISOString().split('T')[1],
                    PickUpPlace: pickUpPlace.value,
                    CheckOutPlace: checkOutPlace.value,
                    AdditionalEquipment: addEquipment,
                    NeedDriver: needDriver,
                    BoatName: name

                }

                handleData(data)
                nextFormStep();
            }


        }
        else {
            console.log("Unesite podatke")
        }
    }



    const [startDate, setStartDate] = useState(new Date());

    const [numberOfPeolple, setNumberOfPeople] = useState(1);

    const [needDriver, setNeedDriver] = useState("Yes");

    const [pickUpTime, setPickUpTime] = useState();

    const [issuingCountry, setIssuingCountry] = useState("")

    const [category, setCategory] = useState("")

    const [licenceNumber, setLicenceNumber] = useState("")

    const [pickUpPlace, setPickUpPlace] = useState("");

    const [checkOutPlace, setCheckOutPlace] = useState("");

    const [additionalEquipment, setAdditionalEquipment] = useState("")

    const pickUpOptions = [
        { value: 'Makarska', label: 'Makarska' },
        { value: 'Krvavica', label: 'Krvavica' },
        { value: 'Promajna', label: 'Promajna' },
        { value: 'Baška Voda', label: 'Baška Voda' },
        { value: 'Brela', label: 'Brela' },
        { value: 'Tučepi', label: 'Tučepi' },
        { value: 'Podgora', label: 'Podgora' },
    ]

    const equipment = [
        { value: "tubes", label: "Tubes" },
        { value: "water skies", label: "Water skies" },
        { value: "wakeboard", label: "Wakeboard" },
    ]

    const disableDates = [...value.state.info]

    disableDates = disableDates.map(el => new Date(el))


    return (
        <div className={formStep === 0 ? "flex" : "hidden"}>
            <div className="flex flex-col px-5 sm:px-20 py-3 font-medium max-w-5xl border border-hci-siva rounded-xl">
                <div className="text-2xl text-center font-semibold pb-4">
                    {name + " RESERVATION"}
                </div>
                <div className="text-sm">Date</div>
                <div className="flex items-center text-center border border-hci-siva rounded-md bg-hci-siva-2 text-lg w-fit">
                    <DatePicker
                        excludeDates={disableDates} minDate={new Date()} locale={hr} dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>


                <div className=" text-sm font-medium pt-2">Number of people</div>
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

                    <TimePicker minuteStep={10} showSecond={false} value={pickUpTime} onChange={(value) => setPickUpTime(moment(value, "hh:mm"))} />
                </div>





                <div className="pt-2 text-sm font-medium">Pick-up place</div>

                <Select value={pickUpPlace} onChange={(val) => setPickUpPlace(val)} options={pickUpOptions} />


                <div className="pt-2 text-sm font-medium">Check-out place</div>

                <Select value={checkOutPlace} onChange={(val) => setCheckOutPlace(val)} options={pickUpOptions} />

                <div className="text-sm pt-6 font-medium">Additional equipment</div>

                <Select value={additionalEquipment} onChange={(val) => setAdditionalEquipment(val)} isMulti options={equipment} closeMenuOnSelect={false} />

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
                        {/* <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
                            <div className="px-1">
                                <Image src={FlagImg} width={20} height={15} alt="Flag" />
                            </div>
                            <button>
                                <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
                            </button>
                            <div className="font-normal text-lg pl-2 text-hci-siva-slova border-hci-siva rounded-md bg-hci-siva-2  ">
                                Croatia
                            </div>


                        </div> */}


                        <Select options={countryList} value={issuingCountry} onChange={(val) => setIssuingCountry(val)} />

                        <div className="text-sm pt-2 font-medium">Category</div>
                        <input value={category} onChange={(event) => setCategory(event.target.value)} className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>

                        <div className="text-sm pt-2 font-medium">Licence number</div>
                        <input value={licenceNumber} onChange={(event) => setLicenceNumber(event.target.value)} className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>
                    </>
                }
                <div className="pt-2 flex justify-end text-hci-modra ">
                    <button onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div >
    );
};
export default ReservationDetailsUser;

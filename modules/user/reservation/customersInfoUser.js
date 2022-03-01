import DownArrow from "../../../assets/down_arrow.png";
import FlagImg from "../../../assets/flag.png";
import CalendarImg from "../../../assets/calendar.png";
import Image from "next/image";

const CustomersInfoUser = ({ formStep, nextFormStep, prevFormStep }) => {
    function handleSubmit() {
        nextFormStep();
    }

    return (
        <div className={formStep === 1 ? "flex" : "hidden"}>
            <div className="flex flex-col px-5 sm:px-20 md:px-32 py-3 border border-hci-siva rounded-xl">
                <div className="text-sm pt-2 font-medium">Full Name</div>
                <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>

                <div className="text-sm pt-2 font-medium">Date of birth</div>

                <div className="flex items-center pb-2">
                    <input
                        className="  text-center border border-hci-siva rounded-md bg-hci-siva-2 text-lg placeholder-hci-siva-slova"
                        placeholder="DD/MM/YY"
                    ></input>
                    <div className="pl-2 hover:cursor-pointer">
                        <Image src={CalendarImg} width={20} height={20} alt="Calendar" />
                    </div>
                </div>

                <div className="text-sm pt-6 font-medium">Email address</div>
                <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>

                <div className="text-sm pt-2 font-medium">Phone number</div>
                <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
                    <div className="px-1">
                        <Image src={FlagImg} width={20} height={15} alt="Flag" />
                    </div>
                    <button>
                        <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
                    </button>
                    <input className="font-normal text-lg pl-2 text-hci-siva-slova border-hci-siva rounded-md bg-hci-siva-2  "></input>
                </div>

                <div className="text-sm pt-6 font-medium">Country / Region</div>
                <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>

                <div className="text-sm pt-2 font-medium">City</div>
                <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>

                <div className="text-sm pt-2 font-medium">Street address</div>
                <input className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "></input>



                <div className="flex flex-row text-hci-modra justify-between pt-6 pb-2">
                    <div>
                        {formStep < 3 && (
                            <>
                                {formStep > 0 && (
                                    <button className="" onClick={prevFormStep} type="button">
                                        Back
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    <div className=" flex justify-end text-hci-modra ">
                        <button onClick={handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersInfoUser;

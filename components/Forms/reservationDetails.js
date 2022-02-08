import Image from "next/image";
import CalendarImg from "../../assets/calendar.png"
import DownArrow from "../../assets/down_arrow.png"
import Minus from "../../assets/minus.png"
import Plus from "../../assets/plus.png"

const ReservationDetails = ({ formStep, nextFormStep }) => {
    function handleSubmit() {
        nextFormStep();
    }

    return (
        <div className={formStep === 0 ? "flex" : "hidden"}>
            <div className="flex flex-col px-5 sm:px-20 py-3 font-medium max-w-6xl border border-hci-siva rounded-xl">
                <div className="text-sm">
                    Date
                </div>
                <div className="flex items-center pb-2">
                    <input className=" w-1/3 text-center border border-hci-siva rounded-md bg-hci-siva-2 text-lg placeholder-hci-siva-slova" placeholder="DD/MM/YY"></input>
                    <div className="pl-2">
                        <Image
                            src={CalendarImg}
                            width={20}
                            height={20} />
                    </div>
                </div>
                <div className="text-sm font-medium ">
                    Select a boat
                </div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image
                            src={DownArrow}
                            width={20}
                            height={12} />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova">
                        Type name
                    </div>
                </div>
                <div className="pt-2 text-sm font-medium">
                    Number of people
                </div>
                <div className="flex px-2 border  border-hci-siva rounded-md bg-hci-siva-2 w-fit">
                    <button className="pb-1">
                        <Image src={Minus}
                            width={10}
                            height={3}
                        />
                    </button>
                    <div className="px-4 pt-1">
                        0
                    </div>
                    <button className="pt-1">
                        <Image src={Plus}
                            width={10}
                            height={12} />
                    </button>
                </div>
                <div className="pt-2 text-sm font-medium">
                    Needs a skipper
                </div>
                <div className="flex">
                    <div className="font-normal border px-1 text-lg text-hci-modra border-hci-siva rounded-md bg-hci-siva-2 w-fit"> Yes</div>
                    <div className="px-1"></div>
                    <div className="font-normal border px-1 text-lg text-hci-modra border-hci-siva rounded-md bg-hci-siva-2 w-fit">No</div>
                </div>

                <div className="pt-6 text-sm font-medium">
                    Pick-up time
                </div>
                <div className="flex">
                    <input className="border  border-hci-siva rounded-md bg-hci-siva-2 w-1/12 text-lg placeholder-hci-siva-slova text-center" placeholder="9"></input>
                    <div>:</div>
                    <input className="border  border-hci-siva rounded-md bg-hci-siva-2 w-1/12 text-lg placeholder-hci-siva-slova text-center" placeholder="30"></input>
                </div>

                <div className="pt-2 text-sm font-medium">
                    Pick-up place
                </div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image
                            src={DownArrow}
                            width={20}
                            height={12} />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova" >
                        Type location
                    </div>
                </div>
                <div className="pt-6 text-sm font-medium">
                    Check-out time
                </div>
                <div className="flex">
                    <input className="border  border-hci-siva rounded-md bg-hci-siva-2 w-1/12 text-lg placeholder-hci-siva-slova text-center" placeholder="19"></input>
                    <div>:</div>
                    <input className="border  border-hci-siva rounded-md bg-hci-siva-2 w-1/12 text-lg placeholder-hci-siva-slova text-center" placeholder="30"></input>
                </div>


                <div className="pt-2 text-sm font-medium">
                    Check-out place
                </div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image
                            src={DownArrow}
                            width={20}
                            height={12} />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova" >
                        Type location
                    </div>
                </div>

                <div className="text-sm pt-6 font-medium">
                    Additional equipment
                </div>
                <div className="flex border w-1/2 border-hci-siva rounded-md bg-hci-siva-2">
                    <button>
                        <Image
                            src={DownArrow}
                            width={20}
                            height={12} />
                    </button>
                    <div className="font-normal text-lg pl-2 text-hci-siva-slova">
                        Select
                    </div>
                </div>

                <div className="pt-6 font-medium">
                    Comment
                </div>
                <textarea className="pl-1 border border-hci-siva rounded-md bg-hci-siva-2 text-lg placeholder-hci-siva-slova" rows="3" placeholder="Leave a comment">

                </textarea>

                <div className="pt-2 flex justify-end text-hci-modra ">
                    <button onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div>
    )

}
export default ReservationDetails;
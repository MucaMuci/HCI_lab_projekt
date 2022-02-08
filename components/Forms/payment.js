import Image from "next/image";
import DownArrow from "../../assets/down_arrow.png"
import Plus from "../../assets/plus.png"

const Payment = ({ formStep, nextFormStep, prevFormStep }) => {
    function handleSubmit() {
        nextFormStep();
    }

    return (
        <div className={formStep === 2 ? "flex" : "hidden"}>
            <div className="flex flex-col px-5 sm:px-20 md:px-32 border border-hci-siva rounded-xl">
                <div className="text-sm pt-2 font-medium">
                    Total price
                </div>
                <div className="flex flex-col">
                    <div className="pl-1 font-medium rounded-md  text-lg border  border-hci-siva bg-hci-siva-2 ">
                        550€
                    </div>
                    <div className="text-sm">
                        <span>Boat</span>
                        <span className="font-medium"> 480€</span>
                        <span> + skipper</span>
                        <span className="font-medium"> 70€</span>
                    </div>

                    <div className="text-sm pt-6 font-medium">
                        Payed
                    </div>
                    <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
                        <input className="font-normal text-lg pl-2 text-hci-siva-slova border-hci-siva rounded-md bg-hci-siva-2  " ></input>
                        <div className="px-1">
                            <Image
                                src={DownArrow}
                                width={20}
                                height={12} />
                        </div>
                        <div className="font-medium text-lg pr-1">kn</div>
                    </div>

                    <div className="text-sm pt-2 font-medium">
                        Still left to pay
                    </div>
                    <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
                        <input className="font-normal text-lg pl-2 text-hci-siva-slova border-hci-siva rounded-md bg-hci-siva-2  " ></input>
                        <div className="px-1">
                            <Image
                                src={DownArrow}
                                width={20}
                                height={12} />
                        </div>
                        <div className="font-medium text-lg pr-1">kn</div>
                    </div>

                    <div className="text-sm pt-2 font-medium">
                        Security deposit payed
                    </div>
                    <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
                        <input className="font-normal text-lg pl-2 text-hci-siva-slova border-hci-siva rounded-md bg-hci-siva-2  " ></input>
                        <div className="px-1">
                            <Image
                                src={DownArrow}
                                width={20}
                                height={12} />
                        </div>
                        <div className="font-medium text-lg pr-1">kn</div>
                    </div>

                    <div className="flex flex-row text-hci-modra justify-between pt-6 pb-2">
                        <div>
                            {formStep < 3 && (
                                <>
                                    {formStep > 0 && (
                                        <button
                                            className=""
                                            onClick={prevFormStep}
                                            type="button"
                                        >
                                            Back
                                        </button>
                                    )}


                                </>
                            )}
                        </div>
                        <div className=" flex justify-end text-hci-modra ">
                            <button onClick={handleSubmit}>CONFIRM</button>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Payment;
import Image from "next/image";
import EmptyCircle from "../assets/empty_circle.png";
import FullCircle from "../assets/full_circle.png";
import EmptyGreyCircle from "../assets/empty_circle_grey.png";

const FormCard = ({ children, currentStep }) => {

    return (
        <div className="flex flex-col max-w-5xl mx-auto pb-10">
            {currentStep < 2 && (
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-end">
                        <div className="">
                            <Image
                                width={40}
                                height={40}
                                alt="Prvi krug"
                                src={currentStep == 0 ? EmptyCircle : FullCircle}
                            />
                        </div>
                    </div>
                    <div
                        className={`self-center mb-1 border border-solid w-[36%] h-0 ${currentStep == 0 ? "border-hci-siva" : "border-hci-modra"
                            }`}
                    ></div>
                    <div>
                        <div>
                            <Image
                                width={40}
                                height={40}
                                alt="krug2"
                                src={
                                    currentStep == 0
                                        ? EmptyGreyCircle
                                        : currentStep == 1
                                            ? EmptyCircle
                                            : FullCircle
                                }
                            />
                        </div>
                    </div>
                    {/* <div
                        className={`self-center mb-1 border border-solid w-1/4 h-0 ${currentStep < 2 ? "border-hci-siva" : "border-hci-modra"
                            }`}
                    ></div>
                    <div>
                        <Image
                            width={40}
                            height={40}
                            alt="krug3"
                            src={currentStep < 2 ? EmptyGreyCircle : EmptyCircle}
                        />
                    </div> */}
                </div>
            )}
            {currentStep < 2 && (
                <div className="hidden sm:flex max-w-5xl mx-auto w-10/12 ">
                    <div className="flex-1 text-center">Customers information</div>
                    <div className="flex-1  pr-4 text-center">Payment</div>
                </div>
            )}

            <div className="max-w-5xl mx-auto ">{children}</div>
        </div>
    );
};

export default FormCard;
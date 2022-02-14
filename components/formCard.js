import Image from "next/image";
import EmptyCircle from "../assets/empty_circle.png"
import FullCircle from "../assets/full_circle.png"
import EmptyGreyCircle from "../assets/empty_circle_grey.png"


const FormCard = ({ children, currentStep, prevFormStep }) => {
    return (
        <div className="flex flex-col max-w-5xl mx-auto pb-10">
            {currentStep < 3 &&
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-end">
                        <div className="">
                            {currentStep < 1 ?
                                <Image src={EmptyCircle}
                                    width={40}
                                    height={40}
                                    alt="Prazni krug" /> :
                                <Image src={FullCircle}
                                    width={40}
                                    height={40}
                                    alt="Puni krug" />
                            }</div>

                    </div>
                    {currentStep < 1 ?
                        <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-siva'></div>
                        : <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-modra'></div>
                    }

                    <div>
                        <div>
                            {currentStep == 0 &&
                                <Image src={EmptyGreyCircle}
                                    width={40}
                                    height={40}
                                    alt="Prazni sivi krug" />}
                            {currentStep == 1 &&
                                <Image src={EmptyCircle}
                                    width={40}
                                    height={40}
                                    alt="Prazni krug" />
                            }
                            {currentStep == 2 &&
                                <Image src={FullCircle}
                                    width={40}
                                    height={40}
                                    alt="Prazni krug" />
                            }
                        </div>

                    </div>
                    {currentStep < 2 ?
                        <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-siva'></div>
                        : <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-modra'></div>
                    }
                    <div>
                        {currentStep < 2 ?
                            <Image src={EmptyGreyCircle}
                                width={40}
                                height={40}
                                alt="Prazni sivi krug" /> :
                            <Image src={EmptyCircle}
                                width={40}
                                height={40}
                                alt="Prazni sivi krug" />
                        }
                    </div>


                </div>
            }

            <div className="hidden sm:flex max-w-5xl mx-auto w-11/12 ">
                <div className="flex-1 text-center">
                    Reservation details
                </div>
                <div className="flex-1 text-center">
                    Customers information
                </div>
                <div className="flex-1  pr-2 text-center">
                    Payment
                </div>
            </div>

            <div className="max-w-5xl mx-auto ">
                {children}
            </div>

        </div>
    )
}

export default FormCard;
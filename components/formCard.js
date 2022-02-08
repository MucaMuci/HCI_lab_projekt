import Image from "next/image";
import EmptyCircle from "../assets/empty_circle.png"
import FullCircle from "../assets/full_circle.png"
import EmptyGreyCircle from "../assets/empty_circle_grey.png"


const FormCard = ({ children, currentStep, prevFormStep }) => {
    return (
        <div className="flex flex-col max-w-6xl mx-auto pb-10">
            {currentStep < 3 &&
                <div className="flex items-center justify-center">
                    <div>
                        {currentStep < 1 ?
                            <Image src={EmptyCircle}
                                width={40}
                                height={40} /> :
                            <Image src={FullCircle}
                                width={40}
                                height={40} />
                        }
                    </div>
                    {currentStep < 1 ?
                        <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-siva'></div>
                        : <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-modra'></div>
                    }

                    <div>
                        {currentStep == 0 &&
                            <Image src={EmptyGreyCircle}
                                width={40}
                                height={40} />}
                        {currentStep == 1 &&
                            <Image src={EmptyCircle}
                                width={40}
                                height={40} />
                        }
                        {currentStep == 2 &&
                            <Image src={FullCircle}
                                width={40}
                                height={40} />
                        }
                    </div>
                    {currentStep < 2 ?
                        <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-siva'></div>
                        : <div className='self-center mb-1 border border-solid w-1/4 h-0 border-hci-modra'></div>
                    }
                    <div>
                        {currentStep < 2 ?
                            <Image src={EmptyGreyCircle}
                                width={40}
                                height={40} /> :
                            <Image src={EmptyCircle}
                                width={40}
                                height={40} />
                        }
                    </div>


                </div>
            }
            <div className="max-w-6xl mx-auto ">
                {children}
            </div>

        </div>
    )
}

export default FormCard;
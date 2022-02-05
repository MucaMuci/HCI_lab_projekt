import Image from "next/image";
import Brod1 from "../assets/brod1.png"

const Reservation = ({ image, name, hasYetToPay, pickUpTime, pickUpPlace, needsSkipper, additionalEquipment, phoneNumber }) => (
    <div className="flex py-5">
        <div className="flex flex-col md:flex-row shadow-btn-sjena rounded-2xl px-5 py-5">
            <div className="flex ">
                <Image
                    src={Brod1}
                    height={320}
                    width={320} />
            </div>
            <div className="pl-10 flex flex-col">
                <div className="flex text-4xl pb-4">
                    {name}
                </div>
                <div className="flex flex-row text-lg">
                    <div className="flex flex-col items-start ">
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Has yet to pay:
                            </div>
                            <div className="flex text-hci-siva">
                                {hasYetToPay}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex pr-2 font-medium">
                                Pick-up time:
                            </div>
                            <div className="flex text-hci-siva">
                                {pickUpTime}
                            </div>
                        </div>
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Pick-up place:
                            </div>
                            <div className="flex text-hci-siva">
                                {pickUpPlace}
                            </div>
                        </div>
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Needs skipper:
                            </div>
                            <div className="flex text-hci-siva">
                                {needsSkipper}
                            </div>
                        </div>
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Additional equipment:
                            </div>
                            <div className="flex text-hci-siva">
                                {additionalEquipment}
                            </div>
                        </div>
                        <div className="flex pb-4">
                            <div className="flex pr-2 font-medium">
                                Phone number:
                            </div>
                            <div className="flex text-hci-siva">
                                {phoneNumber}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-lg font-medium">
                    <button className="text-hci-modra">
                        More information
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Reservation
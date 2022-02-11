import Image from "next/image";
import Brod1 from "../assets/brod1.png"

const Boat = ({ name, price, maxpassengers, length, currentstatus }) => (
    <div className="flex py-5">
        <div className="flex flex-col md:flex-row shadow-btn-sjena rounded-2xl px-5 py-5">
            <div className="flex ">
                <Image
                    src={Brod1}
                    height={320}
                    width={320}
                    alt="Brod" />
            </div>
            <div className="pl-10 flex flex-col pt-2 md:pt-0">
                <div className="flex text-4xl pb-5">
                    {name}
                </div>
                <div className="flex flex-row text-lg">
                    <div className="flex flex-col items-start ">
                        <div className="flex pb-3">
                            <div className="flex pr-2 font-medium">
                                Price
                            </div>
                            <div className="flex text-hci-siva2">
                                {price}
                            </div>
                        </div>
                        <div className="flex pb-3">
                            <div className="flex pr-2 font-medium">
                                Max number of passengers
                            </div>
                            <div className="flex text-hci-siva2">
                                {maxpassengers}
                            </div>
                        </div>
                        <div className="flex pb-3 md:pb-8">
                            <div className="flex pr-2 font-medium">
                                Length
                            </div>
                            <div className="flex text-hci-siva2">
                                {length}
                            </div>
                        </div>
                        <div className="flex pb-4 md:pb-16">
                            <div className="flex pr-2 font-medium">
                                Current status
                            </div>
                            <div className="flex text-hci-siva2 bg-green-300 rounded-lg p-0.5">
                                {currentstatus}
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

export default Boat;
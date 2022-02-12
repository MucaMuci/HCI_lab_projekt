import Image from "next/image";
import Brod1 from "../assets/brod1user.png"

const BoatUser = ({ name, price, maxpassengers, length, engineHP, soonestFreeDate }) => (
    <div className="flex py-5">
        <div className="flex flex-col shadow-btn-sjena rounded-2xl px-5 py-5">
            <div className="flex text-4xl self-center pb-4 font-semibold">
                {name}
            </div>
            <div className="flex ">
                <Image
                    src={Brod1}
                    height={320}
                    width={640}
                    alt="Brod" />
            </div>
            <div className="pl-2 flex flex-col pt-2 md:pt-0">

                <div className="flex justify-around flex-col sm:flex-row text-lg">
                    <div className="flex flex-grow sm:flex-grow-0 flex-col items-start ">
                        <div className="flex pt-2">
                            <div className="flex pr-2 font-medium">
                                Price:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {price}
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div className="flex pr-2 font-medium">
                                Max number of passengers:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {maxpassengers}
                            </div>
                        </div>
                        <div className="flex  pt-2">
                            <div className="flex pr-2 font-medium">
                                Length:
                            </div>
                            <div className="flex text-hci-siva-slova">
                                {length}
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div className="flex pr-2 font-medium">
                                Engine HP:
                            </div>
                            <div className="flex text-hci-siva-slova ">
                                {engineHP}
                            </div>
                        </div>

                        <div className="flex w-full ">
                            <div className="flex text-lg w-fit font-medium pt-2 sm:pt-4">
                                <button className="text-hci-modra">
                                    More information
                                </button>
                            </div>

                        </div>


                    </div>
                    <div className="flex pt-10 sm:pt-2 flex-col">
                        <div className="flex">
                            Soonest free dates:
                        </div>
                        <div className="text-hci-siva-slova flex sm:flex-col">
                            <div className="hidden sm:block">{soonestFreeDate.map(item => {

                                return <div className="sm:pt-2">
                                    {item}
                                </div>
                            })}
                            </div>
                            <div className="sm:hidden">
                                {soonestFreeDate.join(", ")}
                            </div>

                        </div>
                        <div className="flex">
                            <div className="flex mt-2 sm:mt-4 border shadow-btn-sjena rounded-lg border-hci-modra bg-hci-modra w-fit px-2  text-white">
                                <button>
                                    Make a reservation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
);

export default BoatUser;
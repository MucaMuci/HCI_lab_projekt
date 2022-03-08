import Image from "next/image";
import Brod1 from "../assets/brod1user.png"
import CreateImg from "../assets/create.png"


const FreeBoat = ({ name, price, maxpassengers, length, engineHP, soonestFreeDate }) => (
    <div className="flex flex-col py-5 px-4">

        <div className="flex flex-col shadow-btn-sjena rounded-2xl  pt-5">
            <div className="px-5 flex flex-col">
                <div className="flex text-4xl self-center pb-4 font-semibold">
                    {name}
                </div>
                <div className="flex justify-center">
                    <Image
                        src={Brod1}
                        height={320}
                        width={640}
                        alt="Brod" />
                </div>
                <div className="pl-2 flex flex-col pt-2 md:pt-0">

                    <div className="flex flex-col sm:flex-row text-lg">
                        <div className="flex flex-grow sm:flex-grow-0 flex-col items-start w-full">
                            <div className="flex flex-col w-full sm:flex-row justify-around">
                                <div className="flex flex-col ">
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
                                    <div className="hidden sm:flex text-lg w-fit font-medium pt-4">
                                        <button className="text-hci-modra">
                                            More information
                                        </button>
                                    </div>
                                </div>
                                <div>
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
                                </div>
                            </div>
                            <div className=" w-full flex sm:hidden">
                                <div className="flex text-lg w-fit font-medium pt-4">
                                    <button className="text-hci-modra">
                                        More information
                                    </button>
                                </div>

                            </div>



                        </div>

                    </div>


                </div>
            </div>
            <div className="flex mt-4 border shadow-btn-sjena rounded-lg  border-hci-modra bg-hci-modra w-full justify-center  text-white">
                <button className="flex pt-0.5">
                    <div>
                        Make a reservation
                    </div>
                    <div className="pl-2 pt-0.5 ">
                        <Image src={CreateImg}
                            alt="Create"
                            width={24}
                            height={20} />
                    </div>
                </button>
            </div>

        </div>

    </div>
);

export default FreeBoat;
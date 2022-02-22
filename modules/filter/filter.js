import Image from "next/image";
import DownArrow from "../../assets/down_arrow.png";
import Minus from "../../assets/minus.png"
import Plus from "../../assets/plus.png"


const Filter = ({ MPFilter, setMPFilter, setNSF, setBLF, setHP }) => {
    return (
        <section>
            <div className="border bg-white border-hci-siva rounded-3xl flex flex-col sm:flex-row justify-center divide-y sm:divide-y-0 sm:divide-x py-3 text-center">
                <div className="flex flex-col items-center px-2">
                    <div className="text-lg font-medium pb-2">
                        Boat&apos;s name
                    </div>
                    <input className="text-center text-lg w-4/5" placeholder="Search name"
                        onKeyUp={(e) => { setNSF(e.target.value) }}>
                    </input>
                </div>
                <div className="flex flex-col px-2 items-center text-center">
                    <div className=" text-lg font-medium pb-1">
                        Max number of passangers
                    </div>
                    <div className="flex justify-center">
                        <button className={`my-auto text-2xl font-bold ${MPFilter ? "text-hci-modra" : "text-hci-modra-cool"}`}
                            disabled={!MPFilter}
                            onClick={() => { setMPFilter(MPFilter - 1) }}>
                            -
                        </button>
                        <div className="px-4 pt-1">
                            {MPFilter}
                        </div>
                        <button className={`my-auto text-2xl font-bold ${MPFilter !== 9 ? "text-hci-modra" : "text-hci-modra-cool"}`}
                            disabled={MPFilter === 9}
                            onClick={() => { setMPFilter(MPFilter + 1) }}>
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-col px-2 items-center">
                    <div className=" text-lg font-medium pb-2">
                        Boat&apos;s length
                    </div>
                    <input className="text-lg text-center" placeholder="Add approximate length"
                        type="number"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace("-", "")
                        }}
                        onKeyUp={(e) => { setBLF(+e.target.value) }}
                        onWheel={(e) => e.target.blur()}
                    >
                    </input>
                </div>
                <div className="flex flex-col pl-2 items-center">
                    <div className=" text-lg font-medium pb-2">
                        Engine&apos;s HP
                    </div>
                    <input className="text-lg w-2/3 text-center" placeholder="100 HP"
                        type="number"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace("-", "")
                        }}
                        onKeyUp={(e) => {
                            setHP(+e.target.value);
                        }}
                        onWheel={(e) => e.target.blur()}
                    >
                    </input>
                </div>
                <div className="flex flex-col px-2 items-center">
                    <div className=" text-lg font-medium pb-2 text-center">
                        Specific requirments
                    </div>
                    <div className="flex">
                        <button>
                            <Image
                                src={DownArrow}
                                width={20}
                                height={12}
                                alt="DownArrow" />
                        </button>
                        <div className="text-lg pl-2">
                            Select
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Filter;
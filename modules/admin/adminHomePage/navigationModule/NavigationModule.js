import React from "react";
import Image from "next/image";
import LeftArrow from "../../../../assets/left_arrow.png"
import RightArrow from "../../../../assets/right_arrow.png"

const NavigationModule =()=>{
    return(
        <div className="flex flex-row justify-center pb-2">
            <button className="px-2 bg-hci-gradient rounded-full">
                <Image
                    src={LeftArrow}
                    height={13}
                    width={13}
                    alt="LeftArrow"
                />
            </button>
            <div className="px-5  text-lg font-semibold self-center">
                Today&apos;s schedule:
            </div>
            <button className="px-2  bg-hci-gradient rounded-full">
                <Image
                    src={RightArrow}
                    height={13}
                    width={13}
                    alt="RightArrow"
                />
            </button>
        </div>
    );
}

export default NavigationModule;
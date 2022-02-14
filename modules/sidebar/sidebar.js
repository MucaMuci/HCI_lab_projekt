import { useState, useEffect } from "react";
import Schedule from "../schedule/schedule";
import Notes from "../notes/notes";
import { StickyContainer } from "react-sticky";
import Image from "next/image";
import left_arrow from "../../assets/left_arrow.png"

const SideBar = ({ NClicked, setNClicked, SClicked, setSClicked }) => {

    return (
        <div className="sm:flex flex-col hidden  sm:w-3/12">
            <div className="flex flex-row border-l border-b bg-hci-modra sm:bg-white border-black w-full">
                <button className="block bg-hci-modra w-10 h-32 sm:h-[84px] justify-start items-center"
                    onClick={() => setNClicked(!NClicked)}>
                    <Image src={left_arrow} width={30} height={30} alt="LeftArrow" />
                </button>
                <div className="flex w-full text-xl self-center justify-center rotate-90 sm:transform-none hover:cursor-pointer  text-white sm:text-black" onClick={() => setNClicked(!NClicked)}>
                    NOTES
                </div>
            </div>
            <div className="hidden md:flex">
                <Notes />
            </div>
            <div className="flex flex-row border-l border-b bg-hci-modra sm:bg-white border-black  w-full">
                <button className="block bg-hci-modra w-10 h-32 sm:h-[84px] justify-start items-center"
                    onClick={() => setSClicked(!SClicked)}>
                    <Image src={left_arrow} width={30} height={30} alt="LeftArrow" />
                </button>
                <div className="flex w-full text-xl self-center justify-center rotate-90 sm:transform-none hover:cursor-pointer  text-white sm:text-black" onClick={() => setSClicked(!SClicked)}>
                    SCHEDULE
                </div>
            </div>
            <div className="hidden md:flex ">
                <Schedule />
            </div>
        </div>
    );
}

export default SideBar;
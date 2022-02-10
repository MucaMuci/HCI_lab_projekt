import { useState, useEffect } from "react";
import Schedule from "../schedule/schedule";
import Notes from "../notes/notes";
import { StickyContainer } from "react-sticky";
import Image from "next/image";
import left_arrow from "../../assets/left_arrow.png"

const SideBar = ({ NClicked, setNClicked, SClicked, setSClicked }) => {

    return (
        <div className="flex justify-self-end flex-col w-3/12">
            <div className="flex flex-row border w-full">
                <button className="flex bg-hci-modra w-10 h-[90px] justify-start items-center"
                    onClick={() => setNClicked(!NClicked)}>
                    <Image src={left_arrow} width={30} height={30} />
                </button>
                <div className="flex w-full text-xl self-center justify-center">
                    NOTES
                </div>
            </div>
            <Notes />
            <div className="flex flex-row border w-full">
                <button className="flex bg-hci-modra w-10 h-[90px] justify-start items-center"
                    onClick={() => setSClicked(!SClicked)}>
                    <Image src={left_arrow} width={30} height={30} />
                </button>
                <div className="flex w-full text-xl self-center justify-center">
                    SCHEDULE
                </div>
            </div>
            <Schedule />
        </div>
    );
}

export default SideBar;
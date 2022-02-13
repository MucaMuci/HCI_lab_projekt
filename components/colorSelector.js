import { ProfilePageJsonLd } from "next-seo";
import React from "react";

const ColorSelector = ({ isClicked, Color, setIsClicked, setColor }) => {
    return (
        <div className={isClicked ? "" : "hidden"}>
            {
                Color == "red" &&
                <div className="flex flex-col">
                    <button onClick={() => { setIsClicked(false); setColor("yellow") }}>
                        <div className="bg-[#eccd2f] w-5 h-5 mx-3 my-1 border border-black"></div>
                    </button>
                    <button onClick={() => { setIsClicked(false); setColor("green") }}>
                        <div className="bg-[#71d454] w-5 h-5 mx-3 my-1 border border-black"></div>
                    </button>
                </div>
            }

            {
                Color == "yellow" &&
                <div className="flex flex-col">
                    <button onClick={() => { setIsClicked(false); setColor("red") }}>
                        <div className="bg-[#d45454] w-5 h-5 mx-3 my-1 border border-black"></div>
                    </button>
                    <button onClick={() => { setIsClicked(false); setColor("green") }}>
                        <div className="bg-[#71d454] w-5 h-5 mx-3 my-1 border border-black"></div>
                    </button>
                </div>
            }

            {
                Color == "green" &&
                <div className="flex flex-col">
                    <button onClick={() => { setIsClicked(false); setColor("red") }}>
                        <div className="bg-[#d45454] w-5 h-5 mx-3 my-1 border border-black "></div>
                    </button>
                    <button onClick={() => { setIsClicked(false); setColor("yellow") }}>
                        <div className="bg-[#eccd2f] w-5 h-5 mx-3 my-1 border border-black"></div>
                    </button>
                </div>
            }

        </div>
    );
}

export default ColorSelector;
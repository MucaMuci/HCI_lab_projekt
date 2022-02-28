import DownArrow from "../../../../../assets/down_arrow.png";
import Image from "next/image";
import { useState } from "react";
import ColorSelector from "./components/colorSelector";

const NewNote = ({ ToggleNewNote, NewNoteClick }) => {
  const [ColorSelected, setColorSelected] = useState("red");
  const [ColorSelectorClicked, setColorSelectorClicked] = useState(false);
  return (
    <div
      className={
        NewNoteClick
          ? "flex content-start bg-[#f2f2f2] my-5 mx-5 py-3 px-2 rounded-xl"
          : "hidden"
      }
    >
      <div className="w-[10%] flex content-start">
        <div className="flex flex-col">
          <div className="flex flex-col">
            {ColorSelected == "red" && (
              <div className="bg-[#d45454] w-5 h-5 mx-3 my-1 border border-black"></div>
            )}
            {ColorSelected == "yellow" && (
              <div className="bg-[#eccd2f] w-5 h-5 mx-3 my-1 border border-black"></div>
            )}
            {ColorSelected == "green" && (
              <div className="bg-[#71d454] w-5 h-5 mx-3 my-1 border border-black"></div>
            )}
          </div>
          <ColorSelector
            isClicked={ColorSelectorClicked}
            Color={ColorSelected}
            setIsClicked={setColorSelectorClicked}
            setColor={setColorSelected}
          />
        </div>
        <button
          className="flex content-start m-1"
          onClick={() => setColorSelectorClicked(!ColorSelectorClicked)}
        >
          <Image src={DownArrow} alt="" width={15} height={10} />
        </button>
      </div>
      <div className="w-full flex content-start">
        <label className="px-[10px]"></label>
        <textarea className="w-full  mr-3" required></textarea>
      </div>
      <div className="flex flex-col content-center w-[20%]">
        <button className=" bg-hci-modra text-white my-1 rounded">
          Add Note
        </button>
        <button
          onClick={() => {
            ToggleNewNote(false);
          }}
          className="bg-hci-modra text-white my-1 rounded"
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default NewNote;

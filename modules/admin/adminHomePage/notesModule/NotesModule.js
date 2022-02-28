import Image from "next/image";
import NewNote from "./components/addNewNote";
import Notes from "../sidebar/components/notes/notes";
import CompletedNotes from "../sidebar/components/notes/completedNotes";
import RightArrow from "../../../../assets/right_arrow.png";
import DArrow from "../../../../assets/down_arrow.png";
import Plus from "../../../../assets/plus.png";
import { useState } from "react";

const NotesModule = ({ NClicked, setNClicked }) => {
  const [completedClicked, setCompletedClicked] = useState(false);
  const [addNewNoteClicked, setAddNewNoteClicked] = useState(false);

  return (
    <div className="absolute top-0 right-0 bottom-0 w-full md:w-[70%] h-full bg-white flex overflow-auto">
      <button
        className="flex bg-hci-modra w-10 h-full justify-center items-center fixed"
        onClick={() => setNClicked(!NClicked)}
      >
        <Image src={RightArrow} width={30} height={30} alt="RightArrow" />
      </button>
      <div className="flex bg-hci-modra w-10 h-full justify-center items-center"></div>
      <div className="flex flex-col w-full">
        <div className="flex justify-center w-full text-3xl">NOTES</div>
        <div className="flex bg-[#f2f2f2] w-full">
          <div className="justify-start pl-[20px] pr-[50px]">PRIORITY</div>
          <div className="">NOTE</div>
          <button
            className=" w-full flex justify-end items-center pr-[20px] flex-nowrap"
            onClick={() => setAddNewNoteClicked((addNewNoteClicked = true))}
          >
            <div className="pr-[10px]">Add new note</div>
            <Image src={Plus} height={20} width={20} alt="Plus"></Image>
          </button>
        </div>

        <NewNote
          ToggleNewNote={setAddNewNoteClicked}
          NewNoteClick={addNewNoteClicked}
        />

        <Notes />
        <button
          className="flex justify-center w-full items-center"
          onClick={() => setCompletedClicked(!completedClicked)}
        >
          <Image src={DArrow} width={30} height={20} alt="DownArrow"></Image>
          <div className="flex text-3xl pl-[15px] text-hci-modra">
            COMPLETED
          </div>
        </button>
        {completedClicked && <CompletedNotes />}
      </div>
    </div>
  );
};

export default NotesModule;

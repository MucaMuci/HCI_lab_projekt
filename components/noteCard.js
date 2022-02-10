import { useState } from "react";
import { notesRed } from "../const/noteList";

const NoteRed = ({ text }) => {
    const [NoteRedChecked, setNoteRedChecked] = useState(false);
    const addRedNoteToCompleted = () => {
        setNoteRedChecked(!NoteRedChecked);
    }
    return (
        <div className={NoteRedChecked ? "flex flex-row items-center mx-5 border mt-5 line-through" : "flex flex-row items-center mx-5 border mt-5"}>
            <div className="h-full w-5 bg-[#d45454]"></div>
            <div className=" pl-5 flex flex-row justify-self-center self-center w-full">
                <div className="flex flex-wrap">
                    {text}
                </div>
            </div >
            <input className="flex justify-end self-start my-1.5 mx-1.5"
                type="checkbox" defaultChecked={NoteRedChecked} onChange={addRedNoteToCompleted} style={{ width: 30, height: 30 }}></input>
        </div>
    );
}

const NoteYellow = ({ text }) => {
    const [NoteYellowChecked, setNoteYellowChecked] = useState(false);
    return (
        <div className={NoteYellowChecked ? "flex flex-row items-center mx-5 border mt-5 line-through" : "flex flex-row items-center mx-5 border mt-5"}>
            <div className="h-full w-5 bg-[#eccd2f]"></div>
            <div className=" pl-5 flex flex-row justify-self-center self-center w-full">
                <div className="flex flex-wrap">
                    {text}
                </div>
            </div >
            <input className="flex justify-end self-start my-1.5 mx-1.5" type="checkbox" defaultChecked={false} style={{ width: 30, height: 30 }}></input>
        </div>
    );
}

const NoteGreen = ({ text }) => {
    const [NoteGreenChecked, setNoteGreenChecked] = useState(false);
    return (
        <div className={NoteGreenChecked ? "flex flex-row items-center mx-5 border mt-5 line-through" : "flex flex-row items-center mx-5 border mt-5"}>
            <div className="h-full w-5 bg-[#71d454]"> </div>
            <div className=" pl-5 flex flex-row justify-self-center self-center w-full">
                <div className="flex flex-wrap">
                    {text}
                </div>
            </div >
            <input className="flex justify-end self-start my-1.5 mx-1.5" type="checkbox" defaultChecked={false} style={{ width: 30, height: 30 }}></input>
        </div>
    );
}

export { NoteRed, NoteYellow, NoteGreen };
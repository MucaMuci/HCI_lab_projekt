import { notesRed, notesYellow, notesGreen } from "../../const/noteList";
import { NoteRed, NoteYellow, NoteGreen } from "../../components/noteCard";


const Notes = () => {
    return (
        <div className="flex flex-col border">
            <div className="flex flex-col content-center">
                {notesRed.map((el) => {
                    return (
                        <NoteRed text={el.text} />
                    );
                })}
            </div>
            <button className="text-hci-modra mt-5">
                more ...
            </button>
            <div className='self-center border border-dashed w-full h-0 border-[#b6b6b6]'></div>
            <div className="flex flex-col content-center">
                {notesYellow.map((el) => {
                    return (
                        <NoteYellow text={el.text} />
                    );
                })}
            </div>
            <button className="text-hci-modra mt-5">
                more ...
            </button>
            <div className='self-center border border-dashed w-full h-0 border-[#b6b6b6]'></div>
            <div className="flex flex-col content-center">
                {notesGreen.map((el) => {
                    return (
                        <NoteGreen text={el.text} />
                    );
                })}
            </div>
            <button className="text-hci-modra mt-5">
                more ...
            </button>

        </div>
    );
}

export default Notes;
import {
  completedNotesRed,
  completedNotesYellow,
  completedNotesGreen,
} from "./const/completedNoteList";
import {
  NoteRed,
  NoteYellow,
  NoteGreen,
} from "../../../notesModule/components/components/noteCard";

const CompletedNotes = () => {
  return (
    <div className="flex flex-col border">
      <div className="flex flex-col content-center">
        {completedNotesRed.map((el) => {
          return <NoteRed key={el.text} text={el.text} />;
        })}
      </div>
      <button className="text-hci-modra mt-5">more ...</button>
      <div className="self-center border border-dashed w-full h-0 border-[#b6b6b6]"></div>
      <div className="flex flex-col content-center">
        {completedNotesYellow.map((el) => {
          return <NoteYellow key={el.text} text={el.text} />;
        })}
      </div>
      <button className="text-hci-modra mt-5">more ...</button>
      <div className="self-center border border-dashed w-full h-0 border-[#b6b6b6]"></div>
      <div className="flex flex-col content-center">
        {completedNotesGreen.map((el) => {
          return <NoteGreen key={el.text} text={el.text} />;
        })}
      </div>
      <button className="text-hci-modra mt-5">more ...</button>
    </div>
  );
};

export default CompletedNotes;

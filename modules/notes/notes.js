import { notes } from "../../const/noteList";
import Note from "../../components/noteCard"


const Notes = () => {
    return (
        <div className="flex flex-col border">
            <div>
                Notes to self:
            </div>
            <div>
                {notes.map((el) => (
                    <Note
                        color={el.color}
                        text={el.text}
                    />
                ))}
            </div>
        </div>
    );
}

export default Notes;
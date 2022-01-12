const Note = ({ color, text }) => (
    <div className="border flex flex-row">

        <div className={`w-3 bg-${color}-300 border`}></div>
        <div className={`flex flex-wrap`}>
            {text}
        </div>

    </div >
);

export default Note;
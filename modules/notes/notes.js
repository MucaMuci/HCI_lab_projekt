import { notesRed, notesYellow, notesGreen } from "../../const/noteList";
import Note from "../../components/noteCard"


const Notes = () => {
    return (
        <div className="flex flex-col border">
            <div className="flex flex-col content-center">
            {notesRed.map((el) => {return(
                    <div className="flex flex-row items-center border mx-5 mt-5 ">
                        <div className="h-full w-5 bg-[#d45454]"></div>
                        <Note
                            text={el.text}
                        />
                        <input className="flex justify-end self-start my-1.5 mx-1.5" type="checkbox" style={{width:30, height:30 }}></input>
                    </div>
                );
                })}
            </div>
            <button className="text-hci-modra mt-5">
                more ...
            </button>
            <div className='self-center border border-dashed w-full h-0 border-[#b6b6b6]'></div>
            <div className="flex flex-col content-center">
            {notesYellow.map((el) => {return(
                    <div className="flex flex-row items-center border mx-5 mt-5">
                        <div className="h-full w-5 bg-[#eccd2f]"></div>
                        <Note
                            text={el.text}
                        />
                        <input className="flex justify-end self-start my-1.5 mx-1.5" type="checkbox" style={{width:30, height:30}}></input>
                    </div>
                );
                })}
            </div>
            <button className="text-hci-modra mt-5">
                more ...
            </button>
            <div className='self-center border border-dashed w-full h-0 border-[#b6b6b6]'></div>
            <div className="flex flex-col content-center">
                {notesGreen.map((el) => {return(
                    <div className="flex flex-row items-center mx-5 border mt-5 ">
                        <div className="h-full w-5 bg-[#71d454]"> </div>
                        <Note
                            text={el.text}
                        />
                        <input className="flex justify-end self-start my-1.5 mx-1.5" type="checkbox" style={{width:30, height:30}}></input>
                    </div>
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
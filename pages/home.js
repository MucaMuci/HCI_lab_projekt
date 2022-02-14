import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";
import Reservations from "../modules/reservations/reservations";
import Image from "next/image";
import SideBar from "../modules/sidebar/sidebar";
import { useState } from "react";
import Plus from "../assets/plus.png"
import Notes from "../modules/notes/notes";
import DArrow from "../assets/down_arrow.png";
import CompletedNotes from "../modules/notes/completedNotes";
import Schedule from "../modules/schedule/schedule";
import { NextSeo } from "next-seo";
import SEO from '../data/next-seo.config';
import NewNote from "../modules/forms/addNewNote";

const Home = () => {
    const [notesClicked, setNotesClicked] = useState(false);
    const [scheduleClicked, setScheduleClicked] = useState(false);
    const [completedClicked, setCompletedClicked] = useState(false);
    const [addNewNoteClicked, setAddNewNoteClicked] = useState(false);
    return (
        <>
            <NextSeo {...SEO} />
            <div className={notesClicked || scheduleClicked ? "fixed blur-sm z-0" : ""}>
                <Header />
                <main className="font-merriweather">
                    <div className="flex flex-row h-full">
                        <div className="flex flex-col w-full sm:w-9/12">

                            <div className="flex flex-col pt-10 pb-2 bg-gradient-to-b from-hci-gradient to-white">
                                <div className="flex flex-row justify-center pb-2">
                                    <button className="px-2   bg-hci-gradient rounded-full">
                                        <Image
                                            src={LeftArrow}
                                            height={13}
                                            width={13}
                                            alt="LeftArrow"
                                        />
                                    </button>
                                    <div className="px-5  text-lg font-semibold self-center">
                                        Today&apos;s schedule:
                                    </div>
                                    <button className="px-2  bg-hci-gradient rounded-full">
                                        <Image
                                            src={RightArrow}
                                            height={13}
                                            width={13}
                                            alt="RightArrow"
                                        />
                                    </button>

                                </div>
                            </div>
                            <div>
                                <div className='self-center border border-solid w-full h-0 border-black'></div>
                                <div className="flex max-w-5xl mx-auto justify-center">
                                    <Reservations />
                                </div>
                            </div>
                        </div>

                        <SideBar NClicked={notesClicked} setNClicked={setNotesClicked} SClicked={scheduleClicked} setSClicked={setScheduleClicked} />

                    </div>

                </main>
                <Footer />
            </div>
            {notesClicked && (
                <div className="absolute top-0 right-0 bottom-0 w-full md:w-[70%] h-full bg-white flex overflow-auto">

                    <button className="flex bg-hci-modra w-10 h-full justify-center items-center fixed"
                        onClick={() => setNotesClicked(!notesClicked)}>
                        <Image src={RightArrow} width={30} height={30} alt="RightArrow" />
                    </button>
                    <div className="flex bg-hci-modra w-10 h-full justify-center items-center">
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-center w-full text-3xl">
                            NOTES
                        </div>
                        <div className="flex bg-[#f2f2f2] w-full">
                            <div className="justify-start pl-[20px] pr-[50px]">PRIORITY</div>
                            <div className="">NOTE</div>
                            <button className=" w-full flex justify-end items-center pr-[20px] flex-nowrap"
                                onClick={() =>
                                    setAddNewNoteClicked(addNewNoteClicked = true)
                                }>
                                <div className="pr-[10px]">Add new note</div>
                                <Image src={Plus} height={20} width={20} alt="Plus"></Image>
                            </button>
                        </div>

                        <NewNote ToggleNewNote={setAddNewNoteClicked} NewNoteClick={addNewNoteClicked} />

                        <Notes />
                        <button className="flex justify-center w-full items-center"
                            onClick={() => setCompletedClicked(!completedClicked)}
                        >
                            <Image src={DArrow} width={30} height={20} alt="DownArrow"></Image>
                            <div className="flex text-3xl pl-[15px] text-hci-modra">
                                COMPLETED
                            </div>
                        </button>
                        {
                            completedClicked && <CompletedNotes />
                        }

                    </div>
                </div>
            )
            }
            {
                scheduleClicked && (
                    <div className="absolute top-0 right-0 bottom-0 w-full md:w-[70%] h-full bg-white flex overflow-auto">

                        <button className="flex bg-hci-modra w-10 h-full justify-center items-center fixed"
                            onClick={() => setScheduleClicked(!scheduleClicked)}>
                            <Image src={RightArrow} width={30} height={30} alt="RightArrow" />
                        </button>
                        <div className="flex bg-hci-modra w-10 h-full justify-center items-center">
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex justify-center w-full text-3xl">
                                SCHEDULE
                            </div>
                            <div className="flex bg-[#f2f2f2] w-full mb-[25px] justify-center items-center h-[36px]">
                                <button className="px-2   bg-hci-gradient rounded-full h-[30px]">
                                    <Image
                                        src={LeftArrow}
                                        height={13}
                                        width={13}
                                        alt="LeftArrow"
                                    />
                                </button>
                                <div className="mx-[10px] text-2xl">TODAY</div>
                                <button className="px-2   bg-hci-gradient rounded-full h-[30px]">
                                    <Image
                                        src={RightArrow}
                                        height={13}
                                        width={13}
                                        alt="RightArrow"
                                    />
                                </button>
                            </div>
                            <div className="flex bg-[#f2f2f2] w-full">
                                <div className="justify-start pl-[20px] pr-[50px]">TIME</div>
                                <div className="">ACTIVITY</div>
                                <button className=" w-full flex justify-end items-center pr-[20px] flex-nowrap">
                                    <div className="pr-[10px]">Add new custom activity</div>
                                    <Image src={Plus} height={20} width={20} alt="Plus"></Image>
                                </button>
                            </div>
                            <Schedule />
                        </div>
                    </div>
                )
            }


        </>
    );
};

export default Home;
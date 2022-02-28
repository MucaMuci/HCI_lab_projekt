import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import Reservations from "../modules/reservations/reservations";
import SideBar from "../modules/admin/adminHomePage/sidebar/sidebar";
import { useState } from "react";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";
import NavigationModule from "../modules/admin/adminHomePage/navigationModule/NavigationModule";
import NotesModule from "../modules/admin/adminHomePage/notesModule/NotesModule";
import ScheduleModule from "../modules/admin/adminHomePage/scheduleModule/ScheduleModule";

const Home = () => {
  const [notesClicked, setNotesClicked] = useState(false);
  const [scheduleClicked, setScheduleClicked] = useState(false);

  return (
    <>
      <NextSeo {...SEO} />
      <div
        className={notesClicked || scheduleClicked ? "fixed blur-sm z-0" : ""}
      >
        <Header />
        <main className="font-merriweather">
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-full sm:w-9/12">
              <div className="flex flex-col pt-10 pb-2 bg-gradient-to-b from-hci-gradient to-white">
                <NavigationModule />
              </div>
              <div>
                <div className="self-center border border-solid w-full h-0 border-black"></div>
                <div className="flex max-w-5xl mx-auto justify-center">
                  <Reservations />
                </div>
              </div>
            </div>

            <SideBar
              NClicked={notesClicked}
              setNClicked={setNotesClicked}
              SClicked={scheduleClicked}
              setSClicked={setScheduleClicked}
            />
          </div>
        </main>
        <Footer />
      </div>
      {notesClicked && (
        <NotesModule NClicked={notesClicked} setNClicked={setNotesClicked} />
      )}
      {scheduleClicked && (
        <ScheduleModule
          SClicked={scheduleClicked}
          setSClicked={setScheduleClicked}
        />
      )}
    </>
  );
};

export default Home;

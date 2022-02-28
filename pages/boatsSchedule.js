import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";

import Header from "../modules/header/header";
import Filter from "../modules/filter/filter";
import Footer from "../modules/footer/footer";
import Title from "../modules/title/Title";
import CalendarInformation from "../modules/admin/adminBoatsSchedulePage/calendarInformation/CalendarInformation";
import FreeBoats from "../modules/admin/adminBoatsSchedulePage/freeBoats/FreeBoats";
import ReservedBoats from "../modules/admin/adminBoatsSchedulePage/reservedBoats/ReservedBoats";
import WeatherModule from "../modules/admin/adminBoatsSchedulePage/weather/Weather";
import BigCalendar from "../modules/admin/adminBoatsSchedulePage/calendar/Calendar";

const BoatsSchedule = () => {
  return (
    <div className="min-h-screen relative">
      <NextSeo
        title={`${SEO.title} - Boats schedule`}
        description={SEO.description}
      />
      <Header />
      <div className="pb-32">
        <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
        <Title TitleText={"SEARCH BY"} />
        <div className=" flex max-w-5xl mx-auto justify-center pt-5 pb-10">
          <Filter />
        </div>
        <Title TitleText={"CALENDAR"} />
        <CalendarInformation />
        <div className="flex-col flex sm:flex-row max-w-5xl mx-auto justify-center pb-5 ">
          <BigCalendar />
          <div className="flex flex-col border font-medium border-hci-siva shadow-btn-sjena rounded-3xl grow ">
            <WeatherModule />
            <FreeBoats />
            <ReservedBoats />
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default BoatsSchedule;

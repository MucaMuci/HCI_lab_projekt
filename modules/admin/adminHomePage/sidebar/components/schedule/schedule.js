import ScheduleCard from "./components/scheduleCard";
import { scheduleList } from "./const/scheduleList";

const Schedule = () => {
  return (
    <div className="flex flex-col w-full px-5 border pb-5">
      {scheduleList.map((el) => {
        return (
          <ScheduleCard
            key={el.text}
            text={el.text}
            icon={el.Icon_Src}
            time={el.time}
          />
        );
      })}
    </div>
  );
};

export default Schedule;

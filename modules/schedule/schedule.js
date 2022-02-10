import ScheduleCard from "../../components/scheduleCard";
import { scheduleList } from "../../const/scheduleList";

const Schedule = () => {
    return (
        <div className="flex flex-col px-5 border pb-5">
            {scheduleList.map((el) => {
                return (
                    <div>
                        <ScheduleCard key={el.text} text={el.text} icon={el.Icon_Src} time={el.time} />
                    </div>
                );
            })}
        </div>
    );
}

export default Schedule;
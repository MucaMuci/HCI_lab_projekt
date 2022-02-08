import Image from "next/image";

const ScheduleCard = ({time, text, icon}) => (
    <div className="flex flex-row justify-center items-center w-full h-fit mt-5 pr-5 border rounded-xl">
        <div className="h-full justify-start px-[10px]">{time}</div>
        <div className="flex flex-wrap">
            {text}
        </div>
        <div className="px-[10px]">
            <Image src={icon} width={30} height={30}/>
        </div>
         
    </div >
);

export  default ScheduleCard;
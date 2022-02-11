import Image from "next/image";

const ScheduleCard = ({ time, text, icon }) => (
    <div className="flex flex-row items-center w-full h-fit mt-5 pr-5 border rounded-xl">
        <div className="h-full justify-start px-[10px]">{time}</div>
        <div className={(icon == "") ? "flex flex-wrap w-full" : "flex flex-wrap w-full text-hci-siva-slova"}>
            {text}
        </div>
        {icon != "" &&
            <div className="px-[10px] justify-end pt-1">
                <Image src={icon} width={30} height={30} alt="Icon" />
            </div>
        }

    </div >
);

export default ScheduleCard;
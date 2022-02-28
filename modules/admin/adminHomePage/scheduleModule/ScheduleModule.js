import Image from "next/image";
import RightArrow from "../../../../assets/right_arrow.png";
import LeftArrow from "../../../../assets/left_arrow.png";
import Schedule from "../sidebar/components/schedule/schedule";
import Plus from "../../../../assets/plus.png";

const ScheduleModule = ({ SClicked, setSClicked }) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 w-full md:w-[70%] h-full bg-white flex overflow-auto">
      <button
        className="flex bg-hci-modra w-10 h-full justify-center items-center fixed"
        onClick={() => setSClicked(!SClicked)}
      >
        <Image src={RightArrow} width={30} height={30} alt="RightArrow" />
      </button>
      <div className="flex bg-hci-modra w-10 h-full justify-center items-center"></div>
      <div className="flex flex-col w-full">
        <div className="flex justify-center w-full text-3xl">SCHEDULE</div>
        <div className="flex bg-[#f2f2f2] w-full mb-[25px] justify-center items-center h-[36px]">
          <button className="px-2   bg-hci-gradient rounded-full h-[30px]">
            <Image src={LeftArrow} height={13} width={13} alt="LeftArrow" />
          </button>
          <div className="mx-[10px] text-2xl">TODAY</div>
          <button className="px-2   bg-hci-gradient rounded-full h-[30px]">
            <Image src={RightArrow} height={13} width={13} alt="RightArrow" />
          </button>
        </div>
        <div className="flex bg-[#f2f2f2] w-full">
          <div className="justify-start pl-[20px] pr-[50px]">TIME</div>
          <div>ACTIVITY</div>
          <button className=" w-full flex justify-end items-center pr-[20px] flex-nowrap">
            <div className="pr-[10px]">Add new custom activity</div>
            <Image src={Plus} height={20} width={20} alt="Plus"></Image>
          </button>
        </div>
        <Schedule />
      </div>
    </div>
  );
};

export default ScheduleModule;

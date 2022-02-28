import Image from "next/image";
import SunImg from "../../../../assets/sun.png";

const WeatherModule = () => {
  return (
    <div>
      <div className="bg-hci-siva-2 flex justify-center border-t border-hci-siva py-2 rounded-t-3xl">
        <div className="text-2xl">WEATHER</div>
      </div>
      <div className="flex justify-between px-3 py-2 text-lg">
        <div className="flex ">
          <div className="pr-2 ">Temperature:</div>
          <div>33°C</div>
        </div>
        <div className="pt-1  text-center ">
          <Image src={SunImg} width={20} height={20} alt="Sun" />
        </div>
        <div className="flex  justify-end">
          <div className="pr-2">Wind:</div>
          <div>3 m/s</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModule;

import Image from "next/image";
import { useEffect, useState } from "react";
import Brod1 from "../assets/brod1user.png";
import CreateImg from "../assets/create.png";
import { useRouter } from 'next/router'
import AppContext from "./AppContext";
import { useContext } from "react";

const BoatUser = ({
  name,
  price,
  maxpassengers,
  length,
  width,
  engineHP,
  fuel,
  additional,
  dates
}) => {
  const [information, setInformation] = useState(0);

  const showInfo = () => {
    setInformation(1);
  };
  const hideInfo = () => {
    setInformation(0);
  };

  useEffect(() => {

  }, [])
  let soonestFreeDate = [];
  let i = 0;
  let day = new Date();
  while (i < 3) {
    if (dates.includes(day.toISOString().split('T')[0])) { }
    else {
      soonestFreeDate.push(day.toLocaleDateString("hr-HR"))
      i++
    }
    day.setDate(day.getDate() + 1)
  }
  const router = useRouter();

  const value = useContext(AppContext)

  value.setInfo("aaaaa")
  console.log(value.state.info)


  return (
    <div className="flex py-5">
      <div className="flex flex-col shadow-btn-sjena rounded-2xl px-5 py-5">
        <div className="flex text-4xl self-center pb-4 font-semibold">
          {name}
        </div>
        <div className="flex ">
          <Image src={Brod1} height={320} width={640} alt="Brod" />
        </div>
        <div className="pl-2 flex flex-col pt-2 md:pt-0">
          {information == 0 && (
            <div className="flex justify-around flex-col sm:flex-row text-lg">
              <div className="flex flex-grow sm:flex-grow-0 flex-col items-start ">
                <div className="flex pt-2">
                  <div className="flex pr-2 font-medium">Price:</div>
                  <div className="flex text-hci-siva-slova">{price + "€"}</div>
                </div>
                <div className="flex pt-2">
                  <div className="flex pr-2 font-medium">
                    Max number of passengers:
                  </div>
                  <div className="flex text-hci-siva-slova">
                    {maxpassengers}
                  </div>
                </div>
                <div className="flex  pt-2">
                  <div className="flex pr-2 font-medium">Length:</div>
                  <div className="flex text-hci-siva-slova">{length + "m"}</div>
                </div>
                <div className="flex pt-2">
                  <div className="flex pr-2 font-medium">Engine HP:</div>
                  <div className="flex text-hci-siva-slova ">
                    {engineHP + "HP"}
                  </div>
                </div>

                <div className="flex w-full ">
                  <div className="flex text-lg w-fit font-medium pt-4">
                    <button onClick={showInfo} className="text-hci-modra">
                      More information
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex pt-10 sm:pt-2 flex-col">
                <div className="flex">Soonest free dates:</div>
                <div className="text-hci-siva-slova flex sm:flex-col">
                  <div className="hidden sm:block">{soonestFreeDate.map((item, index) => {

                    return <div className="sm:pt-2" key={index}>
                      {item}
                    </div>
                  })}
                  </div>
                  <div className="sm:hidden">
                    {soonestFreeDate.join(", ")}
                  </div>

                </div>
                <div className="flex">
                  <div className="flex mt-4 border shadow-btn-sjena rounded-lg border-hci-modra bg-hci-modra w-fit px-2  text-white">
                    <button onClick={() => router.push(`/reservation/${name}`)} className="flex ">
                      <div>Make a reservation</div>
                      <div className="pl-2 pt-0.5 ">
                        <Image
                          src={CreateImg}
                          alt="Create"
                          width={24}
                          height={20}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {information == 1 && (
            <div className="flex justify-around flex-col sm:flex-row text-lg">
              <div className="flex flex-grow sm:flex-grow-0 flex-col items-start ">
                <div className="flex pt-2">
                  <div className="flex pr-2 font-medium">Price:</div>
                  <div className="flex text-hci-siva-slova">{price + "€"}</div>
                </div>
                <div className="flex pt-3">
                  <div className="flex pr-2 font-medium">
                    Max number of passengers:
                  </div>
                  <div className="flex text-hci-siva-slova">
                    {maxpassengers}
                  </div>
                </div>
                <div className="flex  pt-3">
                  <div className="flex pr-2 font-medium">Length:</div>
                  <div className="flex text-hci-siva-slova">{length + "m"}</div>
                </div>
                <div className="flex ">
                  <div className="flex pr-2 font-medium">Width:</div>
                  <div className="flex text-hci-siva-slova">{width + "m"}</div>
                </div>
                <div className="flex pt-3">
                  <div className="flex pr-2 font-medium">
                    Fuel Tank capacity:
                  </div>
                  <div className="flex text-hci-siva-slova ">{fuel + "l"}</div>
                </div>
                <div className="flex ">
                  <div className="flex pr-2 font-medium">Engine HP:</div>
                  <div className="flex text-hci-siva-slova ">
                    {engineHP + "HP"}
                  </div>
                </div>
                <div className="flex pt-3">Also Includes:</div>
                <div className="text-hci-siva-slova flex sm:flex-col">
                  <div className="hidden">
                    {additional.map((item, index) => {
                      return (
                        <div className="sm:pt-2" key={index}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex">{additional.join(", ")}</div>
                </div>

                <div className="flex w-full ">
                  <div className="flex text-lg w-fit font-medium pt-4">
                    <button onClick={hideInfo} className="text-hci-modra">
                      Show less
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex pt-10 sm:pt-2 flex-col">
                <div className="flex">Soonest free dates:</div>

                <div className="flex">
                  <div className="flex mt-4 border shadow-btn-sjena rounded-lg border-hci-modra bg-hci-modra w-fit px-2  text-white">
                    <button onClick={() => router.push("/reservation")} className="flex ">
                      <div>Make a reservation</div>
                      <div className="pl-2 pt-0.5 ">
                        <Image
                          src={CreateImg}
                          alt="Create"
                          width={24}
                          height={20}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoatUser;

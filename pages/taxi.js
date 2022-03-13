import { NextSeo } from "next-seo";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import SEO from "../data/next-seo.config";
import Footer from "../modules/footer/footer";
import HeaderUser from "../modules/header/header_user";
import Karta from "../assets/karta.png";
import DownArrow from "../assets/down_arrow.png";
import CreateImg from "../assets/create.png";
import Image from "next/image";
import { useState } from "react";
import CitiesSelector from "../modules/user/taxiPage/listOfAvailableCities/CitiesSelector";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "/components/AppContext";

const Taxi = () => {
  const [listOfAvailableCitiesClicked, setlistOfAvailableCitiesClicked] =
    useState(false);
  const [selectedCity, setselectedCity] = useState("Type location");
  const [price, setPrice] = useState("0€");
  const [estimatedTime, setestimatedTime] = useState("0 minutes");
  const [infoEnteredFlag, setInfoEnteredFlag] = useState(0);

  const router = useRouter();
  const value = useContext(AppContext);

  function citySelectionHandler(city, time, price) {
    setselectedCity(city);
    setPrice(price);
    setestimatedTime(time);
    setlistOfAvailableCitiesClicked(!listOfAvailableCitiesClicked);
    setInfoEnteredFlag(1);
  }
  return (
    <div className="min-h-screen relative">
      <NextSeo title={`${SEO.title} -  Taxi`} description={SEO.description} />
      <HeaderUser />
      <div className="pb-32 flex flex-col justify-center w-full">
        <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
        <div className="max-w-5xl mx-auto">
          <div className="md:flex hidden md:flex-row w-full justify-between  pt-2">
            <div className="flex flex-col ">
              <div className=" text-sm font-semibold">From:</div>
              <div className="flex font-semibold text-lg w-fit">MAKARSKA</div>
            </div>
            <div className="w-[170px]">
              <div className="text-sm font-semibold ">To:</div>

              <div className="flex border  border-hci-siva rounded-md bg-hci-siva-2">
                <button
                  onClick={() => {
                    setlistOfAvailableCitiesClicked(
                      !listOfAvailableCitiesClicked
                    );
                  }}
                >
                  <Image
                    src={DownArrow}
                    width={20}
                    height={12}
                    alt="DownArrow"
                  />
                </button>
                <div className="font-normal text-lg pl-2 pr-2 text-hci-siva-slova">
                  {selectedCity}
                </div>
              </div>
              <CitiesSelector
                toggleList={listOfAvailableCitiesClicked}
                setCity={citySelectionHandler}
              />
            </div>
            <div className="w-fit">
              <div className="text-sm  font-semibold">Price:</div>
              <div className="pl-1 font-medium rounded-md  text-lg border  border-hci-siva bg-hci-siva-2 ">
                {price}
              </div>
              <div className="text-xs text-center">
                <div>Driver and fuel are</div>
                <div>included in price.</div>
              </div>
            </div>
            <div className="w-fit">
              <div className="text-sm  font-semibold">
                Estimated travel time:
              </div>
              <div className="pl-1 font-medium rounded-md  text-lg border  border-hci-siva bg-hci-siva-2 ">
                {estimatedTime}
              </div>
            </div>
            <div className="flex h-fit px-1 mt-5 border shadow-btn-sjena rounded-lg  border-hci-modra bg-hci-modra justify-center  text-white">
              <button
                onClick={() => {
                  value.setInfo({
                    City: selectedCity,
                    Price: price,
                    Time: estimatedTime,
                    Flag: infoEnteredFlag,
                  });
                  router.push("/taxiReservation");
                }}
                className="flex self-center"
              >
                <div>Request a transfer</div>

                <div className="pl-2 pt-0.5 ">
                  <Image src={CreateImg} alt="Create" width={24} height={20} />
                </div>
              </button>
            </div>
          </div>
          <div className="flex md:hidden mb-4 h-fit px-1  border shadow-btn-sjena rounded-lg  border-hci-modra bg-hci-modra justify-center  text-white">
            <button className="flex self-center">
              <div>Request a transfer</div>
              <div className="pl-2 pt-0.5 ">
                <Image src={CreateImg} alt="Create" width={24} height={20} />
              </div>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-3/4 sm:pr-4">
              <Image src={Karta} alt="Karta" width={824} height={688} />
            </div>
            <div className="sm:w-1/4 flex flex-col border font-semibold border-hci-siva shadow-btn-sjena rounded-xl pb-3 grow ">
              <div className="bg-hci-siva-2 flex items-end py-1 pl-1 mt-2">
                <div className="w-2/3 text-2xl">COAST</div>
                <div>PRICE</div>
              </div>
              <div className="flex pl-1">
                <div className="w-2/3">
                  <div>Baška Voda</div>
                  <div>Brela</div>
                  <div>Podgora</div>
                  <div>Omiš</div>
                  <div>Split</div>
                  <div>Trogir</div>
                </div>
                <div>
                  <div>70€</div>
                  <div>80€</div>
                  <div>80€</div>
                  <div>190€</div>
                  <div>330€</div>
                  <div>380€</div>
                </div>
              </div>
              <div className="bg-hci-siva-2 flex items-end py-1 pl-1 mt-2">
                <div className="w-2/3 text-2xl">BRAČ</div>
              </div>
              <div className="flex pl-1">
                <div className="w-2/3">
                  <div>Sumartin</div>
                  <div>Povlja</div>
                  <div>Pučišća</div>
                  <div>Bol</div>
                  <div>Postira</div>
                </div>
                <div>
                  <div>130€</div>
                  <div>130€</div>
                  <div>170€</div>
                  <div>190€</div>
                  <div>190€</div>
                </div>
              </div>
              <div className="bg-hci-siva-2 flex items-end py-1 pl-1 mt-2">
                <div className="w-2/3 text-2xl">HVAR</div>
              </div>
              <div className="flex pl-1">
                <div className="w-2/3">
                  <div>Vrboska</div>
                  <div>Jelsa</div>
                  <div>Starigrad</div>
                  <div>Hvar</div>
                </div>
                <div>
                  <div>190€</div>
                  <div>190€</div>
                  <div>280€</div>
                  <div>330€</div>
                </div>
              </div>
              <div className="bg-hci-siva-2 flex items-end py-1 pl-1 mt-2">
                <div className="w-2/3 text-2xl">KORČULA</div>
              </div>
              <div className="flex pl-1">
                <div className="w-2/3">
                  <div>Korčula</div>
                  <div>Vela Luka</div>
                </div>
                <div>
                  <div>330€</div>
                  <div>470€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Taxi;

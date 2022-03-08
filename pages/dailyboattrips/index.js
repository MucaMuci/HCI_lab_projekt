import { NextSeo } from "next-seo";
import Image from "next/image";
import SEO from "../../data/next-seo.config";
import Footer from "../../modules/footer/footer";
import HeaderUser from "../../modules/header/header_user";
import Karta from "../../assets/karta_trips.png";
import DownArrow from "../../assets/down_arrow.png";
import CreateImg from "../../assets/create.png";
import PictureSlider from "../../modules/pictureSlider/pictureSlider";
import { povlja_pictures } from "../../const/trips/povlja";
import { pucisca_pictures } from "../../const/trips/pucisca";
import { luke_pictures } from "../../const/trips/luke";
import { vrulja_pictures } from "../../const/trips/vrulja";
import { useState } from "react";
import BoatsSelector from "../../modules/user/trips/boatsSelector";

const DailyBoatTrips = () => {
  const [listOfBoatsClicked, setListOfBoatsClicked] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [boatSelected, setBoatSelected] = useState("Select a boat");
  const [tripPrice, setTripPrice] = useState(350);
  const [maxNumberOfPassengers, setMaxNumberOfPassengers] = useState(9);
  const [explanation, setExplanation] = useState(0);

  function BoatSelectionHandler(name, maxPass) {
    if (name == boatSelected) return;
    setListOfBoatsClicked(false);
    setBoatSelected(name);
    setMaxNumberOfPassengers(maxPass - 1);
    if (numberOfPeople > maxPass - 1) setNumberOfPeople(maxPass - 1);
    if (maxPass >= 6) {
      setExplanation(1);
      setTripPrice(350 + 60);
    } else {
      setTripPrice(350);
      setExplanation(0);
    }
  }

  return (
    <div className="min-h-screen relative">
      <NextSeo
        title={`${SEO.title} -  Daily boat trips`}
        description={SEO.description}
      />
      <HeaderUser />
      <div className="pb-32 flex flex-col justify-center w-full">
        <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>

        <div className="bg-hci-siva-2 flex justify-center py-2 mb-6">
          <div className="text-4xl text-center">
            POVLJA - LUKE - PUČIŠĆA - VRUJA
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col">
          <div>
            <Image src={Karta} alt="Karta" width={800} height={383} />
          </div>

          <div className="flex flex-col md:flex-row justify-around pt-2">
            <div>
              <div className=" text-sm font-medium">Number of people</div>
              <div className="flex px-2 border  border-hci-siva rounded-md bg-hci-siva-2 w-fit">
                <button
                  className={`my-auto text-2xl font-bold ${
                    numberOfPeople !== 1
                      ? "text-hci-modra"
                      : "text-hci-modra-cool"
                  }`}
                  disabled={numberOfPeople === 1}
                  onClick={() => {
                    setNumberOfPeople(numberOfPeople - 1);
                  }}
                >
                  -
                </button>
                <div className="px-4 pt-1">{numberOfPeople}</div>
                <button
                  className={`my-auto text-2xl font-bold ${
                    numberOfPeople !== maxNumberOfPassengers
                      ? "text-hci-modra"
                      : "text-hci-modra-cool"
                  }`}
                  disabled={numberOfPeople === maxNumberOfPassengers}
                  onClick={() => {
                    setNumberOfPeople(numberOfPeople + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-fit">
              <div className="text-sm font-medium ">Select a boat</div>
              <div className="w-[200px]">
                <div className="flex border  border-hci-siva rounded-md bg-hci-siva-2">
                  <button
                    onClick={() => {
                      setListOfBoatsClicked(!listOfBoatsClicked);
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
                    {boatSelected}
                  </div>
                </div>
                <BoatsSelector
                  toggleList={listOfBoatsClicked}
                  setBoat={BoatSelectionHandler}
                />
              </div>
            </div>
            <div className="">
              <div className="text-sm  font-medium">Total price</div>
              <div className="pl-1 font-medium rounded-md  text-lg border  border-hci-siva bg-hci-siva-2 w-[70px] ">
                {tripPrice}€
              </div>
              <div className="text-sm position md:absolute">
                <div>350€ Trip</div>
                {explanation == 1 && <div> + 60€ for {boatSelected}</div>}
              </div>
            </div>
            <div className="flex h-fit px-1 mt-5 border shadow-btn-sjena rounded-lg  border-hci-modra bg-hci-modra justify-center  text-white">
              <button className="flex self-center">
                <div>Make a reservation</div>
                <div className="pl-2 pt-0.5 ">
                  <Image src={CreateImg} alt="Create" width={24} height={20} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-hci-siva-2 flex justify-center mt-10 py-2 mb-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-4xl pl-2 w-full text-left">POVLJA</div>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto flex flex-col-reverse sm:flex-row">
          <div className="pl-2 sm:w-1/2">
            <div className="pb-6">
              Povlja is an old coastal town located in a bay on the north-east
              side of Brač island. The town is mostly known for its rich
              cultural and historical heritage. With so many sights, anyone
              interested in history should be able to find something they would
              like to see. The most popular places to visit are the old catholic
              Benedictine church of St. John the Baptist from 6th century and
              the Benedictine Glagolitic monastery from 11th century.
            </div>
            <div className="font-semibold pb-2">USUAL PLACES OF INTEREST</div>
            <div className="italic">
              Saint John Benedictine Church, Iko restaurant, Fast Food Medeni.
            </div>
          </div>

          <div className="sm:w-1/2">
            <PictureSlider listOfPictures={povlja_pictures} />
          </div>
        </div>

        <div className="bg-hci-siva-2 flex justify-center mt-10 py-2 mb-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-4xl pl-2 w-full text-left">LUKE</div>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto flex  flex-col-reverse sm:flex-row-reverse">
          <div className="pl-2 sm:w-1/2">
            <div className="pb-6">
              Located just few minutes of ride from Povlja, there lies bay Luke.
              This quiet bay has been attracting tourists for years because of
              its clean sea and beutiful nature. Usually, this is the part of
              the trip where people go for a swim and enjoy the moment.
            </div>
            <div className="font-semibold pb-2">USUAL PLACES OF INTEREST</div>
            <div className="italic">restaurant Pipo, lokalna trafostanica.</div>
          </div>

          <div className="sm:w-1/2">
            <PictureSlider listOfPictures={luke_pictures} />
          </div>
        </div>

        <div className="bg-hci-siva-2 flex justify-center mt-10 py-2 mb-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-4xl pl-2 w-full text-left">PUČIŠĆA</div>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto flex  flex-col-reverse sm:flex-row">
          <div className="pl-2 sm:w-1/2">
            <div className="pb-6">
              You cannot say for many towns that they managed to successfully
              defend themselves against pirates and the Ottoman Empire. Well,
              this little town named Pučišća did. Pučišća, also known as
              &quot;Luka Kula&quot;, which translates to &quot;Towerred
              Harbour&quot;, is located on the northern coast of island Brač.
              Made mostly from stone it is an interesting place to visit, not
              only because of its history, but because of its present as well.
              Today city is most known for its masonry school and culture.
            </div>
            <div className="font-semibold pb-2">USUAL PLACES OF INTEREST</div>
            <div className="italic">Kamen krš i deus ex machina.</div>
          </div>

          <div className="sm:w-1/2">
            <PictureSlider listOfPictures={pucisca_pictures} />
          </div>
        </div>

        <div className="bg-hci-siva-2 flex justify-center mt-10 py-2 mb-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-4xl pl-2 w-full text-left">VRUJA</div>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto flex  flex-col-reverse sm:flex-row-reverse">
          <div className="pl-2 sm:w-1/2">
            <div className="pb-6">
              And at the end we make a stop at Vruja. It&apos;s a perfect bland
              of everything Mediterranean has to offer. Usually, tourist here go
              for a one last swim, or just stay on a boat and enjoy the moment,
              adimiring the beuty of late sun hitting the cliffs and sea. From
              there, following the coast we head back home. That part of the
              trip, although is the end, allows tourists to see a little bit of
              coastal area from sea.
            </div>
            <div className="font-semibold pb-2">USUAL PLACES OF INTEREST</div>
            <div className="italic">More.</div>
          </div>

          <div className="sm:w-1/2">
            <PictureSlider listOfPictures={vrulja_pictures} />
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default DailyBoatTrips;

import { useEffect, useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import { useContext } from "react";
import AppContext from "../../../../../../components/AppContext";
import CitiesSelector from "../../../listOfAvailableCities/CitiesSelector";
import Image from "next/image";
import DownArrow from "../../../../../../assets/down_arrow.png";

const TaxiReservationDetails = ({ nextFormStep, currentStep, handleData }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [pickUpTime, setPickUpTime] = useState();
  const [flag, setFlag] = useState(1);
  const [fl, setFl] = useState(0);

  const [listOfAvailableCitiesClicked, setlistOfAvailableCitiesClicked] =
    useState(false);
  const [selectedCity, setselectedCity] = useState("Type location");
  const [price, setPrice] = useState("0€");
  const [estimatedTime, setestimatedTime] = useState("0 minutes");

  const value = useContext(AppContext);

  console.log(flag);
  console.log(fl);
  console.log(value);

  function citySelectionHandler(city, time, price) {
    setselectedCity(city);
    setPrice(price);
    setestimatedTime(time);
    setlistOfAvailableCitiesClicked(!listOfAvailableCitiesClicked);
    setFl(1);
  }

  useEffect(() => {
    if (value.state.info.Flag) {
      setFlag(value.state.info.Flag);
      setFl(value.state.info.Flag);
    } else {
      setFl(0);
      setFlag(0);
    }
  }, []);

  function handleSubmit() {
    if (numberOfPeople && pickUpTime && fl) {
      let data = {};
      data = {
        Destination: value.state.info.City,
        Price: value.state.info.Price,
        EstimatedTravelTime: value.state.info.Time,
        NumberOfPeople: numberOfPeople,
        PickUpTime: pickUpTime,
      };
      console.log(data);
      handleData(data);
      nextFormStep();
    }
  }
  return (
    <div
      className={`flex-col px-5 sm:px-20 md:px-32 py-3 border 
    border-hci-siva rounded-xl w-[80%] mx-auto ${
      currentStep === 0 ? "flex" : "hidden"
    }`}
    >
      {flag == 0 && (
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium text-hci-siva-slova">
              From
            </div>
            <div>Makarska</div>
          </div>
          <div className="w-[170px] flex-1 pt-6">
            <div className="text-sm text-hci-siva-slova ">To:</div>

            <div className="flex border  border-hci-siva rounded-md bg-hci-siva-2">
              <button
                onClick={() => {
                  setlistOfAvailableCitiesClicked(
                    !listOfAvailableCitiesClicked
                  );
                }}
              >
                <Image src={DownArrow} width={20} height={12} alt="DownArrow" />
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
          <div className="w-fit flex-1 pt-6">
            <div className="text-sm  text-hci-siva-slova">Price:</div>
            <div className="pl-1 font-medium rounded-md  text-lg border  border-hci-siva bg-hci-siva-2 ">
              {price}
            </div>
            <div className="text-xs text-center">
              <div>Driver and fuel are</div>
              <div>included in price.</div>
            </div>
          </div>
          <div className="w-fit flex-1 pt-6">
            <div className="text-sm  text-hci-siva-slova">
              Estimated travel time:
            </div>
            <div className="pl-1 font-medium rounded-md  text-lg border  border-hci-siva bg-hci-siva-2 ">
              {estimatedTime}
            </div>
          </div>
        </div>
      )}
      {flag == 1 && (
        <div className="flex ">
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium text-hci-siva-slova">
              From
            </div>
            <div>Makarska</div>
          </div>
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium text-hci-siva-slova">
              To
            </div>
            <div>{value.state.info.City}</div>
          </div>
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium text-hci-siva-slova">
              Estimated time
            </div>
            <div>{value.state.info.Time}</div>
          </div>
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium flex-1 text-hci-siva-slova">
              Price
            </div>
            <div>{value.state.info.Price}</div>
          </div>
        </div>
      )}

      <div className="flex flex-col">
        <div className="text-sm pt-6 font-medium ">Number of people</div>
        <div className="flex px-2 border  border-hci-siva rounded-md bg-hci-siva-2 w-fit">
          <button
            className={`my-auto text-2xl font-bold ${
              numberOfPeople !== 1 ? "text-hci-modra" : "text-hci-modra-cool"
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
              numberOfPeople !== 9 ? "text-hci-modra" : "text-hci-modra-cool"
            }`}
            disabled={numberOfPeople === 9}
            onClick={() => {
              setNumberOfPeople(numberOfPeople + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div className="text-sm pt-6 font-medium ">Pickup time</div>
        <div className="flex">
          <TimePicker
            minuteStep={10}
            showSecond={false}
            onChange={(value) => setPickUpTime(moment(value, "hh:mm"))}
            allowEmpty={false}
          />
        </div>
        <div className="flex text-sm">
          <div className="text-hci-siva-slova">Transfers are&nbsp;</div>
          <div> only &nbsp;</div>
          <div className="text-hci-siva-slova">available for&nbsp;</div>
          <div>current day. &nbsp;</div>
          <div className="text-hci-siva-slova">From &nbsp;</div>
          <div>8:00 - 18:00</div>
        </div>
      </div>
      <div className="pt-2 flex justify-end text-hci-modra ">
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default TaxiReservationDetails;

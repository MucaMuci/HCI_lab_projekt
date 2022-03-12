import { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

const TaxiReservationDetails = ({ nextFormStep, currentStep }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [pickUpTime, setPickUpTime] = useState();

  function handleSubmit() {
    nextFormStep();
    console.log(currentStep);
  }
  return (
    <div
      className={`flex-col px-5 sm:px-20 md:px-32 py-3 border 
    border-hci-siva rounded-xl w-[80%] mx-auto ${
      currentStep === 0 ? "flex" : "hidden"
    }`}
    >
      <div className="flex ">
        <div className="flex-1">
          <div className="text-sm pt-6 font-medium text-hci-siva-slova">
            From
          </div>
          <div>Makarska</div>
        </div>
        <div className="flex-1">
          <div className="text-sm pt-6 font-medium text-hci-siva-slova">To</div>
          <div>Baška Voda</div>
        </div>
        <div className="flex-1">
          <div className="text-sm pt-6 font-medium text-hci-siva-slova">
            Estimated time
          </div>
          <div>20 minutes</div>
        </div>
        <div className="flex-1">
          <div className="text-sm pt-6 font-medium flex-1 text-hci-siva-slova">
            Price
          </div>
          <div>80</div>
        </div>
      </div>
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

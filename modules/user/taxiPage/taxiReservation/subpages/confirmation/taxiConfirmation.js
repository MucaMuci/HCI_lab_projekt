/* import emailjs from "@emailjs/browser"; */

const TaxiConfirmation = ({
  currentStep,
  nextFormStep,
  prevFormStep,
  reservationData,
}) => {
  /* function sendEmail() {
    emailjs
      .sendForm(
        "gmail",
        "template_y1ec6I9",
        reservationData.Email,
        "rZwVgaQj5yjfalvUm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  } */
  function handleSubmit() {
    nextFormStep();
    /* sendEmail(); */
  }
  return (
    <div className=" flex flex-col">
      <div className=" flex py-6 mx-auto w-[80%] justify-center">
        <div className="">
          We have to check if this transfer is possible with us,&nbsp;
        </div>
        <div className="font-black">
          to confirm your transfer request &nbsp;
        </div>
        <button
          className="text-hci-modra font-black"
          onClick={() => {
            handleSubmit();
          }}
        >
          click here!
        </button>
      </div>
      <div
        className={`flex-col px-5 sm:px-20 md:px-32 py-3 border 
    border-hci-siva rounded-xl w-[80%] mx-auto ${
      currentStep === 2 ? "flex" : "hidden"
    }`}
      >
        <div className="flex">
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
            <div>{reservationData.Destination}</div>
          </div>
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium text-hci-siva-slova">
              Estimated time
            </div>
            <div>{reservationData.EstimatedTravelTime}</div>
          </div>
          <div className="flex-1">
            <div className="text-sm pt-6 font-medium flex-1 text-hci-siva-slova">
              Price
            </div>
            <div>{reservationData.Price}</div>
          </div>
        </div>
        <div className="flex pt-6 content-">
          <div className="text-sm text-hci-siva-slova">For&nbsp;</div>
          <div className="">{reservationData.NumberOfPeople}&nbsp;</div>
          <div className="text-sm text-hci-siva-slova">
            people on name &nbsp;
          </div>
          <div className="">{reservationData.FullName}</div>
        </div>
        <div className="flex pt-6">
          <div className="text-sm text-hci-siva-slova">
            contact number&nbsp;
          </div>
          <div>{reservationData.PhoneNumber}</div>
        </div>
        <div className="flex pt-6">
          <div className="text-sm text-hci-siva-slova">
            Contact e-mail&nbsp;
          </div>
          <div>{reservationData.Email}</div>
        </div>
        <div className="flex flex-row text-hci-modra justify-between pt-6 pb-2">
          <button className="" onClick={prevFormStep} type="button">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxiConfirmation;

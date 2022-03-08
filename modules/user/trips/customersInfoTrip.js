import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import hr from "date-fns/locale/hr";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

registerLocale("hr", hr);

const CustomersInfoTrip = ({
  formStep,
  nextFormStep,
  prevFormStep,
  handleData,
}) => {
  function handleSubmit() {
    let data = {};

    if (
      fullName &&
      dateOfBirth &&
      email &&
      phoneNumber &&
      country &&
      city &&
      address
    ) {
      data = {
        FullName: fullName,
        DateOfBirth: new Date(dateOfBirth).toISOString().split("T")[0],
        Email: email,
        PhoneNumber: phoneNumber,
        Country: country,
        City: city,
        Address: address,
      };

      handleData(data);
      nextFormStep();
    } else console.log("Unesite podatke");
  }

  const [fullName, setFullName] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState();

  const [country, setCountry] = useState();

  const [city, setCity] = useState();

  const [address, setAddress] = useState();

  return (
    <div className={formStep === 0 ? "flex" : "hidden"}>
      <div className="flex flex-col px-5 sm:px-20 md:px-32 py-3 border border-hci-siva rounded-xl">
        <div className="text-sm pt-2 font-medium">Full Name</div>
        <input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "
        ></input>

        <div className="text-sm pt-2 font-medium">Date of birth</div>

        <div className="flex  border border-hci-siva rounded-md bg-hci-siva-2 text-lg">
          <DatePicker
            locale={hr}
            dateFormat="dd/MM/yyyy"
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
          />
        </div>

        <div className="text-sm pt-6 font-medium">Email address</div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "
        ></input>

        <div className="text-sm pt-2 font-medium">Phone number</div>
        <div className="flex items-center border border-hci-siva rounded-md bg-hci-siva-2">
          <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />
        </div>

        <div className="text-sm pt-6 font-medium">Country / Region</div>
        <input
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "
        ></input>

        <div className="text-sm pt-2 font-medium">City</div>
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "
        ></input>

        <div className="text-sm pt-2 font-medium">Street address</div>
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          className="border  border-hci-siva rounded-md bg-hci-siva-2  text-lg placeholder-hci-siva-slova "
        ></input>

        <div className="flex flex-row text-hci-modra justify-between pt-6 pb-2">
          <div>
            {formStep < 2 && (
              <>
                {formStep > 0 && (
                  <button className="" onClick={prevFormStep} type="button">
                    Back
                  </button>
                )}
              </>
            )}
          </div>
          <div className=" flex justify-end text-hci-modra ">
            <button onClick={handleSubmit}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersInfoTrip;

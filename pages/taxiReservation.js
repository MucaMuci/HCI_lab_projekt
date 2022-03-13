import { useState } from "react";

import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";

import TaxiFormCard from "../modules/user/taxiPage/taxiReservation/taxiFormCard/TaxiFormCard";
import TaxiReservationDetails from "../modules/user/taxiPage/taxiReservation/subpages/reservationDetails/TaxiReservationDetails";
import TaxiPersonalInformation from "../modules/user/taxiPage/taxiReservation/subpages/personalInformation/TaxiPersonalReservation";
import TaxiConfirmation from "../modules/user/taxiPage/taxiReservation/subpages/confirmation/taxiConfirmation";
import TaxiPayment from "../modules/user/taxiPage/taxiReservation/subpages/payment/taxiPayment";

const TaxiReservation = () => {
  const [formStep, setFormStep] = useState(0);

  const [reservationData, setReservationData] = useState({});

  const handleData = (data) => {
    setReservationData({ ...reservationData, ...data });
  };
  console.log(reservationData);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  return (
    <div className="min-h-screen relative">
      <NextSeo
        title={`${SEO.title} - Taxi reservation`}
        description={SEO.description}
      />
      <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
      <TaxiFormCard currentStep={formStep}>
        {formStep == 0 && (
          <TaxiReservationDetails
            currentStep={formStep}
            nextFormStep={nextFormStep}
            handleData={handleData}
          />
        )}
        {formStep == 1 && (
          <TaxiPersonalInformation
            currentStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
            handleData={handleData}
          />
        )}
        {formStep == 2 && (
          <TaxiConfirmation
            currentStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
            reservationData={reservationData}
          />
        )}
        {formStep == 3 && <TaxiPayment />}
      </TaxiFormCard>
      <div className="pb-32"></div>
    </div>
  );
};

export default TaxiReservation;

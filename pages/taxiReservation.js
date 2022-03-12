import { useState } from "react";

import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";

import TaxiFormCard from "../modules/user/taxiPage/taxiReservation/taxiFormCard/TaxiFormCard";
import TaxiReservationDetails from "../modules/user/taxiPage/taxiReservation/subpages/reservationDetails/TaxiReservationDetails";
import TaxiPersonalInformation from "../modules/user/taxiPage/taxiReservation/subpages/personalInformation/TaxiPersonalReservation";
import TaxiConfirmation from "../modules/user/taxiPage/taxiReservation/subpages/confirmation/taxiConfirmation";

const TaxiReservation = () => {
  const [formStep, setFormStep] = useState(0);

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
          />
        )}
        {formStep == 1 && (
          <TaxiPersonalInformation
            currentStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
          />
        )}
        {formStep == 2 && (
          <TaxiConfirmation
            currentStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
          />
        )}
      </TaxiFormCard>
      <div className="pb-32"></div>
    </div>
  );
};

export default TaxiReservation;

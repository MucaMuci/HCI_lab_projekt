import { useState } from "react";

import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";

import TaxiFormCard from "../modules/user/taxiPage/taxiReservation/taxiFormCard/TaxiFormCard";
import TaxiReservationDetails from "../modules/user/taxiPage/taxiReservation/subpages/reservationDetails/TaxiReservationDetails";

const TaxiReservation = () => {
  const [formStep, setFormStep] = useState(0);
  return (
    <div className="min-h-screen relative">
      <NextSeo
        title={`${SEO.title} - Taxi reservation`}
        description={SEO.description}
      />
      <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
      <TaxiFormCard currentStep={formStep}>
        {formStep == 0 && <TaxiReservationDetails />}
      </TaxiFormCard>
      <div className="pb-32"></div>
    </div>
  );
};

export default TaxiReservation;

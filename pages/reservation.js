import { useState } from "react";
import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import FormCard from "../components/formCard";

import FormCompleted from "../components/formCompleted";
import { NextSeo } from "next-seo";
import SEO from "../data/next-seo.config";
import CustomersInfoUser from "../modules/user/reservation/customersInfoUser";
import ReservationDetailsUser from "../modules/user/reservation/reservationDetailsUser";

const Reservation = (name) => {
    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    const [reservationData, setReservationData] = useState({});

    const handleData = (data) => {
        setReservationData({ ...reservationData, ...data })
    }
    console.log(reservationData)

    return (
        <div className="min-h-screen relative">
            <NextSeo
                title={`${SEO.title} - Reservation`}
                description={SEO.description}
            />

            <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
            <div className="pb-32">
                <FormCard currentStep={formStep} prevFormStep={prevFormStep} >
                    {formStep >= 0 && (
                        <ReservationDetailsUser
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            name={name}
                            handleData={handleData}
                        />
                    )}
                    {formStep >= 1 && (
                        <CustomersInfoUser
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            prevFormStep={prevFormStep}
                            handleData={handleData}
                        />
                    )}
                    {formStep >= 2 && (
                        <PaymentUser
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            prevFormStep={prevFormStep}
                            handleData={handleData}
                        />
                    )}

                    {formStep > 2 && <FormCompleted />}
                </FormCard>
            </div>
            <div className="absolute w-full bottom-0">

            </div>
        </div>
    );
};

export default Reservation;

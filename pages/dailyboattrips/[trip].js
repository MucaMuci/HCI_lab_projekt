import { useState } from "react";
import Footer from "../../modules/footer/footer";
import Header from "../../modules/header/header";
import FormCard from "../../components/formCardTrips";
import { useRouter } from "next/router";
import FormCompleted from "../../components/formCompleted";
import { NextSeo } from "next-seo";
import SEO from "../../data/next-seo.config";
import CustomersInfoTrip from "../../modules/user/trips/customersInfoTrip";
import PaymentTrip from "../../modules/user/trips/paymentTrip";


const Trip = () => {
    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    const [reservationData, setReservationData] = useState({});

    const handleData = (data) => {
        setReservationData({ ...reservationData, ...data })
    }

    const name = useRouter().query.boat



    return (
        <div className="min-h-screen relative">
            <NextSeo
                title={`${SEO.title} - Trip`}
                description={SEO.description}
            />

            <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></div>
            <div className="pb-32">
                <FormCard currentStep={formStep} prevFormStep={prevFormStep} >
                    {formStep >= 0 && (
                        <CustomersInfoTrip
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            name={name}
                            handleData={handleData}
                            reservationData={reservationData}
                        />
                    )}
                    {formStep >= 1 && (
                        <PaymentTrip
                            formStep={formStep}
                            nextFormStep={nextFormStep}
                            prevFormStep={prevFormStep}
                            reservationData={reservationData}
                        />
                    )}

                    {formStep > 1 && <FormCompleted />}
                </FormCard>
            </div>
            <div className="absolute w-full bottom-0">

            </div>
        </div>
    );
};

export default Trip;
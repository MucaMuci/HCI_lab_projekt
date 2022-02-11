import { useState } from "react"
import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import FormCard from "../components/formCard";
import ReservationDetails from "../components/Forms/reservationDetails";
import CustomersInfo from "../components/Forms/customersInfo";
import Payment from "../components/Forms/payment";
import FormCompleted from "../components/formCompleted";
import { NextSeo } from "next-seo";
import SEO from '../data/next-seo.config';

const MakeAReservation = () => {
    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div className="min-h-screen">
            <NextSeo {...SEO} />
            <Header />
            <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">
            </div>

            <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
                {formStep >= 0 && (
                    <ReservationDetails formStep={formStep} nextFormStep={nextFormStep} />
                )}
                {formStep >= 1 && (
                    <CustomersInfo formStep={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep} />
                )}
                {formStep >= 2 && (
                    <Payment formStep={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep} />
                )}

                {formStep > 2 && <FormCompleted />}
            </FormCard>

            <Footer />
        </div>
    )
}

export default MakeAReservation
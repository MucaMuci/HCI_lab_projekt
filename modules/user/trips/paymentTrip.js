import PaypalImg from "../../../assets/paypal.png"
import RevolutImg from "../../../assets/revolut.png"
import VisaImg from "../../../assets/visa.png"
import Image from "next/image"
import { addDoc, collection, document, setDoc, doc, query, where, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "../../../firebase/initFirebase"

//doc(db, "Dates").document(reservationData.date).collection("Boats")


const PaymentTrip = ({ formStep, nextFormStep, prevFormStep, reservationData }) => {
    function handleSubmit() {
        saveReservation();

        nextFormStep();
    }



    const saveReservation = async () => {

        try {
            const boatRef = doc(db, "Boats", reservationData.BoatName)
            await setDoc(doc(db, "Dates", reservationData.StartDate, "Boats", reservationData.BoatName), reservationData)
            await updateDoc(boatRef, {
                Dates: arrayUnion(reservationData.StartDate)
            })
            await addDoc(collection(db, "Users", reservationData.Email, "Reservations"), reservationData)
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={formStep === 1 ? "flex" : "hidden"}>
            <div className="flex flex-col px-5 sm:px-20 md:px-32 border border-hci-siva rounded-xl">
                <div className="px-4 pt-10 text-xl font-semibold">
                    Continue with:
                </div>
                <div className="flex pt-8">
                    <button onClick={handleSubmit} className="px-1 sm:px-4">
                        <Image src={PaypalImg}
                            width={300}
                            height={300}
                            alt="Paypal" />
                    </button>
                    <button onClick={handleSubmit} className="px-1 sm:px-4">
                        <Image src={RevolutImg}
                            width={300}
                            height={300}
                            alt="Revolut" />
                    </button>
                    <button onClick={handleSubmit} className="px-1 sm:px-4">
                        <Image src={VisaImg}
                            width={300}
                            height={300}
                            alt="Visa" />
                    </button>
                </div>

                <div className="flex flex-row text-hci-modra justify-between pt-6 pb-2 px-4">
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

                </div>
            </div>
        </div>

    )
}

export default PaymentTrip
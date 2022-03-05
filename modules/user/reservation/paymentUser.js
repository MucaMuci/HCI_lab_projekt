import PaypalImg from "../../../assets/paypal.png"
import RevolutImg from "../../../assets/revolut.png"
import VisaImg from "../../../assets/visa.png"
import Image from "next/image"
import { addDoc, collection, document, setDoc, doc, query, where } from "firebase/firestore"
import { db } from "../../../firebase/initFirebase"

//doc(db, "Dates").document(reservationData.date).collection("Boats")


const PaymentUser = ({ formStep, nextFormStep, prevFormStep, reservationData }) => {
    function handleSubmit() {
        saveReservation();

        nextFormStep();
    }



    const saveReservation = async () => {
        if (reservationData.NeedDriver == "Yes")
            try {
                console.log(reservationData)
                await setDoc(doc(db, "Dates", reservationData.StartDate, "Boats", reservationData.BoatName), reservationData)
            }
            catch (error) {
                console.log(error)
            }
        else
            try {
                await setDoc(doc(db, "Dates", reservationData.StartDate, "Boats", reservationData.BoatName), {
                    AdditionalEquipment: reservationData.AdditionalEquipment,
                    Address: reservationData.Address,
                    CheckOutPlace: reservationData.CheckOutPlace,
                    City: reservationData.City,
                    Country: reservationData.Country,
                    DateOfBirth: reservationData.DateOfBirth,
                    Email: reservationData.Email,
                    FullName: reservationData.FullName,
                    NeedDriver: reservationData.NeedDriver,
                    NumberOfPeolple: reservationData.NumberOfPeolple,
                    PhoneNumber: reservationData.PhoneNumber,
                    PickUpPlace: reservationData.PickUpPlace,
                    PickUpTime: reservationData.PickUpTime,
                    StartDate: reservationData.StartDate,
                    IssuingCountry: reservationData.IssuingCountry,
                    Category: reservationData.Category,
                    LicenceNumber: reservationData.LicenceNumber
                })
            }
            catch (error) {
                console.log(error)
            }
    }

    return (
        <div className={formStep === 2 ? "flex" : "hidden"}>
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
                        {formStep < 3 && (
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

export default PaymentUser
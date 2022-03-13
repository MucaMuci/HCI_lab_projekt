import PaypalImg from "../../../../../../assets/paypal.png";
import RevolutImg from "../../../../../../assets/revolut.png";
import VisaImg from "../../../../../../assets/visa.png";
import Image from "next/image";
import { useRouter } from "next/router";

const TaxiPayment = ({ currentStep }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-5 sm:px-20 md:px-32 border border-hci-siva rounded-xl">
      <div className="pt-6">
        Thank you, you will recieve an e-mail update from us!
      </div>
      <div className="pt-6">
        If transfer is possible, you will be provided in email with a link where
        you will be able to complete the payment and confirm the reservation. We
        support:
      </div>
      <div className="flex pt-8">
        <div className="px-1 sm:px-4">
          <Image src={PaypalImg} width={300} height={300} alt="Paypal" />
        </div>
        <div className="px-1 sm:px-4">
          <Image src={RevolutImg} width={300} height={300} alt="Revolut" />
        </div>
        <div className="px-1 sm:px-4">
          <Image src={VisaImg} width={300} height={300} alt="Visa" />
        </div>
      </div>
      <button className="pt-6 text-hci-modra" onClick={() => router.push("/")}>
        Back to home
      </button>

      <div className="flex flex-row text-hci-modra justify-between pt-6 pb-2 px-4"></div>
    </div>
  );
};

export default TaxiPayment;

import { NextSeo } from "next-seo";
import SEO from '../data/next-seo.config';
import Footer from "../modules/footer/footer";
import HeaderUser from "../modules/header/header_user";
import Image from "next/image";
import HomeImg from "../assets/home.png"
import MyReservations from "../modules/reservations/myReservations";
import PastRides from "../modules/reservations/pastRides";
import FreeBoats from "../modules/boats/freeBoats";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";



const Home = () => {

  return (
    <div className="min-h-screen relative">
      <NextSeo title={`${SEO.title}`} description={SEO.description} />
      <HeaderUser />
      <div className="pb-32 flex flex-col w-full">
        <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">
        </div>

        <div className="max-w-5xl mx-auto pb-7">
          <Image src={HomeImg}
            alt="Home" />
        </div>
        <div className="bg-hci-siva-2 flex justify-center mt-10 my-6 py-2">
          <div className="text-4xl">
            MY RESERVATIONS
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MyReservations />
        </div>

        <div className="bg-hci-siva-2 flex justify-center py-2 mt-10 my-6">
          <div className="text-4xl">
            TODAY&apos;S FREE BOATS
          </div>
        </div>


        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center">

          <div className="block">
            <button className="sm:hidden px-2 mr-10 h-fit bg-hci-gradient rounded-full">
              <Image
                src={LeftArrow}
                height={13}
                width={13}
                alt="LeftArrow"
              />
            </button>

            <button className="sm:hidden px-2 ml-10 h-fit bg-hci-gradient rounded-full">
              <Image
                src={RightArrow}
                height={13}
                width={13}
                alt="RightArrow"
              />
            </button>

          </div>

          <button className="sm:block hidden px-2 mr-10 h-fit bg-hci-gradient rounded-full">
            <Image
              src={LeftArrow}
              height={13}
              width={13}
              alt="LeftArrow"
            />
          </button>

          <FreeBoats />

          <button className="sm:block hidden px-2 ml-10 h-fit bg-hci-gradient rounded-full">
            <Image
              src={RightArrow}
              height={13}
              width={13}
              alt="RightArrow"
            />
          </button>
        </div>


        <div className="bg-hci-siva-2 flex justify-center py-2 mt-10 my-6">
          <div className="text-4xl">
            PAST RIDES
          </div>
        </div>

        <div className="max-w-5xl mx-auto">

          <PastRides />
        </div>

      </div>

      <div className='absolute w-full bottom-0'>
        <Footer />
      </div>
    </div >
  )
}

export default Home;
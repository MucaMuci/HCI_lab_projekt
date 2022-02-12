import Image from "next/image";
import Footer from "../modules/footer/footer";
import HeaderUser from "../modules/header/header_user";
import AboutUs1 from "../assets/aboutUs1.png"
import AboutUs2 from "../assets/aboutUs2.png"
import AboutUs3 from "../assets/aboutUs3.png"
import Vrulja from "../assets/vrulja.png"
import Brela from "../assets/brela.png"
import Nugal from "../assets/nugal.png"
import Postira from "../assets/postira.png"
import Bol from "../assets/bol.png"
import Pucisca from "../assets/pucisca.png"
import Hvar from "../assets/hvar.png"
import Jelsa from "../assets/jelsa.png"
import Vrboska from "../assets/vrboska.png"
import StariGrad from "../assets/stari_grad.png"
import { NextSeo } from "next-seo";
import SEO from '../data/next-seo.config';


const AboutUs = () => {
    return (
        <div>
            <NextSeo title={`${SEO.title} - About Us`} />
            <HeaderUser />
            <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">
            </div>

            <div className="flex flex-col max-w-4xl mx-auto">
                <div className="flex pb-10">
                    <div className="flex flex-col flex-1">
                        <div className="text-3xl pb-4">
                            WHO ARE WE?
                        </div>
                        <div className="text-xl">
                            Meduza is a boat rental company settled in Makarska.
                            We are engaged in boat rental activities since 2009 and
                            currently we have 5 different boats up for a daily/weekly
                            rent. We also offer one day trips with a driver, and
                            taxi service.
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1">
                        <Image
                            src={AboutUs1}
                            alt="img1" />
                    </div>
                </div>

                <div className="flex pb-10">
                    <div className="flex flex-1 flex-col">
                        <div className="text-3xl pb-4">
                            WHY BOOK WITH US?
                        </div>
                        <div className="text-xl">
                            We can offer you speed boats with an open top and spacious
                            sun deck, or smaller boats, which are easier to handle and
                            allow you to reach even the smallest bays. You can always
                            check other customers experiences on the Reviews page.
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1">
                        <Image
                            src={AboutUs2}
                            alt="img2" />
                    </div>
                </div>

                <div className="flex pb-10">
                    <div className="hidden md:flex flex-1 pr-2">
                        <Image
                            src={AboutUs3}
                            alt="img3" />
                    </div>
                    <div className="flex flex-col flex-1">

                        <div className="text-3xl pb-2">
                            HOW DO I BOOK A BOAT?
                        </div>
                        <div className="flex flex-col text-xl">
                            <div>
                                You can book three different types of service:
                            </div>
                            <div>1. To rent a specific boat visit Boats subpage.</div>
                            <div>2. To rent a daily trip visit Daily boat trips subpage.</div>
                            <div>3. To rent taxi service visit Taxi subpage.</div>

                        </div>
                    </div>

                </div>

                <div className="flex flex-col pb-10">
                    <div className="text-3xl pb-6">
                        WHAT ARE THE MOST POPULAR DESTINATIONS?
                    </div>
                    <div className="flex">
                        <div className="">
                            <Image src={Vrulja} alt="Vrulja" />
                        </div>
                        <div className="px-2">
                            <Image src={Brela} alt="Brela" />
                        </div>
                        <div>
                            <Image src={Nugal} alt="Nugal" />
                        </div>
                    </div>
                    <div className="flex text-center text-2xl pb-6">
                        <div className="flex-1">
                            Vrulja
                        </div>
                        <div className="flex-1">
                            Brela
                        </div>
                        <div className="flex-1">
                            Nugal
                        </div>
                    </div>
                    <div className="flex">
                        <div className="">
                            <Image src={Postira} alt="Postira" />
                        </div>
                        <div className="px-2">
                            <Image src={Bol} alt="Bol" />
                        </div>
                        <div>
                            <Image src={Pucisca} alt="Pucisca" />
                        </div>
                    </div>
                    <div className="flex text-center text-2xl pb-6">
                        <div className="flex-1">
                            Postira
                        </div>
                        <div className="flex-1">
                            Bol
                        </div>
                        <div className="flex-1">
                            Pučišća
                        </div>
                    </div>
                    <div>
                        <Image src={Hvar} alt="Hvar" />
                    </div>
                    <div className="text-center text-2xl pb-6">
                        Hvar
                    </div>

                    <div className="flex">
                        <div className="">
                            <Image src={Jelsa} alt="Jelsa" />
                        </div>
                        <div className="px-2">
                            <Image src={Vrboska} alt="Vrboska" />
                        </div>
                        <div>
                            <Image src={StariGrad} alt="StariGrad" />
                        </div>
                    </div>
                    <div className="flex text-center text-2xl ">
                        <div className="flex-1">
                            Jelsa
                        </div>
                        <div className="flex-1">
                            Vrboska
                        </div>
                        <div className="flex-1">
                            Stari Grad
                        </div>
                    </div>
                </div>

                <div className="flex text-3xl pb-4">
                    <div className="md:w-3/5">
                        CAN I STILL RENT A BOAT WITHOUT A BOAT&apos;S LICENCE?
                    </div>
                    <div className="hidden md:flex w-2/5 pl-16">
                        WHAT CURRENCIES DO WE ACCEPT?
                    </div>
                </div>

                <div className="flex text-xl pb-10">
                    <div className="md:w-3/5">
                        You can not drive our speedboats without at least
                        Croatian B category boat&apos;s licence or foreign boat&apos;s
                        licence for boat&apos;s up to 12 meters.
                        If you do not have an adequate licence, you can
                        always rent a boat with driver.
                    </div>
                    <div className="hidden md:flex w-2/5 pl-16">
                        For now we only accept Euro and
                        Croatian Kuna.
                    </div>
                </div>
                <div className="flex md:hidden flex-col flex-1 pb-10">

                    <div className="text-3xl pb-4">
                        WHAT CURRENCIES DO WE ACCEPT?
                    </div>

                    <div className="text-xl">
                        For now we only accept Euro and
                        Croatian Kuna.
                    </div>
                </div>
                <div className="flex flex-col flex-1 pb-10">

                    <div className="text-3xl pb-4">
                        “I HAVE A QUESTION AND WANT TO SPEAK TO A REAL HUMAN”
                    </div>

                    <div className="text-xl">
                        Feel free to contact us via mail, message or on any social media listed below.
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default AboutUs;
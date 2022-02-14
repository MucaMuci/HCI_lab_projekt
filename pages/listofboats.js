
import { NextSeo } from "next-seo";
import Boats from "../modules/boats/boats";
import Filter from "../modules/filter/filter";
import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import SEO from '../data/next-seo.config';
import WhitePlus from "../assets/white_plus.png";
import Image from "next/image";

const ListOfBoats = () => {
    return (
        <div className="min-h-screen relative">
            <NextSeo title={`${SEO.title} - List of boats`} description={SEO.description} />
            <Header />
            <div className="pb-32">
                <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">

                </div>
                <div className="bg-hci-siva-2 flex justify-center py-2">
                    <div className="text-4xl">
                        SEARCH BY
                    </div>
                </div>
                <div className=" flex max-w-5xl mx-auto justify-center pt-5 pb-10">
                    <Filter />
                </div>
                <div className="flex max-w-5xl mx-auto justify-center">
                    <Boats />
                </div>
                <div className="max-w-5xl mx-auto flex justify-center">

                    <button className='border shadow-btn-sjena rounded-lg border-hci-modra bg-hci-modra items-center w-fit px-3 my-6  flex '>
                        <div className='flex text-white justify-center pr-2'>
                            Add another boat
                        </div>
                        <div className='pt-1'>
                            <Image
                                src={WhitePlus}
                                width={18}
                                height={18}
                                alt="WhitePlus"
                            />
                        </div>
                    </button>
                </div>
            </div>
            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default ListOfBoats;
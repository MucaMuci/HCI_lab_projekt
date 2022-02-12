import { NextSeo } from "next-seo";
import Boats from "../modules/boats/boats2";
import Filter from "../modules/filter/filter";
import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import SEO from '../data/next-seo.config';

const BoatsUser = () => {
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
                <div className=" flex max-w-6xl mx-auto justify-center pt-5 pb-10">
                    <Filter />
                </div>
                <div className="flex max-w-6xl mx-auto justify-center">
                    <Boats />
                </div>
            </div>
            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default BoatsUser;
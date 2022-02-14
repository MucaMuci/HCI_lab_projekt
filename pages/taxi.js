import { NextSeo } from "next-seo";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import SEO from '../data/next-seo.config';
import Footer from "../modules/footer/footer";
import HeaderUser from "../modules/header/header_user";
import Image from "next/image";
import Map from "../public/map.png"

const Taxi = () => {

    return (
        <div className="min-h-screen relative">
            <NextSeo title={`${SEO.title} -  Taxi`} description={SEO.description} />
            <HeaderUser />
            {/* <div className="pb-32 flex justify-center w-full min-h-screen relative">
                <div className="absolute z-[1]">
                    <Image src={Map}
                        width={1030}
                        height={860}
                    />
                </div>
            </div> */}

            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div >
    )
}

export default Taxi;
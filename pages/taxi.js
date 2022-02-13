import { NextSeo } from "next-seo";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import SEO from '../data/next-seo.config';
import Footer from "../modules/footer/footer";
import HeaderUser from "../modules/header/header_user";

const Taxi = () => {

    return (
        <div>
            <NextSeo title={`${SEO.title} -  Taxi`} description={SEO.description} />
            <HeaderUser />
            <div className="pb-32 flex justify-center w-full">
                fucking ne radi

            </div>

            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div >
    )
}

export default Taxi;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect } from "react";
import LeftArrowImage from "../../assets/left_arrow.png"
import RightArrowImage from "../../assets/right_arrow.png"

function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", height: "30px", width: "30px" }}
            onClick={onClick}
        />
        /* <Image
            src={LeftArrowImage}
        /> */
    );
}
function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", height: "30px", width: "30px" }}
            onClick={onClick}
        />
        /*  <Image
             className={className}
             src={RightArrowImage}
             onClick={onClick}
         /> */
    );
}
const PictureSlider = ({ listOfPictures }) => {

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />
    }

    return (
        <div>
            <Slider {...sliderSettings}>
                <div className="bg-red-400">
                    5
                </div>
                <div className="bg-green-400">
                    6
                </div>

                {/* {
                    listOfPictures.map((e, index) => (
                        <div className="flex w-auto" key={index}>
                            <Image
                                src={e}
                                height={40}
                                width={40}
                            />
                        </div>
                    ))
                } */}

            </Slider>
        </div>
    );
}

export default PictureSlider;
import { NextSeo } from "next-seo";
import SEO from '../data/next-seo.config';
import Footer from "../modules/footer/footer";
import HeaderUser from "../modules/header/header_user"
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import UseUser from "../firebase/useUser";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/initFirebase";
import ReviewList from "../modules/reviews/reviewList";

const Reviews = () => {
    const { user, useUser } = UseUser();

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleText = (event) => {
        setText(event.target.value)
    }

    const [date, setDate] = useState(`${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}.`)

    const [text, setText] = useState("");


    const shareReview = async () => {
        try {
            if (rating != 0 && text != "") {
                const docRef = await addDoc(collection(db, "Reviews"), {
                    date: date,
                    rating: rating,
                    email: user.email,
                    text: text
                })

                setRating(0);
                setText("");
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="min-h-screen relative">
            <NextSeo title={`${SEO.title} - Reviews`} description={SEO.description} />
            <HeaderUser />
            <div className="pb-32">
                <div className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white">
                </div>
                <div className=" flex flex-col max-w-5xl mx-auto justify-center pt-5 pb-10 ">
                    <div className="px-5 py-3 border shadow-btn-sjena w-full flex flex-col rounded-lg mb-10">
                        <div className="flex justify-between pb-2">
                            <div>
                                {date}
                            </div>
                            <div>
                                <StarRatings rating={rating} changeRating={handleRating} numberOfStars={5} starRatedColor="#ECCD2F" starHoverColor="#ECCD2F" starDimension="30px" />
                            </div>
                            {user != undefined && <div>
                                <div></div>
                                <div>{user.email}</div>
                            </div>}
                        </div>
                        <div className="border-t border-t-black w-full pb-2">
                        </div>
                        <textarea value={text} onChange={handleText} className="bg-hci-svijetlo-siva py-1 rounded-lg px-1 text-black " placeholder="Write your experience" />

                        <button onClick={shareReview} className="self-end text-hci-modra pt-1">
                            SHARE
                        </button>
                    </div>

                    <ReviewList />

                </div>
            </div>
            <div className='absolute w-full bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default Reviews;
import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import UseUser from "../firebase/useUser";

const Review = ({ date, rating, email, text }) => {

    const { user, useUser } = UseUser();

    return (
        <div className="px-5 py-3 border shadow-btn-sjena w-full flex flex-col rounded-lg mb-6">
            <div className="flex justify-between pb-2">
                <div>
                    {date}
                </div>
                <div>
                    <StarRatings rating={rating} numberOfStars={5} starRatedColor="#ECCD2F" starHoverColor="#ECCD2F" starDimension="30px" />
                </div>
                <div>
                    <div></div>
                    <div>{email}</div>
                </div>
            </div>
            <div className="border-t border-t-black w-full pb-2">
            </div>
            <div>
                {text}
            </div>
            {user != undefined && user.email == email &&
                <button className="self-end text-hci-modra pt-1">
                    EDIT
                </button>
            }

        </div>

    )
}

export default Review
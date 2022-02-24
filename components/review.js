import { async } from "@firebase/util";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { db } from "../firebase/initFirebase";
import UseUser from "../firebase/useUser";

const Review = ({ date, rating, email, text, id }) => {

    const { user, useUser } = UseUser();

    const [edit, setEdit] = useState(0);

    const [editText, setText] = useState(text);

    const [editDate, setDate] = useState(`${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}.`)

    const handleText = (event) => {
        setText(event.target.value)
    }

    const [editRating, setRating] = useState(rating)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const openEditScreen = () => {
        setEdit(1);
    }

    const cancel = () => {
        setEdit(0);
    }

    const editReview = async () => {

        const updateReview = doc(db, "Reviews", id);
        await updateDoc(updateReview, {
            text: editText,
            rating: editRating,
            date: editDate
        })
        setEdit(0);
    }

    const deleteReview = async () => {

        await deleteDoc(doc(db, "Reviews", id));
        setEdit(0);
    }


    return (
        <>
            {edit == 0 &&
                <div className="px-5 py-3 border shadow-btn-sjena w-full flex flex-col rounded-lg mb-6">
                    <div className="flex justify-between pb-2">
                        <div className="">
                            {date}
                        </div>
                        <div className="flex-1 text-right">
                            <StarRatings rating={rating} numberOfStars={5} starRatedColor="#ECCD2F" starHoverColor="#ECCD2F" starDimension="30px" />
                        </div>
                        <div className="flex-1 text-right">
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
                        <div className="self-end">
                            <button onClick={deleteReview} className=" text-red-500 pt-1 mr-2">
                                DELETE
                            </button>
                            <button onClick={openEditScreen} className="self-end text-hci-modra pt-1">
                                EDIT
                            </button>
                        </div>

                    }

                </div>}
            {
                edit == 1 &&
                <div className="px-5 py-3 border shadow-btn-sjena w-full flex flex-col rounded-lg mb-6">
                    <div className="flex justify-between pb-2">
                        <div className="">
                            {date}
                        </div>
                        <div className="flex-1 text-right">
                            <StarRatings rating={editRating} changeRating={handleRating} numberOfStars={5} starRatedColor="#ECCD2F" starHoverColor="#ECCD2F" starDimension="30px" />
                        </div>
                        <div className="flex-1 text-right">
                            <div></div>
                            <div>{email}</div>
                        </div>
                    </div>
                    <div className="border-t border-t-black w-full pb-2">
                    </div>
                    <textarea value={editText} onChange={handleText} className="bg-hci-svijetlo-siva py-1 rounded-lg px-1 text-black " placeholder="Write your experience" />
                    {user != undefined && user.email == email &&
                        <div className=" self-end">
                            <button onClick={cancel} className=" text-red-500 pt-1 pr-2">
                                CANCEL
                            </button>
                            <button onClick={editReview} className=" text-hci-modra pt-1">
                                SHARE
                            </button>
                        </div>

                    }

                </div>
            }
        </>
    )
}

export default Review
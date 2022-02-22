import { collection, getDoc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Review from "../../components/review"
import { db } from "../../firebase/initFirebase"



const ReviewList = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        let ListOfReviews = []
        getDocs(collection(db, "Reviews")).then((snapshot) => {
            snapshot.docs.forEach(doc => {
                ListOfReviews.push({ ...doc.data() })
            })
            setReviews(ListOfReviews)
        })
    })

    return (
        <div>
            <div className="flex flex-col">
                {
                    reviews.map(el => (

                        <Review
                            date={el.date}
                            rating={el.rating}
                            email={el.email}
                            text={el.text} />

                    ))
                }
            </div>
        </div>
    )
}

export default ReviewList
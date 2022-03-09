import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import FreeBoat from "../../components/freeBoat"
import { freeBoats } from "../../const/freeBoatList"
import { db } from "../../firebase/initFirebase";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const FreeBoats = () => {

    const [boats, setBoats] = useState([]);

    useEffect(() => {
        const ListOfBoats = [];
        getDocs(collection(db, "Boats")).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                // boats.push({ ...doc.data(), id: doc.id })
                console.log(doc.data())
                if (!doc.data().Dates.includes(new Date().toISOString().split('T')[0]))
                    ListOfBoats.push({ ...doc.data(), id: doc.id });
            });
            setBoats(ListOfBoats);


        });
    }, []);



    return (
        <div className="max-w-3xl">
            <div className="flex flex-col">
                <Swiper
                    cssMode={true}
                    className="w-screen sm:w-auto"
                    pagination={true}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {boats.map(el => (

                        <SwiperSlide className="flex justify-center">
                            <FreeBoat
                                name={el.id}
                                price={el.Price}
                                maxpassengers={el.MaxPassengers}
                                length={el.Length}
                                engineHP={el.EngineHP} />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default FreeBoats;
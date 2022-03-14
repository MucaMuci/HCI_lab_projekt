import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import MyReservation from "../../components/myReservation";
import { myReservations } from "../../const/myReservationList";
import { db } from "../../firebase/initFirebase";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import UseUser from "../../firebase/useUser";

const MyReservations = () => {

  const { user } = UseUser()
  const [boats, setBoats] = useState([]);
  const [email, setEmail] = useState();

  useEffect(() => {
    const ListOfBoats = [];
    getDocs(collection(db, `Users/${email}/Reservations`)).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        ListOfBoats.push({ ...doc.data(), id: doc.id });
      });
      setBoats(ListOfBoats);


    });

  }, email);

  if (user != undefined && email != user.email)
    setEmail(user.email)

  console.log(boats)

  if (user)
    return (
      <div>
        <div className="flex flex-col">

          <Swiper
            cssMode={true}
            className="w-screen sm:w-auto"
            navigation={true}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
          >
            {boats.map((el) => (
              <SwiperSlide className="flex justify-center">
                <MyReservation
                  key={el.id}
                  date={el.StartDate}
                  name={el.BoatName}
                  pickUpTime={el.PickUpTime}
                  pickUpPlace={el.PickUpPlace}
                  checkOutPlace={el.CheckOutPlace}
                  numberOfPeople={el.NumberOfPeople}
                  additionalEquipment={el.AdditionalEquipment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >
    );
  else return (<></>)
};

export default MyReservations;

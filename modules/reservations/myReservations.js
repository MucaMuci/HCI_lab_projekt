import MyReservation from "../../components/myReservation";
import { myReservations } from "../../const/myReservationList";

const MyReservations = () => {
  return (
    <div>
      <div className="flex flex-col">
        {myReservations.map((el) => (
          <MyReservation
            key={el.name}
            date={el.date}
            name={el.name}
            hasYetToPay={el.hasYetToPay}
            pickUpTime={el.pickUpTime}
            pickUpPlace={el.pickUpPlace}
            checkOutTime={el.checkOutTime}
            checkOutPlace={el.checkOutPlace}
            additionalEquipment={el.additionalEquipment}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReservations;

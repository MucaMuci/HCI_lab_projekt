import PastRide from "../../components/pastRide";
import { pastRides } from "../../const/pastRidesList";

const PastRides = () => {
  return (
    <div>
      <div className="flex flex-col">
        {pastRides.map((el) => (
          <PastRide
            key={el.name}
            date={el.date}
            name={el.name}
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

export default PastRides;

import Reservation from "../../components/reservation";
import { reservations } from '../../const/reservationList';

const Reservations = () => {
    return (
        <div>
            <div className="flex flex-col">
                {reservations.map((el) => (
                    <Reservation

                        image={el.image}
                        name={el.name}
                        hasYetToPay={el.hasYetToPay}
                        pickUpTime={el.pickUpTime}
                        pickUpPlace={el.pickUpPlace}
                        needsSkipper={el.needsSkipper}
                        additionalEquipment={el.additionalEquipment}
                        phoneNumber={el.phoneNumber}
                    />
                ))}
            </div>
        </div>
    );
}

export default Reservations;
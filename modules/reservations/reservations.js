import Reservation from "../../components/reservation";
import { reservations } from '../../const/reservationList'

const Reservations = () => {
    return (
        <div>
            <div>
                {reservations.map((el) => (
                    <Reservation
                        name={el.name}
                        customersName={el.customersName}
                        phoneNumber={el.phoneNumber}
                        payed={el.payed}
                        hasYetToPay={el.hasYetToPay}
                        pickUpTime={el.pickUpTime}
                        pickUpPlace={el.pickUpPlace}
                        needsSkipper={el.needsSkipper}
                        additionalEquipment={el.additionalEquipment}
                        comment={el.comment}
                    />
                ))}
            </div>
        </div>
    );
}

export default Reservations;
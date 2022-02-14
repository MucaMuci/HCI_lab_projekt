import FreeBoat from "../../components/freeBoat"
import { freeBoats } from "../../const/freeBoatList"

const FreeBoats = () => {
    return (
        <div>
            <div className="flex flex-col">
                {freeBoats.map(el => (
                    <FreeBoat
                        name={el.name}
                        price={el.price}
                        maxpassengers={el.maxpassengers}
                        length={el.length}
                        engineHP={el.engineHP} />
                ))}
            </div>
        </div>
    )
}

export default FreeBoats;
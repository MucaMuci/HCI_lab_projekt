import Boat from "../../components/boatUser"
import { boats } from "../../const/boatList"

const Boats = () => {
    return (
        <div>
            <div className="flex flex-col">
                {boats.map(el => (
                    <Boat
                        name={el.name}
                        price={el.price}
                        maxpassengers={el.maxpassengers}
                        length={el.length}
                        currentstatus={el.currentstatus}
                        engineHP={el.engineHP}
                        soonestFreeDate={el.soonestFreeDate} />
                ))}
            </div>
        </div>
    )
}

export default Boats;
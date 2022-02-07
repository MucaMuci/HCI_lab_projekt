import Boat from "../../components/boat"
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
                        currentstatus={el.currentstatus} />
                ))}
            </div>
        </div>
    )
}

export default Boats;
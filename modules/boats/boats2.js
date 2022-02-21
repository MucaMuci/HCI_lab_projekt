import Boat from "../../components/boatUser"
//import { boats } from "../../const/boatList"

import { db } from '../../firebase/initFirebase'
import { doc, getDocs, collection } from "firebase/firestore"
import { useUser } from '../../firebase/useUser'
import { async } from "@firebase/util"
import { useEffect, useRef, useState } from "react"

const Boats = () => {

    const [boats, setBoats] = useState([])

    useEffect(() => {
        let ListOfBoats = []
        getDocs(collection(db, "Boats")).then((snapshot) => {
            snapshot.docs.forEach(doc => {
                // boats.push({ ...doc.data(), id: doc.id })
                ListOfBoats.push({ ...doc.data(), id: doc.id })
            })
            setBoats(ListOfBoats)
        })
    }, [])



    return (
        <div>

            <div className="flex flex-col" >
                {/* {boats.map(el => (
                    <Boat
                        name={el.name}
                        price={el.price}
                        maxpassengers={el.maxpassengers}
                        length={el.length}
                        currentstatus={el.currentstatus}
                        engineHP={el.engineHP}
                        soonestFreeDate={el.soonestFreeDate} />
                ))} */}




                {boats.map(el => (
                    <Boat
                        name={el.id}
                        price={el.Price}
                        maxpassengers={el.MaxPassengers}
                        length={el.Length}
                        engineHP={el.EngineHP} />

                ))}
            </div>
        </div>
    )
}

export default Boats;
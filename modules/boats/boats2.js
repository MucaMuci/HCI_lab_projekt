import Boat from "../../components/boatUser";
//import { boats } from "../../const/boatList"

import { db } from "../../firebase/initFirebase";
import { doc, getDocs, collection } from "firebase/firestore";
import { useUser } from "../../firebase/useUser";
import { async } from "@firebase/util";
import { useEffect, useRef, useState } from "react";

const Boats = ({ MPFilter, NSFilter, BLFilter, BHPFilter }) => {
  const [boats, setBoats] = useState([]);
  const [copy, setCopy] = useState([]);

  //boat.id.toLowerCase().contains(NSFilter.toLowerCase())

  useEffect(() => {
    const ListOfBoats = [];
    getDocs(collection(db, "Boats")).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // boats.push({ ...doc.data(), id: doc.id })
        ListOfBoats.push({ ...doc.data(), id: doc.id });
      });
      setBoats(ListOfBoats);
      setCopy(ListOfBoats);
    });
  }, []);

  useEffect(() => {
    const passengerFilter = (boat) => boat.MaxPassengers >= MPFilter;
    const nameFilter = (boat) =>
      boat.id.toLowerCase().includes(NSFilter.toLowerCase());
    const lengthFilter = (boat) =>
      BLFilter
        ? boat.Length >= BLFilter - 0.3 && boat.Length <= BLFilter + 0.3
        : {};
    const hpFilter = (boat) =>
      BHPFilter
        ? boat.EngineHP >= BHPFilter - 30 && boat.EngineHP <= BHPFilter + 30
        : {};

    setBoats(
      copy
        .filter(passengerFilter)
        .filter(nameFilter)
        .filter(lengthFilter)
        .filter(hpFilter)
    );
  }, [MPFilter, NSFilter, BLFilter, BHPFilter]);

  return (
    <div>
      <div className="flex flex-col">
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

        {boats.map((el) => (
          <Boat
            name={el.id}
            key={el.id}
            price={el.Price}
            maxpassengers={el.MaxPassengers}
            length={el.Length}
            width={el.Width}
            engineHP={el.EngineHP}
            fuel={el.Fuel}
            additional={el.Additional}
          />
        ))}
      </div>
    </div>
  );
};

export default Boats;

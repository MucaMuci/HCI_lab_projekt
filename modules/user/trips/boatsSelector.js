import { useEffect, useState } from "react";
import { db } from "../../../firebase/initFirebase";
import { doc, getDocs, collection } from "firebase/firestore";

const BoatsSelector = ({ toggleList, setBoat }) => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const ListOfBoats = [];
    getDocs(collection(db, "Boats")).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        ListOfBoats.push({ ...doc.data(), id: doc.id });
      });
      setBoats(ListOfBoats);
    });
  }, []);

  return (
    <div
      style={{ width: "inherit" }}
      className={`flex flex-col absolute z-10 bg-hci-siva-2 overflow-y-scroll h-[50px] rounded-b-2xl ${
        !toggleList && "hidden"
      }`}
    >
      {boats.map((el) => (
        <button
          className="hover:bg-white hover:text-hci-modra"
          key={el.id}
          onClick={() => {
            setBoat(el.id, el.MaxPassengers);
          }}
        >
          {el.id}
        </button>
      ))}
    </div>
  );
};

export default BoatsSelector;

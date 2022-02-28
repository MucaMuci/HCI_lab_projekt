import Image from "next/image";
import WhitePlus from "../../../../assets/white_plus.png";

const AddBoatButton = () => {
  return (
    <button className="border shadow-btn-sjena rounded-lg border-hci-modra bg-hci-modra items-center w-fit px-3 my-6  flex ">
      <div className="flex text-white justify-center pr-2">
        Add another boat
      </div>
      <div className="pt-1">
        <Image src={WhitePlus} width={18} height={18} alt="WhitePlus" />
      </div>
    </button>
  );
};

export default AddBoatButton;

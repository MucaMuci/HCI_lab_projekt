const FreeBoats = () => {
  return (
    <div>
      <div className="bg-hci-siva-2 flex justify-center py-2 border-t border-hci-siva">
        <div className="text-2xl">FREE BOAT&apos;S</div>
      </div>
      <div className="flex flex-col pb-5 px-2">
        <div className="w-full text-center font-medium">
          <div className="font-medium text-sm">
            <div className="flex">
              <div className="text-left w-1/3 px-1">BOAT&apos;S NAME</div>
              <div className=" w-1/6">PRICE</div>
              <div className=" w-1/3">MAX. PASSANGERS</div>
              <div className=" w-1/6">LENGTH</div>
            </div>
          </div>
          <div className=" ">
            <div className="flex bg-green-200 mb-2 rounded-md px-1">
              <div className="text-left w-1/3 ">Barracudda 734</div>
              <div className="w-1/6">400€</div>
              <div className="w-1/3 ">7</div>
              <div className="w-1/6">7.34m</div>
            </div>
            <div className="flex bg-green-200 rounded-md px-1">
              <div className="text-left w-1/3">Bigbarka33 </div>
              <div className="w-1/6">400€</div>
              <div className="w-1/3">7</div>
              <div className="w-1/6">7.34m</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeBoats;

const ReservedBoats = () => {
  return (
    <div>
      <div className="bg-hci-siva-2 flex justify-center py-2 border-t border-hci-siva">
        <div className="text-2xl">RESERVED BOAT&apos;S</div>
      </div>
      <div className="flex flex-col pb-5 px-2">
        <div className="w-full text-center font-medium">
          <div className="font-medium text-sm">
            <div className="flex">
              <div className="text-left w-1/3 px-1">BOAT&apos;S NAME</div>
              <div className=" w-1/6">PRICE</div>
              <div className=" w-1/3">PASSANGERS</div>
              <div className=" w-1/6">LENGTH</div>
            </div>
          </div>
          <div className=" ">
            <div className="flex bg-red-200 mb-2 rounded-md px-1">
              <div className="text-left w-1/3 ">Barracudda 755</div>
              <div className="w-1/6">360€</div>
              <div className="w-1/3 ">5/7</div>
              <div className="w-1/6">6.55m</div>
            </div>
            <div className="flex bg-red-200 rounded-md px-1 mb-2">
              <div className="text-left w-1/3">Quicksilver 555 </div>
              <div className="w-1/6">400€</div>
              <div className="w-1/3">3/6</div>
              <div className="w-1/6">5.78m</div>
            </div>
            <div className="flex bg-red-200 rounded-md px-1 mb-2">
              <div className="text-left w-1/3">Mala Barka 333 </div>
              <div className="w-1/6">90€</div>
              <div className="w-1/3">5/5</div>
              <div className="w-1/6">4.75m</div>
            </div>
            <div className="flex bg-red-200 rounded-md px-1 mb-2">
              <div className="text-left w-1/3">Domaći Kaić 82 </div>
              <div className="w-1/6">100€</div>
              <div className="w-1/3">4/6</div>
              <div className="w-1/6">5.00m</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservedBoats;

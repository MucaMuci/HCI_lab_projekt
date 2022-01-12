const reservation = ({ name, customersName, phoneNumber, payed, hasYetToPay, pickUpTime, pickUpPlace, needsSkipper, additionalEquipment, comment }) => (
    <div className="flex flex-col">
        <div className="flex justify-center">
            {name}
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col items-end">
                <div className="flex  pr-2">
                    Customers name:
                </div>
                <div className="flex pr-2">
                    Phone number:
                </div>
                <div className="flex pr-2">
                    Payed:
                </div>
                <div className="flex pr-2">
                    Has yet to pay:
                </div>
                <div className="flex pr-2">
                    Pick-up time:
                </div>
                <div className="flex pr-2">
                    Pick-up place:
                </div>
                <div className="flex pr-2">
                    Needs skipper:
                </div>
                <div className="flex pr-2">
                    Additional equipment:
                </div>
            </div>
            <div>
                <div className="flex pl-2">
                    {customersName}
                </div>
                <div className="flex pl-2">
                    {phoneNumber}
                </div>
                <div className="flex pl-2">
                    {payed}
                </div>
                <div className="flex pl-2">
                    {hasYetToPay}
                </div>
                <div className="flex pl-2">
                    {pickUpTime}
                </div>
                <div className="flex pl-2">
                    {pickUpPlace}
                </div>
                <div className="flex pl-2">
                    {needsSkipper}
                </div>
                <div className="flex pl-2">
                    {additionalEquipment}
                </div>
            </div>

        </div>
        <div className="flex justify-center">
            More information
        </div>
        <div>
            <div>
                Comment
            </div>
            <div>
                {comment}
            </div>
        </div>

    </div>
);

export default reservation
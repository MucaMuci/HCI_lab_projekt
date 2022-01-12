const reservation = ({ name, customersName, phoneNumber, payed, hasYetToPay, pickUpTime, pickUpPlace, needsSkipper, additionalEquipment, comment }) => (
    <div>
        <div>
            {name}
        </div>
        <div className="flex flex-row">
            <div>
                <div>
                    Customers name:
                </div>
                <div>
                    Phone number:
                </div>
                <div>
                    Payed:
                </div>
                <div>
                    Has yet to pay:
                </div>
                <div>
                    Pick-up time:
                </div>
                <div>
                    Pick-up place:
                </div>
                <div>
                    Needs skipper:
                </div>
                <div>
                    Additional equipment:
                </div>
            </div>
            <div>
                <div>
                    {customersName}
                </div>
                <div>
                    {phoneNumber}
                </div>
                <div>
                    {payed}
                </div>
                <div>
                    {hasYetToPay}
                </div>
                <div>
                    {pickUpTime}
                </div>
                <div>
                    {pickUpPlace}
                </div>
                <div>
                    {needsSkipper}
                </div>
                <div>
                    {additionalEquipment}
                </div>
            </div>

        </div>
        <div>
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
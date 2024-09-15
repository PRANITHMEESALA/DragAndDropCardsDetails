import React, { useState } from "react";
import OTPSuccessPopup from "./OTPSuccessPopup";
function PaymentCardDetails(props) {
  const [carNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [isDragEnd, setDragEnd] = useState(false);
  const [draggingCardDetails, setDraggingCardDetails] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const handleDragDrop = (e) => {
    // e.preventDefault();
    e.dataTransfer.effectAllowed = "move";

    // e.dataTranfer.clearData();
    if (props.draggingCard) {
      setDraggingCardDetails(props.draggingCard);
      setDragEnd(true);
    }
  };
  const handleSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    // return props.submitDataHandler(isSubmit);
  };
  const goBack = () => {
    setIsSubmit(false);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmitHandler(e)}>
        <div
          className="paymentDetailsContainer"
          onDrop={(e) => handleDragDrop(e)}
          onDragOver={props.handleDragOver}
        >
          <label htmlFor=""> Card Number</label>
          <input
            type="text"
            value={draggingCardDetails.cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <label htmlFor=""> Card Expiry Date:</label>{" "}
          <input
            type="text"
            value={draggingCardDetails.expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <label htmlFor=""> CVV</label>{" "}
          <input
            type="number"
            value={draggingCardDetails.cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
          <label htmlFor=""> Card Holder Name:</label>{" "}
          <input
            type="text"
            value={draggingCardDetails.nameOnCard}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
      {isSubmit ? <OTPSuccessPopup goBack={goBack} /> : null}
    </div>
  );
}

export default PaymentCardDetails;

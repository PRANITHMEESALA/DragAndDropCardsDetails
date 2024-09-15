import React, { useState, useEffect } from "react";
import CardDetailsForm from "./CardDetailsForm";
import PaymentCardDetails from "./PaymentCardDetails";
import Card from "./Card";
import "./cardDetailsForm.css";
import OTPSuccessPopup from "./OTPSuccessPopup";
function MainCompenent() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [cardDetailsList, setCardDetailsList] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [draggingCard, setDraggingCard] = useState(null);
  const [isDragEnd, setDragEnd] = useState(false);
  const [isDragStart, setDragStart] = useState(false);
  const addCardHandler = () => {
    setIsAddBtnClicked(!isAddBtnClicked);
  };
  useEffect(() => {
    console.log(cardDetailsList);
  }, [cardDetailsList]);
  const SaveCardDetails = (cardDetails, submit) => {
    setIsSubmit(submit);
    setIsAddBtnClicked(false);
    setCardDetailsList([...cardDetailsList, cardDetails]);
    // setIsAddBtnClicked(submit ? false : true);
  };
  const handleDragStart = (e, draggingCard) => {
    // e.preventDefault();
    e.dataTransfer.effectAllowed = "move";
    setDragStart(true);
    setDraggingCard(draggingCard);
  };
  const handleDragEnd = (e) => {
    // e.dataTransfer.clearData();
    // e.preventDefault();
    console.log(e);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e, "dragOver");
  };
  const handleDragDrop = (e) => {
    e.preventDefault();
    if (draggingCard) {
      setDraggingCard(draggingCard);
      setDragEnd(true);
    }
  };
  const submitDataHandler = (submited) => {
    setIsSubmit(submited);
  };
  return (
    <div>
      {isAddBtnClicked ? (
        <CardDetailsForm SaveCardDetails={SaveCardDetails} />
      ) : (
        <div>
          <button onClick={addCardHandler}>Add Card</button>
        </div>
      )}
      <div className="listForms">
        <div>
          {cardDetailsList.length > 0 && (
            <Card
              cardDetailsList={cardDetailsList}
              handleDragStart={handleDragStart}
              handleDragEnd={handleDragEnd}
            />
          )}
        </div>
        <div>
          {cardDetailsList.length > 0 && (
            <PaymentCardDetails
              handleDragOver={(e) => handleDragOver(e)}
              draggingCard={draggingCard ? draggingCard : ""}
            />
          )}
        </div>
        {/* {isSubmit ? <OTPSuccessPopup /> : null} */}
      </div>
    </div>
  );
}

export default MainCompenent;

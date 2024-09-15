import React from "react";
import Card from "./Card";
import "./cardDetailsForm.css";
function CardDetailsForm(props) {
  const [cardDetails, setCardDetails] = React.useState({
    cardName: "",
    bankName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  const [cardDetailsList, setCardDetailsList] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let [year, month] = cardDetails.expiryDate.split("-");

    function cardNumberFormat(cardNo) {
      let limit = 4;
      let formattedCardNo = " ";
      let finalString = "";
      let counter = 2;
      for (let i = 0; i < cardNo.length; i++) {
        let formattedCardNo = cardNo.slice(i, limit);
        finalString += formattedCardNo += " ";
        i = limit - 1;
        if (counter <= 4 && limit <= cardNo.length) {
          limit = 4 * counter;
          counter++;
        }
      }
      return finalString.trimEnd();
    }
    cardDetails.expiryDate = `${month}/${year.slice(2, 4)}`;
    cardDetails.cardNumber = cardNumberFormat(cardDetails.cardNumber);
    let newCardDetails = {
      id: Date.now(),
      ...cardDetails,
    };
    console.log(cardDetails.expiryDate);
    // setCardDetailsList([...cardDetailsList, cardDetails]);
    return props.SaveCardDetails(newCardDetails, isSubmit);
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="cardModal">
          <div className="cardForm">
            <label htmlFor="">Card Name</label>{" "}
            <input
              type="text"
              name=""
              id=""
              value={cardDetails.cardName}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardName: e.target.value })
              }
            />
            <label htmlFor="">Bank Name</label>
            <input
              type="text"
              name=""
              id=""
              value={cardDetails.bankName}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, bankName: e.target.value })
              }
            />
            <label htmlFor="">Card Number</label>
            <input
              type="number"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
            />
            <label htmlFor="">Expiry Date</label>
            <input
              type="month"
              value={cardDetails.expiryDate}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiryDate: e.target.value })
              }
            />
            <label htmlFor="">CVV</label>
            <input
              type="number"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
            <label htmlFor="">Name on Card: </label>
            <input
              type="text"
              value={cardDetails.nameOnCard}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, nameOnCard: e.target.value })
              }
            />
            <button> Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CardDetailsForm;

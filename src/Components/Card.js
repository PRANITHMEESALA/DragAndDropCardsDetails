import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="cardContainer">
      {props.cardDetailsList.map((el, id) => {
        return (
          <div
            key={el.id}
            className="card"
            draggable="true"
            onDragStart={(e) => props.handleDragStart(e, el)}
            onDragEnd={(e) => props.handleDragEnd(e)}
          >
            <div className="cardType">
              {el.bankName} {el.cardName}
            </div>
            <div>{el.cardNumber}</div>
            <p>Expires: {el.expiryDate}</p>
            <p>CVV: {el.cvv}</p>
            <p>Name :{el.nameOnCard}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;

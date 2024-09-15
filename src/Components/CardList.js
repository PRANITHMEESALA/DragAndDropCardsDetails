import React, { useState } from "react";
import Card from "./Card";
function CardList() {
  const [cardList, setCardList] = useState([]);
  return (
    <div>
      <Card />
    </div>
  );
}

export default CardList;

import React from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  const [cards, addUrlRequest] = useAxios()

  const addCard = async () => {
     await addUrlRequest("https://deckofcardsapi.com/api/deck/new/draw/")
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards ? cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        )) : null}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;

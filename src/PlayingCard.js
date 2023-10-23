import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  
  const [isFacingUp, toggleFacingUp] = useFlip();

  return (
    <img
      src={isFacingUp ? back : front}
      alt="playing card"
      onClick={toggleFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;

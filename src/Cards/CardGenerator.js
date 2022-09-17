import CardRepository from "./CardRepository";
import { useState, createContext } from "react";

function CardGenerator() {
  const [currentCard, setCurrentCard] = useState(1);

  // setTimeout(() => setCurrentCard(currentCard + 1), 1000);

  return <CardRepository n={currentCard} />;
}

export default CardGenerator;

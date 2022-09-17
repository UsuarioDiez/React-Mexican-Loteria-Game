import CardRepository from "../Cards/CardRepository";
import UserBoard from "../Boards/UserBoard";
import { useState } from "react";


let init=0;
function ActiveGame(props){
    const [currentCard, setCurrentCard] = useState(props.new_set[init]);
    setTimeout(() => setCurrentCard(props.new_set[init]), 2000);
    init++;
    return <div>
        <UserBoard currentCard={currentCard}/>
        <CardRepository currentCard={currentCard} />  
        </div>;
}

export default ActiveGame;







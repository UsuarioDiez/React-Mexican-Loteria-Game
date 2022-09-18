import { useContext } from "react";
import { CardContext } from "../Context/ContextProvider";
import CardRepository from "./CardRepository";
import Card from "./Card";


function CardGenerator(){
    const {currentCard}=useContext(CardContext)
    return(
        <Card>
            <CardRepository n={currentCard}/>
        </Card>
    )
}

export default CardGenerator;
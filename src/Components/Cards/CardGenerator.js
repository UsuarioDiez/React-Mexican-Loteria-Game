import { useContext } from "react";
import { CardContext } from "../Context/CurrentCardContextProvider";
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
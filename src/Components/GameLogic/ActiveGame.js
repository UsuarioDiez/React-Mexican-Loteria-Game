import CardGenerator from "../Cards/CardGenerator";
import Table from "../Boards/Table";
import { useContext } from "react";
import { CardContext } from "../Context/CurrentCardContextProvider";
import "./ActiveGame.css"
import { WinnerContext } from "../Context/WinnerContextProvider";

let init=0;
let output;
function ActiveGame(props){
    const {setCurrentCard}=useContext(CardContext);
    const {isWinner}=useContext(WinnerContext)
    init++;
    if (init<=53 && !isWinner){
        setTimeout(() => setCurrentCard(props.new_set[init]), 2000);
    }

    const activeGame=(<div className="playground">
    <div className="cards_zone">
        <CardGenerator/>
    </div>
    <div className="table_zone">
        <Table/>
    </div>
    </div>);

    const winnerScreen=(
        <div className="playground">
    <div className="cards_zone">
        <h1>¡We have a winner!</h1>
    </div>
    <div className="table_zone">
        <Table/>
    </div>
    </div>)
    
    
    if (!isWinner){
        output=activeGame;
    }else{
        output=winnerScreen;
    }

    return output;
}

export default ActiveGame;
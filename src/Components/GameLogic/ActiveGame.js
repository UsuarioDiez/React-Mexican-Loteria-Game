import CardGenerator from "../Cards/CardGenerator";
import Table from "../Boards/Table";
import { useContext } from "react";
import { CardContext } from "../Context/ContextProvider";
import "./ActiveGame.css"

let init=0;
function ActiveGame(props){
    const {setCurrentCard}=useContext(CardContext);
    init++;
    if (init<=53){
        setTimeout(() => setCurrentCard(props.new_set[init]), 1000);
    }

    return <div className="playground">
        <div className="cards_zone">
            <CardGenerator/>
        </div>
        <div className="table_zone">
            <Table/>
        </div>
        </div>;
}

export default ActiveGame;
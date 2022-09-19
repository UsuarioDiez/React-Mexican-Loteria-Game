import "./Cell.css";
import {useContext} from "react";
import {CardContext} from '../Context/CurrentCardContextProvider';



let coveredCells=[];
let output;

function Cell(props) {
    const {currentCard}=useContext(CardContext);
    const coveredCell=(<div className="cell">
    <div className="cell-img">{props.children}</div>
    <div className="cell-cap"><img src="\cartas\cap.png" alt="cap"/></div>
  </div>);
    
    const normalCell=<div className="cell-img">{props.children}</div>;
    
    if (props.boardCard===currentCard){
        coveredCells.push(props.boardCard);
        output=coveredCell;
    }else if(coveredCells.includes(props.boardCard)){
        output=coveredCell;
    }else{
        output=normalCell;
    }
  return output;
}

export default Cell;

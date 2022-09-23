import "./Cell.css";
import {useContext,useEffect,useState} from "react";
import {CardContext} from '../Context/CurrentCardContextProvider';

let output;

function Cell(props) {
    const {currentCard}=useContext(CardContext);
    const [isCovered,setIsCovered]=useState(false);

    const coveredCell=(<div className="cell">
      <div className="cell-img">{props.children}</div>
      <div className="cell-cap"><img src="\cartas\cap.png" alt="cap"/></div>
      </div>);
    
    const normalCell=<div className="cell-img">{props.children}</div>;

    if (props.boardCard===currentCard && !isCovered){
      props.coveredCellsHandler(currentCard);
      setIsCovered(true);
      output=coveredCell;
    }else if(isCovered){
      output=coveredCell;
    }else{
      output=normalCell;
    }
    

  return output;
}

export default Cell;

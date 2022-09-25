import "./Cell.css";
import {useContext,useEffect,useRef,useState} from "react";
import {CardContext} from '../Context/CurrentCardContextProvider';
import { WinnerContext } from "../Context/WinnerContextProvider";
import {NewGameContext} from "../Context/NewGameContextProvider"

function Cell(props) {
    let output;
    const {currentCard}=useContext(CardContext);
    let isCovered=useRef(false);
    let tmpNewGame=useRef(0);
    const {newGame}=useContext(NewGameContext);
    const {isWinner}=useContext(WinnerContext);

    if (tmpNewGame.current!==newGame){
      isCovered.current=false;
    }
    tmpNewGame.current=newGame;

    const coveredCell=(<div className="cell">
      <div className="cell-img">{props.children}</div>
      <div className="cell-cap"><img src="\cartas\cap.png" alt="cap"/></div>
      </div>);
    
    const normalCell=<div className="cell-img">{props.children}</div>;

    if (props.boardCard===currentCard && !isCovered.current && !isWinner){
      isCovered.current=true;
      props.setCoveredCellsPointer(props.boardCard);
      output=coveredCell;
    }else if(isCovered.current){
      output=coveredCell;
    }else{
      output=normalCell;
    }
    

  return output;
}

export default Cell;

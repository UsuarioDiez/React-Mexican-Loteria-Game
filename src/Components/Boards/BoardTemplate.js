import CardRepository from "../Cards/CardRepository";
import "./BoardTemplate.css";
import Cell from "./Cell";
import {useEffect, useRef,useContext} from "react"
import WinnerChecker from "../../Utils/WinnerChecker";
import { WinnerContext } from "../Context/WinnerContextProvider";
import {NewGameContext} from "../Context/NewGameContextProvider"


function BoardTemplate(props){
    let coveredCells=useRef([]);
    let {setIsWinner}=useContext(WinnerContext)
    let coveredCellsArray=[];
    let amIWinner=useRef(false);
    let tmpNewGame=useRef(0);
    const {newGame}=useContext(NewGameContext);

    if (tmpNewGame.current!==newGame){
      amIWinner.current=false;
      coveredCells.current=[];
    }
    tmpNewGame.current=newGame;

    const setCoveredCells=(luckyCell)=>{
        coveredCells.current.push(luckyCell);
    }

    coveredCellsArray=[...coveredCells.current];
    useEffect(()=>{
        if (WinnerChecker(coveredCellsArray,props.boardSet)){
            setIsWinner(true);
            amIWinner.current=true;
        }
    },[coveredCellsArray])

    return(
        <div className={amIWinner.current?"board winner-board":"board"}>
        {props.boardSet.map(cell => (
            <div key={cell} className="cell-board">
                <Cell boardCard={cell} setCoveredCellsPointer={setCoveredCells}>
                    <CardRepository n={cell} />
                </Cell>
            </div>
        ))}
        </div>
    )
}

export default BoardTemplate;
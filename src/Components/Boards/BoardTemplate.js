import CardRepository from "../Cards/CardRepository";
import "./BoardTemplate.css";
import Cell from "./Cell";
import {useRef} from "react"

function BoardTemplate(props){
    let coveredCells=useRef([]);
    const coveredCellsHandler=(boardCard)=>{
        coveredCells.current.push(boardCard);
        props.coveredCellsGetter(coveredCells.current)
    }

    return(
        <div className="board">
        {props.boardSet.map(cell => (
            <div key={cell} className="cell-board">
                <Cell boardCard={cell} coveredCellsHandler={coveredCellsHandler}>
                    <CardRepository n={cell}/>
                </Cell>
            </div>
        ))}
        </div>
    )
}

export default BoardTemplate;
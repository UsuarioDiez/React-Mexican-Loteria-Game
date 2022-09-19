import CardRepository from "../Cards/CardRepository";
import "./BoardTemplate.css";
import Cell from "./Cell";

function BoardTemplate(props){

    return(
        <div className="board">
        {props.boardSet.map(cellx => (cellx.map(celly=>(
            <div key={celly} className="cell-board">
                <Cell boardCard={celly}>
                    <CardRepository n={celly}/>
                </Cell>
                
            </div>
        ))
        ))}
        </div>
    )
}

export default BoardTemplate;
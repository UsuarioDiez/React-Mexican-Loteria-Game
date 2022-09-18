import CardRepository from "../Cards/CardRepository";
import "./BoardTemplate.css";

function BoardTemplate(props){

    return(
        <div className="board">
        {props.boardSet.map(cellx => (cellx.map(celly=>(
            <div key={celly} className="cell">
                <CardRepository n={celly}/>
            </div>
        ))
        ))}
        </div>
    )
}

export default BoardTemplate;
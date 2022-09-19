import {useContext, useEffect} from 'react';
import {CardContext} from '../Context/CurrentCardContextProvider';
import BoardTemplate from './BoardTemplate';
import { WinnerContext } from "../Context/WinnerContextProvider";

let countCoveredCells=0
function CpuBoard(props){
    const {currentCard}=useContext(CardContext)
    const {setIsWinner}=useContext(WinnerContext)

    useEffect(()=>{
        if (props.cpuCellsSet.includes(currentCard)){
            countCoveredCells++;
            console.log("cuenta local: "+countCoveredCells);
        }
    })

    
    return(<div>
        <BoardTemplate boardSet={props.cpuBoard}/>
    </div>) 
    
}

export default CpuBoard;
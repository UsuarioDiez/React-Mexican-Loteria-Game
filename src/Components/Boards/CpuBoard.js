import {useContext} from 'react';
import BoardTemplate from './BoardTemplate';
import { WinnerContext } from "../Context/WinnerContextProvider";
import WinnerChecker from '../../Utils/WinnerChecker';


function CpuBoard(props){
    const {setIsWinner}=useContext(WinnerContext)

    const coveredCellsSetter=(coveredCellsFromTemplate)=>{
        WinnerChecker(coveredCellsFromTemplate,props.cpuBoard)
    }
    return(<div>
        <BoardTemplate boardSet={props.cpuBoard} coveredCellsGetter={coveredCellsSetter}/>
    </div>) 
    
}

export default CpuBoard;
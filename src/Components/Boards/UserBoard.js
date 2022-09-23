import {useContext} from 'react';
import BoardTemplate from './BoardTemplate';
import { WinnerContext } from "../Context/WinnerContextProvider";
import WinnerChecker from '../../Utils/WinnerChecker';


function UserBoard(props){
    const {setIsWinner}=useContext(WinnerContext)

    const coveredCellsSetter=(coveredCellsFromTemplate)=>{
        WinnerChecker(coveredCellsFromTemplate,props.userBoard)
    }
    
    return(<div>
        <BoardTemplate boardSet={props.userBoard} coveredCellsGetter={coveredCellsSetter}/>
    </div>) 
    
    
}

export default UserBoard;
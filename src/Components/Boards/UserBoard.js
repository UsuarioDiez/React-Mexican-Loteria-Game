import {useContext} from 'react';
import {CardContext} from '../Context/CurrentCardContextProvider';
import BoardTemplate from './BoardTemplate';
import { WinnerContext } from "../Context/WinnerContextProvider";

let countCoveredCells=0;
function UserBoard(props){
    const {currentCard}=useContext(CardContext)
    const {setIsWinner}=useContext(WinnerContext)

    if (props.userCellsSet.includes(currentCard)){
        countCoveredCells++;
    }
    if (countCoveredCells===4){
        setIsWinner(true);
    }
    
    return(<div>
        <BoardTemplate boardSet={props.userBoard}/>
    </div>) 
    
    
}

export default UserBoard;
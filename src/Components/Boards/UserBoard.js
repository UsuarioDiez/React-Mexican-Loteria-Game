import {useContext} from 'react';
import BoardTemplate from './BoardTemplate';
import { WinnerContext } from "../Context/WinnerContextProvider";
import WinnerChecker from '../../Utils/WinnerChecker';


function UserBoard(props){
    return(
        <BoardTemplate boardSet={props.userBoard}/>
    ) 
}

export default UserBoard;
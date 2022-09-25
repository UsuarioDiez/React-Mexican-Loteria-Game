import {useContext} from 'react';
import BoardTemplate from './BoardTemplate';
import { WinnerContext } from "../Context/WinnerContextProvider";
import WinnerChecker from '../../Utils/WinnerChecker';


function CpuBoard(props){

    return(<div>
        <BoardTemplate boardSet={props.cpuBoard}/>
    </div>) 
    
}

export default CpuBoard;
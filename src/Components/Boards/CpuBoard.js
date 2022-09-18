import {useContext} from 'react';
import {CardContext} from '../Context/ContextProvider';
import BoardTemplate from './BoardTemplate';


function CpuBoard({cpuBoard}){
    const {currentCard}=useContext(CardContext);

    return (
        <BoardTemplate boardSet={cpuBoard}/>
)
    
}

export default CpuBoard;
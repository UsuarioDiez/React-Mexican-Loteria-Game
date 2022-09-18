import {useContext} from 'react';
import {CardContext} from '../Context/ContextProvider';
import BoardTemplate from './BoardTemplate';



function UserBoard({userBoard}){
    const {currentCard}=useContext(CardContext)
    return <BoardTemplate boardSet={userBoard}/>
}

export default UserBoard;
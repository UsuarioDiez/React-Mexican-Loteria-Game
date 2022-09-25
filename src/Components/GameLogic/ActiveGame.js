import CardGenerator from "../Cards/CardGenerator";
import Table from "../Boards/Table";
import { useContext,useEffect,useRef } from "react";
import { CardContext } from "../Context/CurrentCardContextProvider";
import "./ActiveGame.css"
import { WinnerContext } from "../Context/WinnerContextProvider";
import {NewGameContext} from "../Context/NewGameContextProvider"

function ActiveGame(props){
    let initprueba=useRef(parseInt(props.first_index))
    let tmpNewGame=useRef(0);
    initprueba.current=initprueba.current+1;
    const {setCurrentCard}=useContext(CardContext);
    const {isWinner,setIsWinner}=useContext(WinnerContext);
    const {newGame,setNewGame}=useContext(NewGameContext);
    useEffect(()=>{
        if (tmpNewGame.current!==newGame){
            setIsWinner(false);
            initprueba.current=0;
        }
        tmpNewGame.current=newGame;
    },[initprueba.current])

    const setNewGameHandler=()=>{
        setNewGame(prevnewGame=>prevnewGame+1);
      }

    if (initprueba.current<=53 && !isWinner){
        setTimeout(() => {
            if (!isWinner){
                setCurrentCard(props.new_set[initprueba.current])

            }
        }, 300);
    }

    return (<div className="playground">
    <div className="cards_zone">
        {!isWinner && <CardGenerator/>}
        {isWinner&&<div className="winner-message"><h1>We have a lucky lady!</h1></div>}
        <button onClick={setNewGameHandler}>Reset Game</button>
    </div>
    <div className="table_zone">
        <Table boardPack={props.boardPack}/>
    </div>
    </div>);
}

export default ActiveGame;
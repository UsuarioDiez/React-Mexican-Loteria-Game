import CurrentCardContextProvider from "../Context/CurrentCardContextProvider";
import WinnerContextProvider from "../Context/WinnerContextProvider";
import ActiveGame from "./ActiveGame"
import {WinnerContext} from "../Context/WinnerContextProvider"
import {useContext} from "react";
import { BoardGenerator } from "../../Utils/BoardGenerator";
import { NewGameContext } from "../Context/NewGameContextProvider";

function GameInitializer(){
  const {newGame}=useContext(NewGameContext);

  console.log("me ejecutooo GameInitializer")
  const {setIsWinner}=useContext(WinnerContext);
  setIsWinner(false);
    let arr=[];
    for (let i=0;i<=53;i++){
      arr[i]=i;
    }

  function shuffleArray(array) {
    let narr=[...array];
    for (let i = narr.length-1 ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = narr[i];
      narr[i] = narr[j];
      narr[j] = temp;
    }
    return narr;
  }

  const newBoardPack=[BoardGenerator(),
    BoardGenerator(),
    BoardGenerator(),
    BoardGenerator(),
    BoardGenerator()]

  const new_set=shuffleArray(arr)

    return(
      <WinnerContextProvider>
        <CurrentCardContextProvider new_set_first={new_set[0]}>
          <ActiveGame new_set={new_set} first_index="0" boardPack={newBoardPack}/>
        </CurrentCardContextProvider	>
      </WinnerContextProvider>
    )
}

export default GameInitializer;
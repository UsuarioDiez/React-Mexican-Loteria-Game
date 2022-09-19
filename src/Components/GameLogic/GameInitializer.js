import CurrentCardContextProvider from "../Context/CurrentCardContextProvider";
import WinnerContextProvider from "../Context/WinnerContextProvider";
import ActiveGame from "./ActiveGame"

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

function GameInitializer(){
    const new_set=shuffleArray(arr)
    return(
      <WinnerContextProvider>
        <CurrentCardContextProvider new_set_first={new_set[0]}>
          <ActiveGame new_set={new_set}/>
        </CurrentCardContextProvider	>
      </WinnerContextProvider>

    )
}

export default GameInitializer;
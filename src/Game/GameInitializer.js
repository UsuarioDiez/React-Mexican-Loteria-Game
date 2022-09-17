import ActiveGame from "./ActiveGame"

let arr=[];
for (let i=0;i<=53;i++){
  arr[i]=i+1;
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
    <ActiveGame new_set={new_set}/>
    )
}

export default GameInitializer;
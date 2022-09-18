export function BoardGenerator(){
    let new_board=[];
    let cardsArray=[];
    let rand;
    while (cardsArray.length<=15){
        rand=Math.floor(Math.random()*54);
        while(rand!==0 && !cardsArray.includes(rand)){
            cardsArray.push(rand);
        }
    }
    console.log(cardsArray)
    for (let i=0;i<=3;i++){
        new_board.push([cardsArray[4*i],cardsArray[4*i+1],cardsArray[4*i+2],cardsArray[4*i+3]])
    }

    console.log(new_board)
    return new_board;
}
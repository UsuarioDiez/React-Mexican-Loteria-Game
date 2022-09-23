export function BoardGenerator(){
    let cardsArray=[];
    let rand;
    while (cardsArray.length<=15){
        rand=Math.floor(Math.random()*54);
        while(rand!==0 && !cardsArray.includes(rand)){
            cardsArray.push(rand);
        }
    }

    return cardsArray;
}
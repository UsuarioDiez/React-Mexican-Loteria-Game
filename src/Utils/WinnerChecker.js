import BinaryDataframe from "./BinaryDataframe";

function WinnerChecker(coveredCells,originalCells){
    let isWinner=false;
    let df=BinaryDataframe(coveredCells,originalCells);

    if (!isWinner){
        for (let i=0;i<=3;i++){
            let cellCount=df[i][0]+df[i][1]+df[i][2]+df[i][3];
            if (cellCount===4){
                isWinner=true;
                return isWinner;
            }
        }

        for (let i=0;i<=3;i++){
            let cellCount=df[0][i]+df[1][i]+df[2][i]+df[3][i];
            if (cellCount===4){
                isWinner=true;
                return isWinner;
            }
        }
    }

    if (!isWinner){
        for (let i=0;i<=2;i++){
            for (let j=0;j<=2;j++){
                let cellCount=df[i][j]+df[i][j+1]+df[i+1][j]+df[i+1][j+1]
                if (cellCount===4){
                    isWinner=true;
                    return isWinner;
                }
            }
        }

    }

    // if (!isWinner){

    // }
    return isWinner;
}

export default WinnerChecker;
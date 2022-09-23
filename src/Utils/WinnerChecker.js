function WinnerChecker(coveredCells,originalCells){
    let df=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

    for (let i=0;i<=15;i++){
        let indexCovered=originalCells.indexOf(coveredCells[i]);
        if (indexCovered!==-1){
            let y=indexCovered%4;
            if (indexCovered>=0 && indexCovered<4){
                df[0][y]=1
            }else if(indexCovered<8){
                df[1][y]=1
            }else if(indexCovered<12){
                df[2][y]=1
            }else{
                df[3][y]=1
            }
        }
    }
    console.log("=================");
    console.log(coveredCells);
    console.log(originalCells);
    console.log(df);
    console.log("=================");
}

export default WinnerChecker;
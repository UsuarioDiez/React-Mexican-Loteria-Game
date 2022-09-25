function BinaryDataframe(coveredCells,originalCells){
    let dataframe=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    for (let i=0;i<=15;i++){
        let indexCovered=originalCells.indexOf(coveredCells[i]);
        if (indexCovered!==-1){
            let y=indexCovered%4;
            if (indexCovered>=0 && indexCovered<4){
                dataframe[0][y]=1
            }else if(indexCovered<8){
                dataframe[1][y]=1
            }else if(indexCovered<12){
                dataframe[2][y]=1
            }else{
                dataframe[3][y]=1
            }
        }
    }
    return dataframe;
}

export default BinaryDataframe;
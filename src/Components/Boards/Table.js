import UserBoard from "./UserBoard"
import CpuBoard from "./CpuBoard"
import {BoardGenerator} from "../../Utils/BoardGenerator"
import "./Table.css"


const userBoard=BoardGenerator();
const cpuBoard1=BoardGenerator();
const cpuBoard2=BoardGenerator();
const cpuBoard3=BoardGenerator();
const cpuBoard4=BoardGenerator();

let userCellsSet=[];
let cpuCellsSet1=[];
let cpuCellsSet2=[];
let cpuCellsSet3=[];
let cpuCellsSet4=[];
userBoard.map(cellx=>cellx.map(celly=>userCellsSet.push(celly)));
cpuBoard1.map(cellx=>cellx.map(celly=>cpuCellsSet1.push(celly)));
cpuBoard2.map(cellx=>cellx.map(celly=>cpuCellsSet2.push(celly)));
cpuBoard3.map(cellx=>cellx.map(celly=>cpuCellsSet3.push(celly)));
cpuBoard4.map(cellx=>cellx.map(celly=>cpuCellsSet4.push(celly)));



function Table(){
    
    return (
    <div className="table">
        <div className="user_board">
        <UserBoard userBoard={userBoard} userCellsSet={userCellsSet}/>
        </div>
        
        <div className="cpu_boards">
        <CpuBoard cpuBoard={cpuBoard1} cpuCellsSet={cpuCellsSet1} />
        <CpuBoard cpuBoard={cpuBoard2} cpuCellsSet={cpuCellsSet2} />
        <CpuBoard cpuBoard={cpuBoard3} cpuCellsSet={cpuCellsSet3} />
        <CpuBoard cpuBoard={cpuBoard4} cpuCellsSet={cpuCellsSet4} />
        </div>
    </div>)
}

export default Table
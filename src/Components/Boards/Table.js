import UserBoard from "./UserBoard"
import CpuBoard from "./CpuBoard"
import {BoardGenerator} from "../../Utils/BoardGenerator"
import "./Table.css"


const userBoard=BoardGenerator();
const cpuBoard1=BoardGenerator();
const cpuBoard2=BoardGenerator();
const cpuBoard3=BoardGenerator();
const cpuBoard4=BoardGenerator();


function Table(){
    return (
    <div class="table">
        <div class="user_board">
        <UserBoard userBoard={userBoard}/>
        </div>
        
        <div class="cpu_boards">
        <CpuBoard cpuBoard={cpuBoard1}/>
        <CpuBoard cpuBoard={cpuBoard2}/>
        <CpuBoard cpuBoard={cpuBoard3}/>
        <CpuBoard cpuBoard={cpuBoard4}/>
        </div>
    </div>)
}

export default Table
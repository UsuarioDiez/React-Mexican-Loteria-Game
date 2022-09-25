import UserBoard from "./UserBoard"
import CpuBoard from "./CpuBoard"
import {BoardGenerator} from "../../Utils/BoardGenerator"
import "./Table.css"
import { isPropertySignature } from "typescript"

// const userBoard=BoardGenerator();
// const cpuBoard1=BoardGenerator();
// const cpuBoard2=BoardGenerator();
// const cpuBoard3=BoardGenerator();
// const cpuBoard4=BoardGenerator();
function Table(props){
    return (
    <div className="table">
        <div className="user_board">
        <UserBoard userBoard={props.boardPack[0]} />
        </div>
        
        <div className="cpu_boards">
        <CpuBoard cpuBoard={props.boardPack[1]}/>
        <CpuBoard cpuBoard={props.boardPack[2]}/>
        <CpuBoard cpuBoard={props.boardPack[3]}/>
        <CpuBoard cpuBoard={props.boardPack[4]}/>
        </div>
    </div>)
}

export default Table
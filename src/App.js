import GameInitializer from "./Components/GameLogic/GameInitializer";
import {useContext, useState} from "react"
import {NewGameContext} from "./Components/Context/NewGameContextProvider"
import NewGameContextProvider from "./Components/Context/NewGameContextProvider";


function App() {
    return (  
    <NewGameContextProvider>
      <GameInitializer/>
    </NewGameContextProvider>
)
}

export default App;
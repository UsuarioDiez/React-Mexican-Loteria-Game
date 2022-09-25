import {createContext,useState} from "react";

export const NewGameContext=createContext();
function NewGameContextProvider(props){
    const [newGame,setNewGame]=useState(0);
    console.log("me repitoo soy el context");
    return <NewGameContext.Provider value={{
        newGame,
        setNewGame
    }}>
        {props.children}
    </NewGameContext.Provider>

}

export default NewGameContextProvider;
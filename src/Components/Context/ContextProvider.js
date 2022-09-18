import { createContext, useState } from "react";

export const CardContext=createContext();

function ContextProvider(props){
    const [currentCard, setCurrentCard] = useState(0);
    return(
        <CardContext.Provider value={{
            currentCard,
            setCurrentCard
        }} >
            {props.children}
        </CardContext.Provider>);
}

export default ContextProvider;

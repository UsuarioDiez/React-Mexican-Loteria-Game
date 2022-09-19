import { createContext, useState } from "react";

export const CardContext=createContext();

function CurrentCardContextProvider(props){
    const [currentCard, setCurrentCard] = useState(props.new_set_first);
    return(
        <CardContext.Provider value={{
            currentCard,
            setCurrentCard
        }} >
            {props.children}
        </CardContext.Provider>);
}

export default CurrentCardContextProvider;

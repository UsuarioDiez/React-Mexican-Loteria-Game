import { createContext, useState } from "react";

export const WinnerContext=createContext({isWinner:false,whoIs:"",setIsWinner:()=>{}});

function WinnerContextProvider(props){
    const [isWinner,setIsWinner]=useState(false);

    return(
        <WinnerContext.Provider value={{
            isWinner,
            whoIs:"",
            setIsWinner
        }
        } >
            {props.children}
        </WinnerContext.Provider>);
}

export default WinnerContextProvider;

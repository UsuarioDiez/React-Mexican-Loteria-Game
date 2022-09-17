import { createContext } from "react";

export const CurrentCardContext = createContext({
  ccard: 0,
});

function CurrentCardContextProvider(props) {
  const context = {
    ccard: 1,
  };
  return (
    <CurrentCardContext.Provider value={context}>
      {props.child}
    </CurrentCardContext.Provider>
  );
}

export default CurrentCardContextProvider;

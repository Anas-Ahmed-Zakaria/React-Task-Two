import { createContext, useState } from "react";

export const CounterContext = createContext();

function CounterContextProvider({children}) {
  const [counterTest, setCounterTest] = useState(0);
  return (
    <CounterContext.Provider
      value={{ setCounterTest, counterTest}}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;

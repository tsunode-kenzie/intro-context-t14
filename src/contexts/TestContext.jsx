import { createContext, useState } from 'react';

export const TestContext = createContext({})

export const TestProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    function add() {
        setCounter(counter + 1);
    }

    return(
        <TestContext.Provider value={{
          counter,
          add,
        }}>
            {children}
        </TestContext.Provider>
    )
}
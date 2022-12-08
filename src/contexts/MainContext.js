import React from 'react';

export const mainContext = React.createContext();

const MainContext = ({ children }) => {
    const [signUp, setSingUp] = React.useState({});
    const value = { signUp, setSingUp }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;
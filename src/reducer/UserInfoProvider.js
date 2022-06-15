import React, {createContext, useContext, useReducer, useState} from 'react';
import reducer, {initialState} from './reducer.js'
// import Context from './Context.js';
export const UserInfoContext = createContext(''); // token default is empty


function UserInfoProvider({children}) {
    const [userInfo, dispatch] = useReducer(reducer, initialState);
    return (
        <UserInfoContext.Provider value={[userInfo, dispatch]}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider;

    
    

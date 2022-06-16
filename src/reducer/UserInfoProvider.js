import React, {createContext, useContext, useReducer} from 'react';


export const UserInfoContext = createContext(); 

const UserInfoProvider = ({reducer, initialState, children}) => (
        <UserInfoContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UserInfoContext.Provider>
);
        

export const useGlobalState = () => useContext(UserInfoContext);
export default UserInfoProvider  ;
    

import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";
import AuthReducer from "../reducer/AuthReducer";
import { AUTH_IS_READY } from "../types/Types";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
        authIsReady: false
    });

    useEffect(() => {
      const unsub = projectAuth.onAuthStateChanged(user => {
        dispatch({
          type: AUTH_IS_READY,
          payload: user
        });
        unsub();
      })
    }, [])
    

    console.log('AuthContextProvider: state', state);

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

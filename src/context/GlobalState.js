import React, {createContext, useReducer} from 'react';

//import the reducer
import AppReducer from './AppReducer'


//Create the initial state
const initialState ={
    transaction:[]
    
}



//Create the global context

export const GlobalContext = createContext(initialState);

//Create a provider for global context

export const GlobalProvider = ({children})=>{

    const [state, dispatch]= useReducer(AppReducer, initialState)

    //Actions
    function delTransaction(id){
        dispatch({
            type: 'DEL_TR',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TR',
            payload:transaction
        });
    }
    return(
        <GlobalContext.Provider value={
            {
                transaction: state.transaction,
                delTransaction,addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
import { createContext, useReducer, useState } from "react";
import { TransactionReducer } from "./TransactionReducer";

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {

    const initialState = {
        showModal: false,
        transactions: [{ id: 1, text: "sample", amount: 9999 }],
        edit: { transaction: {}, isEdit: false }
    }




    const [state, dispatch] = useReducer(TransactionReducer, initialState)


    return (
        <TransactionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TransactionContext.Provider>
    )

}

export default TransactionContext




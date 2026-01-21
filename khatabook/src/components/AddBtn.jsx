import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const AddBtn = () => {

    const { } = useContext(TransactionContext)

    return (
        <button className='fixed bottom-5 right-5 cursor-pointer bg-black p-2 hover:bg-gray-800 text-white font-semibold'>Add Transaction +</button>
    )
}

export default AddBtn

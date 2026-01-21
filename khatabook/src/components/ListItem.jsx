import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const ListItem = ({ transaction }) => {

    const { dispatch } = useContext(TransactionContext)

    return (
        <li className='relative my-2 border border-gray-200 p-4'>
            <p className='text-sm text-gray-400 my-2'>#{transaction.id}</p>
            <h1 className='text-4xl font-bold my-2'>{transaction.amount}</h1>
            <h2 className='text-2xl my-2 font-semibold'>{transaction.text}</h2>
            <div className='absolute right-5 bottom-5'>
                <button className='bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white font-semibold mx-1 p-1 text-sm'>Edit</button>
                <button className='bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold mx-1 p-1 text-sm'>Delete</button>
            </div>
        </li>
    )
}

export default ListItem

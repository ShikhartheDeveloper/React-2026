import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Dashboard = () => {

    const { transactions } = useContext(TransactionContext)


    let income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)


    let expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    let balance = transactions
        .reduce((acc, transaction) => acc + transaction.amount, 0)




    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className="bg-emerald-500 p-4">
                <h2 className='text-2xl font-bold text-white'>Income : </h2>
                <h1 className='text-4xl my-2 font-bold text-white'>{income}</h1>
            </div>
            <div className="bg-red-500 p-4">
                <h2 className='text-2xl font-bold text-white'>Expense : </h2>
                <h1 className='text-4xl my-2 font-bold text-white'>{expense}</h1>
            </div>
            <div className="bg-yellow-500 p-4">
                <h2 className='text-2xl font-bold text-white'>Balance : </h2>
                <h1 className='text-4xl my-2 font-bold text-white'>{balance}</h1>
            </div>
        </div>
    )
}

export default Dashboard

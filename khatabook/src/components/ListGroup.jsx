import React, { useContext } from 'react'
import ListItem from './ListItem'
import TransactionContext from '../context/TransactionContext'

const ListGroup = () => {

    const { transactions } = useContext(TransactionContext)

    return (
        <ul className='my-4'>
            {
                transactions.map((transaction) => <ListItem key={transaction.id} transaction={transaction} />)
            }
        </ul>
    )
}

export default ListGroup

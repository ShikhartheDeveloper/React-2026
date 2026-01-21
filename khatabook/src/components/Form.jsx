import React, { useContext, useEffect, useState } from 'react'
import TransactionContext from '../context/TransactionContext'

const Form = () => {

    const { showModal, edit, dispatch } = useContext(TransactionContext)

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()


        setAmount("")
        setText("")
        handleModal()

    }

    useEffect(() => {
        setText(edit.transaction.text)
        setAmount(edit.transaction.amount)
    }, [edit])



    return (
        <div className={showModal ? "absolute z-40 top-5 left-0 w-full min-h-screen p-8 border border-gray-300 bg-white" : "hidden"}>
            <form onSubmit={(e) => handleSubmit(e)} className='my-2'>
                <h1 className='my-2 text-semibold text-lg'>Add Your Transaction Details : </h1>
                <input placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} className='border border-gray-300 p-2 w-full my-2' type="number" />
                <textarea placeholder='Enter Transaction Detail' value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-300 p-2 w-full my-2' name="" id=""></textarea>
                <button className='bg-green-500 hover:bg-green-600 p-2 w-full text-white cursor-pointer'>{edit.isEdit ? "Update Transaction" : "Save Transaction"}</button>
            </form>
            <button className='bg-red-500 hover:bg-red-600 p-2 w-full text-white cursor-pointer'>Close</button>
        </div>

    )
}

export default Form

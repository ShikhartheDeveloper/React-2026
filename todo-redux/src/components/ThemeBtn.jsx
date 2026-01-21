import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ThemeBtn = () => {

    const {dispatch} = useContext(TodoContext)



  return (
     <button onClick={()=>dispatch({type: "SWITCH_THEME"})} className="fixed z-40 bottom-5 left-5 h-12 w-12 bg-black rounded-full text-white font-bold">C</button>
  )
}

export default ThemeBtn

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ListGroup from './components/ListGroup'
import Form from './components/Form'
import AddBtn from './components/AddBtn'
import { useState } from 'react'

const App = () => {



  return (
    <>
      <Navbar />
      <div className="p-8 relative">
        <Dashboard />
        <Form />
        <ListGroup />
        <AddBtn />
      </div>
    </>
  )
}

export default App

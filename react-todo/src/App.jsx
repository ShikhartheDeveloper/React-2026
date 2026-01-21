import Navbar from "./components/Navbar"
import Form from "./components/Form"
import ListGroup from "./components/ListGroup"
import Footer from "./components/Footer"
import { useContext, useState } from "react"
import TodoContext from "./context/TodoContext"
import ThemeBtn from "./components/ThemeBtn"

const App = () => {

    const { theme} = useContext(TodoContext)



    return (
        <>
            <Navbar />
            <ThemeBtn />
            <div className={theme ? "p-8 min-h-screen bg-gray-600" : "p-8 min-h-screen"}>
                <Form />
                <ListGroup />
            </div>
            <Footer />
        </>

    )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
import TodoContext, { TodoProvider } from './context/TodoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)

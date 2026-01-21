import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from './context/weather/WeatherContext.jsx'
import { NewsProvider } from './context/news/NewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </WeatherProvider>
  </StrictMode>,
)

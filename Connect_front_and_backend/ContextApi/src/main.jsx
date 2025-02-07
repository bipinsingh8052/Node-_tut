import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import USeContext from './USeContext.jsx'
// import 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <USeContext>
    <App />
    </USeContext>
  </StrictMode>
)

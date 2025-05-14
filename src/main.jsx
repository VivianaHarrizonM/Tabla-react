import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tabla from './Tabla.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tabla />
  </StrictMode>,
)

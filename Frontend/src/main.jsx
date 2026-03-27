import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootWrapper from './routes/RootWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootWrapper />
  </StrictMode>,
)
 
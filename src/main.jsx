import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter} from "react-router-dom"
import About from '../about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <App/>
    </HashRouter>
  </StrictMode>,
)

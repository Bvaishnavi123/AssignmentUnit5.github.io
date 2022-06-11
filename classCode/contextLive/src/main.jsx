import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './Context/CartContext'
import { LanContextProvider } from './Context/LanContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </LanContextProvider>
    
    
  </React.StrictMode>
)

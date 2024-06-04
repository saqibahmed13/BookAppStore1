import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(


  // <React.StrictMode>   // this will make the components to render two times 
    
  // </React.StrictMode>,

  // so will use this 

<BrowserRouter>
<App />
</BrowserRouter>
   
)

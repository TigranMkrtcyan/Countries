import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { data } from './Data/Data.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App data = {data}/>
  </BrowserRouter>
)

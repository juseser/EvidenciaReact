import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './componentes/Menu.jsx'
import { Inicio } from './componentes/Inicio.jsx'
import { Login } from './componentes/Login.jsx'

import './estilos/estilos.css'
import './estilos/materialize.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  
)

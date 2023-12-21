import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos"} />
  </React.StrictMode>,
)

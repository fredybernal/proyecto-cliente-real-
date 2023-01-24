import React from 'react'
import './styles.css'
import {Link, Outlet } from 'react-router-dom'


export default function Productos() {
  
  return (
    <>
    <h1>Categorias</h1>
    <div>
      <ul>
        <Link to= "/Paquetes" ><li><a>Paquetes</a></li></Link>
        <li><a>Granos</a></li>
        <li><a>Aseo</a></li>
      </ul>
    </div>
    <Outlet/>
    </>
  )
}

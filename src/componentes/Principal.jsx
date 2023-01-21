import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navegacion } from './Navegacion'
import '../assets/css/estilos.css'
export const Principal = () => {
  return (
    <>
        <Navegacion />
        <Outlet />
        
    </>
  )
}

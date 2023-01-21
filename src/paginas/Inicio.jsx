import React from 'react'
import { Carousel } from '../componentes/Carousel'
import nosotros from '../assets/images/nosotros.png'
export const Inicio = () => {
  return (
    <>
      <Carousel />
      <div className="nosotros  d-flex justify-content-center align-items-center">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={nosotros} className='img-thumbnail w-75'/>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="text-center text-white">
                <h4>Sobre Nosotros</h4>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis impedit sunt quasi? Iure cum adipisci quam aspernatur similique minima?</p>
                <button className='btn btn-dark'>Ver Más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

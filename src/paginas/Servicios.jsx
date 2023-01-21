import React from 'react'
import leche from "../assets/images/leche.png"
import engorde from "../assets/images/engorde.png"
import ensilado from "../assets/images/ensilado.png"
import tecnologia from "../assets/images/tecnologia.png"
import { Link, Outlet } from 'react-router-dom'
export const Servicios = ({titulo}) => {
  // const titulo = "SERVICIOS";
  return (
    <>
      <div className="banner">
        <h1>NUESTRO {titulo}</h1>
      </div>
      <div className="container">
        <Outlet />
        <div className="row my-4 g-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={leche} className='card-img-top' alt="" />
              <div className="card-body">
                <h4>PRODUCCIÓN DE LECHE</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officiis veritatis cum dolore quaerat provident.</p>
                <Link className='btn btn-primary' to='/qori/servicios/lechera'>Ver Más</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={engorde} className='card-img-top' alt="" />
              <div className="card-body">
                <h4>ENGORDE</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officiis veritatis cum dolore quaerat provident.</p>
                <Link className='btn btn-primary' to='/qori/servicios/engorde'>Ver Más</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={ensilado} className='card-img-top' alt="" />
              <div className="card-body">
                <h4>ENSILADOS</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officiis veritatis cum dolore quaerat provident.</p>
                <Link className='btn btn-primary' to='/qori/servicios/ensilado'>Ver Más</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={tecnologia} className='card-img-top' alt="" />
              <div className="card-body">
                <h4>ORDEÑO MECANICO</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officiis veritatis cum dolore quaerat provident.</p>
                <Link className='btn btn-primary' to='/qori/servicios/ordeño-mecanico'>Ver Más</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

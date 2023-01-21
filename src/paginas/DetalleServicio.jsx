import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Lechera } from './Lechera';
import { NoFound } from './NoFound';

export const DetalleServicio = () => {
    // const {deta} =  useLoaderData();
    const params = useParams();
    console.log(params);
    if (params.servicio === "lechera") {
      return <Lechera />
    }
    if (params.servicio === "engorde") {
      return <NoFound />
    }
    if (params.servicio === "ensilado") {
      return <NoFound />
    }
  return (
    <>
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}

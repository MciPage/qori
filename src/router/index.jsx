import { createBrowserRouter } from "react-router-dom";
import { Principal } from "../componentes/Principal";
import { Contacto } from "../paginas/Contacto";
import { DetalleServicio } from "../paginas/DetalleServicio";
import { Inicio } from "../paginas/Inicio";
import { Lechera } from "../paginas/Lechera";
import { NoFound } from "../paginas/NoFound";
import { Servicios } from "../paginas/Servicios";

export const rutas = createBrowserRouter([
    {
        path:"/",
        element: <Principal />,
        errorElement:<NoFound />,
        children:[
            {
                path:"/",
                element:<Inicio />
            },
            {
                path:"/inicio",
                element:<Inicio />
            },
            {
                path:"/contacto",
                element:<Contacto />
            },
            {
                path:"/servicios/:servicio",
                element:<DetalleServicio />
            },
            {
                path:"/servicios",
                element:<Servicios titulo="SERVICIOS"/>,
                errorElement:<NoFound />,
                // children:[
                //     {
                //         path:"/servicios/:servicio",
                //         element:<DetalleServicio />
                //     }
                // ]
            }
        ]
    }
])
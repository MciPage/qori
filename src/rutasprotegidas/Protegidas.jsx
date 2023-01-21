import { Navigate, Outlet } from 'react-router-dom'

export const Protegidas = ({isAllowed,children,redirectTo="/landing"}) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo}/>
    }
  return children? children:<Outlet />
}

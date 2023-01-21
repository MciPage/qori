import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Protegidas } from './componentes/Protegidas'
import { Admin, Dashboard, Home, Landing, Usuarios } from './paginas'
import { Navegacion } from './paginas/Navegacion'
const App = () => {
  const [user, setUser]=useState(null)
  const login = () =>{
    setUser({
      id:1,
      name:"Ali",
      permiso:['usu'],
      rol:['admin']
    })
  }
  const logout = () => setUser(null)
  return (
    <BrowserRouter>
      <Navegacion />
      {
        user ? (
          <button onClick={logout}>Logout</button>
          ):(
            
          <button onClick={login}>Login</button>
        )
      }
      <Routes>
        <Route index element={<Landing/>} />
        <Route  path='/landing' element={<Landing/>}/>
        <Route element={<Protegidas isAllowed={!!user} />}>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route  path='/usuarios' element={
          <Protegidas isAllowed={!!user && user.permiso.includes("usu")} redirectTo='/home'>
            <Usuarios/>
          </Protegidas>
        }/>
        <Route  path='/admin' element={
          <Protegidas isAllowed={!!user && user.rol.includes("admin")} redirectTo='/home'>
            <Admin />
          </Protegidas>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
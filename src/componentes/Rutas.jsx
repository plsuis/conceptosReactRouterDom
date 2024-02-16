import { Outlet,Route,Routes } from "react-router-dom";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    );
  }

function ComponenteAnidado(){
    return (
        <div>
            <h2>Compoñente anidado</h2>
        </div>
    )
}

function ComponenteRutaRelativa(){
    return(<div>
        <h3>Esta é unha ruta relativa</h3>
        <Outlet />
    </div>)
}
function ComponenteRuta(){
    return (<div><h3>Outro compoñente</h3></div>)
}
export default function Rutas(){

    return(
    <Routes>
        <Route path="/" element={<Dashboard />}>
            <Route path="/ruta0" element={<ComponenteAnidado />}></Route>
        </Route>
        <Route path="/contactos/:id" element={<ComponenteRutaRelativa />} />
        <Route path="/ventas/:id" element={<ComponenteRutaRelativa />}>
            <Route path="/ventas/:id/ruta0" element={<ComponenteAnidado />}/>
        </Route>
        <Route path="/componenteruta"/>
    </Routes>
    )
}
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

export default function Rutas(){

    return(
    <Routes>
        <Route path="/" element={<Dashboard />}>
            <Route path="/ruta0" element={<ComponenteAnidado />}></Route>
        </Route>
    </Routes>
    )
}
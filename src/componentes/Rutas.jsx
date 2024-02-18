import { Outlet,Route,Routes,Link } from "react-router-dom";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/">Home</Link>
        <Link to="/logueo">Logueo</Link>
        <Link to="/rexistro">Rexistro</Link>
      </div>
    );
  }

function Logueo(){
    return(<>Estou en logueo</>)
}

function Rexistro(){
    return(<>Estou en Rexistro</>)
}
export default function Rutas(){

    return(
    <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="logueo" element={<Logueo />}/>
        <Route path="rexistro" element={<Rexistro />} />
    </Routes>
    )
}
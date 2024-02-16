import { Outlet,Route,Routes,Link, useParams } from "react-router-dom";


function Layout(){
    const {id} = useParams()
    console.log('estou en layout id: ',id)
    return (<>
        <nav>
            <Link to="/ruta0">Ruta 0</Link>
            <Link to="/componenteruta">Componente Ruta</Link>
            <Link to="contactos/3">Ruta relativa con contactos</Link>
            <Link to="/ventas">Ruta con ventas</Link>
            <Link to="/ventas/5">Ruta relativa con ventas</Link>
            <Link to="/ventas/8/ruta0">Ruta relativa con ventas</Link>
        </nav>
   
    <Outlet />
        </>
    )
}




function Dashboard() {
    return (
      <div className="componentes">
        <h5>Dashboard</h5>
{/*         <Outlet />
 */}      </div>
    );
  }

function ComponenteAnidado(){
    return (
        <div className="componentes">
            <h2>Compoñente anidado</h2>
            
        </div>
    )
}

function ComponenteRutaRelativa(){
    const {id} = useParams()
    console.log('estou en ruta relativa e o id é: ',id)
    return(<div className="componentes">
        <h3>Esta é unha ruta relativa</h3>
        <div>o id é {id}</div>
       
    </div>)
}
function ComponenteVentas(){
    const {id} = useParams()
    console.log('estou en relativa2 e o id é: ',id)
    return(<div className="componentes">
        <h3>Componente VENTAS</h3>
        <div>o id é {id}</div>
       
       <Outlet />
    </div>)
}
function ComponenteRuta(){
    return (<div className="componentes"><h3>Outro compoñente</h3></div>)
}
function Componente404(){
    return (<h1>404</h1>)
}

export default function Rutas(){

    return(
    <Routes>
        <Route path="/" element={<Layout />} >
          
            <Route index element={<Dashboard />} />
                
            <Route path="contactos/:id" element={<ComponenteRutaRelativa />} />
            
            <Route path="ventas" element={<ComponenteVentas />}>
                <Route path=":id" element={<ComponenteRutaRelativa />} />
                <Route path=":id/ruta0" element={<h1>componente anidado</h1>}/>
            </Route>
            <Route path="componenteruta" element={<ComponenteRuta />}/>
            <Route path="ruta0" element={<ComponenteAnidado />} /> 
            <Route path="*" element={<Componente404 />}></Route>
        </Route>
    </Routes>
    )
}
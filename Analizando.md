# Observar

1. Crear o compoñente Rutas e chamalo dende App
2. Poñer en App 'Router Component' `<BrowserComponent>`
3. Agregamos un compoñente dentro da ruta inicio: 
    ```javascript
        <Route path="/" element={<Dashboard />}>
            <Route path="/ruta0" element={<ComponenteAnidado />}></Route>
        </Route>
    ```
4. Comentamos a etiqueta de `<Outlet />`
    - ¿Qué acontece?

5. Agrego unha ruta relativa `path="contactos/:id"`.

    ```javascript
    <Route path="/contactos/:id" element={<ComponenteRutaRelativa />} />
    ```
6. Agregamos un compoñente anidado a unha ruta relativa:

    ```javascript
    <Route path="/ventas/:id" element={<ComponenteRutaRelativa />}>
            <Route path="/ventas/:id/ruta0" element={<ComponenteAnidado />}/>
        </Route>
    ```
    - Observamos qué acontece se quitamos o compoñente `<Outlet />`

7. Agrego un compoñente co `Compoñente Link` de ***react-router-dom***
    - A maiores agrego outra ruta en `Rutas.jsx`
    ```javascript
    <Route path="/componenteruta"/>
    ```
    - Agrego os links adecuados no compoñente `Links`

8. Comentamos no compoñente Links os links asociados ás rutas e o propio de BrowserRouter

9. Observade cando colocamos a etiqueta `<nav>`, esta deberá estar contida sobre os `Links` co compoñente `Outlet` fora.
    - Observade se colocamos `Outlet` dentro da etiqueta `nav` na barra de ferramentas do navegador

> Isto implica que deberemos observar sobre que etiquetas envolvemos os Links, e deixar fora o componente `Outlet`

10. O uso de `Outlet` é moi importante de cara as rutas relativas.

```javascript
function ComponenteVentas(){
    const {id} = useParams()
    console.log('estou en relativa2 e o id é: ',id)
    return(<div className="componentes">
        <h3>Esta é unha ruta relativa2</h3>
        <div>o id é {id}</div>
       
       <Outlet />
    </div>)
}
```
    - Se o quitamos non veríamos os fillos asociados:

    ```javascript
            <Route path="ventas" element={<ComponenteVentas />}>
                <Route path=":id" element={<ComponenteRutaRelativa />} />
                <Route path=":id/ruta0" element={<h1>componente anidado</h1>}/>
            </Route>
    ```
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
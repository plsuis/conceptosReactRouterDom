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
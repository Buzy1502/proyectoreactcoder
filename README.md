# Puss in books - E-commerce

Proyecto final para el curso de reactJS de coderhouse - comisión 43295.

Se trata de un e-commerce de libros.

## Logo

Diseño para el logo:

### Intalación local

1. Ingresar en la terminal `$ git clone https://github.com/Buzy1502/proyectoreactcoder.git`.
2. `$ cd proyectoreactcoder`.
3. Una vez dentro de la carpeta del proyecto, instalar las dependencias usando `npm install o npm i`.
4. Levantar el servidor con `$ npm start`.

### Rutas definidas

Configuradas en App.js

1. La ruta "/" (por default) muestra el título de bienvenida y el listado de todos los productos (ItemListContainer).

2. La ruta "/category/:categoryId" muestra los productos filtador según cada una de las 3 categorías existentes: Juegos, Consolas, Perifericos. El componente tiene el nombre ItemListContainer + filtrado por categoria.

3. La ruta "/item/:itemId" muestra el detalle del producto seleccionado mediante el link "ver más", ubicando el producto y asociado a su id.

4. Laruta "/cart", lleva al carrito de compras para ver el listado de productos agregados, donde se podra sumar, restar o eliminar productos por unidad, mismo vaciar el carrito. Tambien es posible navegar al catalogo desde esta ruta, y en caso de que el carrito de compras este vacio, se indicara que no hay productos agregados y se habilita un boton para volver al catalogo.

5.  Laruta "/checkout", lleva al detalle de la compra, donde se muestra un formulario de contacto, donde el usuario debe ingresar sus datos para la confirmación de la compra.

    Una vez completado el formulario de contacto, se le mostrara por pantalla al usuario el id de la compra junto con un boton que le permite ir a la pagian principal para seguir comprano.

6. La ruta "/*" define que toda otra ruta a la que se quiera acceder mediante el navegador del browser (y no sea alguna de las anteriores), devuelva "404 - página no encontrada" junto al logo de la App.

### Detalles

**Dependencias**

- React-bootstrap para implementar componentes de react.
- CDN de bootstrap, para estilizar algunas secciones.
- Firebase, usada para almacenar el stock y detalle de cada producto.

### Recorrido

**Recorrido completo**

<video width="320" height="240" controls>
  <source src="./src/Statics/recorrido.webm" autoplay>
</video>

**Error 404 pagina no encontrada**
![error 404](/src/Statics/404.png)
#### Autor

[Botheina Rachid](https://github.com/Buzy1502)
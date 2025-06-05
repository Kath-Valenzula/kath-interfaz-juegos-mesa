# KATH.cl – Interfaz Web para Tienda de Juegos de Mesa

Este repositorio contiene el desarrollo de una aplicación web para la tienda ficticia **KATH.cl**, realizada como parte de la asignatura 
---

## Descripción General

El proyecto consiste en una interfaz gráfica moderna y responsiva, orientada a la gestión y promoción de juegos de mesa. La aplicación permite a los usuarios explorar el catálogo por categorías y realizar su registro en el sistema, facilitando la futura asignación de recompensas y la gestión de compras.

---

## Funcionalidades Principales

* **Menú de navegación fijo y responsivo**
  Acceso rápido a las secciones principales del sitio.

* **Presentación de categorías**
  Catálogo visual de juegos: Estrategia, Familiar, Cartas y Fiesta.

* **Tarjetas de producto**
  Visualización atractiva de los juegos disponibles.

* **Formulario de registro de usuario**

  * Validación avanzada mediante JavaScript (campos obligatorios, formato de correo, edad mínima, requisitos de contraseña).
  * Uso de clases Bootstrap (`form-control`, `btn`) en el formulario para estandarización visual y cumplimiento de buenas prácticas.
  * Mensajes personalizados de error y éxito.
  * Remarcado visual de campos con errores.

* **Datos de contacto y horarios de atención**
  Información clara y visible para los usuarios.

* **Pie de página institucional**
  Incluye derechos reservados y el año de desarrollo.

* **Logo personalizado**
  Integración del logo de la tienda en el encabezado para refuerzo de marca.

---

## Tecnologías Utilizadas

* **HTML5**
* **CSS3**
* **Bootstrap 5** 
* **JavaScript (ES6)**

---

## Estructura del Proyecto

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── kath.cl.png
│   └── ... (otras imágenes y capturas)
└── README.md
```

---

## Instrucciones de Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Kath-Valenzula/kath-interfaz-juegos-mesa.git
   ```

2. **Abrir el archivo `index.html`** en su navegador web preferido para visualizar la aplicación.

---

## Validaciones del Formulario

El formulario de registro cumple los siguientes requisitos:

* Todos los campos, excepto la dirección de despacho, son obligatorios.
* El correo electrónico debe ser válido.
* Las contraseñas deben coincidir, tener entre 6 y 18 caracteres, contener al menos una letra mayúscula y un número.
* El usuario debe tener al menos 13 años para poder registrarse.
* Los campos con errores se remarcan visualmente, y se entregan mensajes personalizados de advertencia o éxito.

---

## Personalización del Logo

Para cambiar el logo de la tienda:

* Reemplazar el archivo `img/kath.cl.png` por la imagen deseada.
* Ajustar el tamaño modificando el atributo `height` en el bloque correspondiente del header en `index.html`.

---

## Publicación en GitHub Pages

Para publicar el sitio:

1. Ingresar a la pestaña **Settings > Pages** del repositorio en GitHub.
2. Seleccionar la rama `main` y la carpeta `/ (root)` como fuente.
3. Guardar los cambios y acceder a la URL proporcionada por GitHub Pages.


---

## Autoría

* **Kath**
  [GitHub](https://github.com/Kath-Valenzula)

---

## Licencia

Este proyecto es de carácter académico y no comercial. Todos los derechos reservados a su autora y a la institución respectiva.

---

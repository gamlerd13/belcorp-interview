# Prueba Técnica: Gestión de Productos

### Proyecto vercel:

### [link de la prueba técnica :D](https://belcorp-interview.vercel.app/)

## Descripción del Proyecto

Esta prueba técnica consiste en crear una aplicación web que permite gestionar productos utilizando tecnologías modernas como AgGrid, Zustand, y Radix UI. La aplicación permite la visualización, filtrado, y descarga de productos, así como la gestión de datos mediante un modal.

## Tecnologías Utilizadas

- **AgGrid**: Para la visualización de datos en formato tabla.
- **UseContext**: Para la gestión del estado de la aplicación.
- **Zustand**: Para el manejo del estado global y almacenamiento de productos.
- **LocalStorage**: Para persistir datos en el navegador.
- **Search Filter**: Para filtrar productos en la tabla.
- **Excel Download**: Para la descarga de datos en formato Excel (solo acceso de prueba).
- **Modal para enviar Productos**: Para editar o enviar productos.
- **Detalle con Pestañas (Tabs)**: Para mostrar diferentes vistas de información.
- **Validaciones Simples**: Validaciones básicas, (no heutilizado Zod).
- **Custom Hooks**: Para la reutilización de lógica de componentes.
- **TypeScript**: Para un tipado seguro y robusto.
- **ESLint y Prettier**: Para asegurar la calidad del código y mantener el estilo.
- **Tailwind CSS**: Para estilos rápidos y responsivos.
- **Radix UI**: Para componentes accesibles y personalizables.
- **Axios**: Para realizar peticiones HTTP.

## Requerimientos

1. **Recuperar datos de productos** desde la API: `https://dummyjson.com/products`.
2. **Almacenar los productos** en un store utilizando Zustand.
3. **Mostrar los datos del store** en una tabla con las columnas: `id`, `title`, `description`, `price`.
4. **Interacción con la tabla**:
   - Al hacer clic en una fila, mostrar un modal que contenga:
     - **Pestañas**:
       - **General**:
         - Formulario con los siguientes campos:
           - **Marca**: Lista desplegable con las opciones: Esika, Lbel y Cyzone.
           - **Precio**: Input numérico, validando que tenga 6 decimales y valores entre 0 y 1.
           - **Botón Confirmar**: Al hacer clic, mostrar una alerta con el precio.
           - **Opción de Salir**: Para cerrar el modal.
       - **Detalle**:
         - Mostrar un texto con la fecha y hora en formato: `día/mes/año hora:minuto`.

## Recursos Obligatorios

- **Ag-Grid**: [Documentación de Ag-Grid](https://www.ag-grid.com)
- **Radix UI**: [Documentación de Radix UI](https://www.radix-ui.com)
- **Tailwind CSS**: [Documentación de Tailwind CSS](https://tailwindcss.com)
- **Zustand**: [Zustand Demo](https://zustand-demo.pmnd.rs/)

## Vistas Sugeridas

Las vistas deben ser intuitivas y responsivas, siguiendo buenas prácticas de diseño y accesibilidad.

## Ejecución del Proyecto

1. **Instalar Dependencias**: Asegúrate de tener todas las dependencias necesarias instaladas en tu proyecto.
   ```bash
   npm install
   ```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```

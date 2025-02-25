Este proyecto consiste en una aplicación que permite a los usuarios interactuar con la API de Azure DevOps para obtener información sobre sus organizaciones y proyectos. La aplicación está compuesta por un backend (servidor Node.js con Express) y un frontend (aplicación React). A continuación, se detalla cómo funciona el proyecto y cómo utilizarlo.

Requisitos Previos

Node.js y npm: Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde nodejs.org.

Token de Acceso de Azure DevOps: Necesitarás un token de acceso personal (PAT) de Azure DevOps con permisos completos (Full Access) y acceso a todas las organizaciones. Puedes generar un token desde la configuración de tu cuenta en Azure DevOps.

Estructura del Proyecto

El proyecto está dividido en dos partes principales:

Backend: Servidor Node.js que se comunica con la API de Azure DevOps.

Frontend: Aplicación React que permite al usuario introducir su token y visualizar las organizaciones y proyectos.

Backend

index.js: Punto de entrada del servidor. Configura Express, CORS y las rutas.

azureDevOps.js: Contiene las rutas para obtener el memberId, listar organizaciones y proyectos.

Frontend

index.jsx: Punto de entrada de la aplicación React.

App.jsx: Componente principal que maneja la lógica de la aplicación.

TokenInput.jsx: Componente para introducir el token de acceso.

index.css: Estilos CSS para la aplicación.

Instrucciones de Uso

1. Configuración del Backend

Clona el repositorio (si no lo has hecho ya).

Instala las dependencias del backend:

cd backend
npm install

Inicia el servidor:

npm start

El servidor estará corriendo en http://localhost:5000.

2. Configuración del Frontend

Instala las dependencias del frontend:

cd frontend
npm install

Inicia la aplicación React:

npm start

La aplicación estará disponible en http://localhost:3000.

3. Uso de la Aplicación

Introduce tu Token de Acceso:

Al abrir la aplicación, verás una pantalla para introducir tu token de acceso de Azure DevOps.

Ingresa el token y haz clic en Enviar.

Lista de Organizaciones:

Una vez que el token sea válido, la aplicación obtendrá automáticamente el memberId y listará las organizaciones asociadas a tu cuenta.

Selecciona una organización para ver sus proyectos.

Lista de Proyectos:

Después de seleccionar una organización, la aplicación mostrará la lista de proyectos dentro de esa organización.

Flujo de Comunicación entre Frontend y Backend

Frontend:

El usuario introduce el token en el componente TokenInput.

El token se envía al backend mediante una solicitud POST a http://localhost:5000/api/azure/member-id.

Backend:

El backend recibe el token y lo utiliza para obtener el memberId desde la API de Azure DevOps.

Luego, el backend utiliza el memberId para obtener la lista de organizaciones y la devuelve al frontend.

Frontend:

El frontend muestra la lista de organizaciones.

Cuando el usuario selecciona una organización, el frontend envía una solicitud al backend para obtener la lista de proyectos.

Backend:

El backend recibe la solicitud, utiliza el token y el nombre de la organización para obtener la lista de proyectos desde la API de Azure DevOps.

La lista de proyectos se devuelve al frontend.

Frontend:

El frontend muestra la lista de proyectos.

Consideraciones Importantes

Token de Acceso:

El token debe tener permisos completos (Full Access) y acceso a todas las organizaciones.

Asegúrate de que el token no haya expirado.

CORS:

El backend está configurado para permitir solicitudes desde http://localhost:3000 (el frontend). Si cambias el puerto del frontend, asegúrate de actualizar la configuración de CORS en el backend.

Errores Comunes:

Si el token es inválido o no tiene los permisos necesarios, la aplicación mostrará un mensaje de error.

Si el backend no está corriendo, el frontend no podrá obtener datos.

Ejemplo de Uso

Inicia el backend:

cd backend
npm start

Inicia el frontend:

cd frontend
npm start

Abre el navegador:

Ve a http://localhost:3000.

Introduce tu token de acceso de Azure DevOps.

Selecciona una organización y visualiza sus proyectos.

Preguntas Frecuentes

1. ¿Cómo genero un token de acceso en Azure DevOps?

Ve a la configuración de tu cuenta en Azure DevOps.

Selecciona "Tokens de acceso personal".

Haz clic en "Nuevo token" y selecciona Full Access como ámbito.

2. ¿Qué hago si obtengo un error al enviar el token?

Verifica que el token sea válido y tenga los permisos necesarios.

Asegúrate de que el backend esté corriendo en http://localhost:5000.

3. ¿Puedo cambiar el puerto del backend o frontend?

Sí, pero asegúrate de actualizar las URLs en el frontend (App.jsx) y la configuración de CORS en el backend (index.js).

Conclusión

Este proyecto es una herramienta útil para interactuar con la API de Azure DevOps y obtener información sobre organizaciones y proyectos de manera sencilla. Con esta documentación, deberías poder configurar y utilizar la aplicación sin problemas. Si tienes alguna pregunta o encuentras algún problema, no dudes en consultar la sección de preguntas frecuentes o contactar al equipo de desarrollo.

¡Gracias por utilizar nuestra aplicación! 🚀

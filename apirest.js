/*
API:
Es una interfaz para que programas se comuniquen entre sí.

REST:
Es un estilo arquitectónico para diseñar APIs usando la web.

API REST:
Es una API que sigue las reglas del estilo REST


PROTOCOLO EN QUE SE COMUNICA:
API REST se comunica con el protocolo HTTP

EJEMPLO:

GET /users/1 HTTP/1.1
Host: api.ejemplo.com

FORMATO EN QUE SE COMUNICA:
JSON (JavaScript Object Notation) , es el estandar actual.

EJEMPLO:

{
  "id": 1,
  "nombre": "Ana"
}


También puede usar:

XML (menos común hoy)
Texto plano
FormData
HTML (raro en APIs modernas)


Verbos HTTP (Métodos):
REST usa los verbos HTTP para definir la acción.

| Verbo  | Acción              | Ejemplo                |
| ------ | ------------------- | ---------------------- |
| GET    | Obtener datos       | Obtener usuarios       |
| POST   | Crear recurso       | Crear usuario          |
| PUT    | Actualizar completo | Actualizar usuario     |
| PATCH  | Actualizar parcial  | Cambiar solo el nombre |
| DELETE | Eliminar            | Eliminar usuario       |



Status Codes (Códigos de estado):
Cuando se hace una petición HTTP, el servidor responde con un código numérico.

status codes los mas comunes 

2xx → Éxito:

| Código | Significado |
| ------ | ----------- |
| 200    | OK          |
| 201    | Created     |
| 204    | No Content  |


4xx → Error del cliente:

| Código | Significado  |
| ------ | ------------ |
| 400    | Bad Request  |
| 401    | Unauthorized |
| 403    | Forbidden    |
| 404    | Not Found    |


5xx → Error del servidor:

| Código | Significado           |
| ------ | --------------------- |
| 500    | Internal Server Error |
| 502    | Bad Gateway           |
| 503    | Service Unavailable   |







// reglas de apirest 
1. Arquitectura Cliente–Servidor

El cliente  hace las solicitudes.
El servidor procesa y responde.
Ambos son independientes.


2. Stateless (Sin estado)

Cada petición debe contener toda la información necesaria.
El servidor no guarda estado del cliente entre peticiones.



3. Uso correcto de los métodos HTTP

| Método | Uso                         |
| ------ | --------------------------- |
| GET    | Obtener datos               |
| POST   | Crear recurso               |
| PUT    | Actualizar recurso completo |
| PATCH  | Actualizar parcialmente     |
| DELETE | Eliminar recurso            |



4. Recursos identificados por URL

Los recursos deben representarse con sustantivos, no verbos.

Ejemplo:

GET /usuarios
GET /usuarios/10
POST /usuarios



5. Representaciones
Normalmente se usa JSON.

Se especifica con:

Content-Type: application/json


6.Uso correcto de códigos de estado HTTP

| Código | Significado   |
| ------ | ------------- |
| 200    | OK            |
| 201    | Created       |
| 204    | No Content    |
| 400    | Bad Request   |
| 401    | Unauthorized  |
| 403    | Forbidden     |
| 404    | Not Found     |
| 500    | Error interno |




7. Interfaz uniforme

Debe existir coherencia en:

Estructura de URLs
Formato de respuestas
Manejo de errores

{
  "error": "Usuario no encontrado",
  "code": 404
}



8. Cacheable

Las respuestas deben indicar si pueden cachearse:

Cache-Control: max-age=3600


9. Versionado

Es buena práctica versionar la API:

Ejemplo:

/api/v1/usuarios
/api/v2/usuarios


10. HATEOAS (Opcional en REST puro)

El servidor puede incluir enlaces relacionados dentro de la respuesta.

Ejemplo:

{
  "id": 10,
  "nombre": "Juan",
  "links": {
    "self": "/usuarios/10",
    "pedidos": "/usuarios/10/pedidos"
  }
}







primer regla con protocolo https

no cambia la arquitectura pero se mejora la seguridad de la comunicación.









Swagger:
Es una herramienta para documentar, diseñar y probar APIs REST.

sirve para:

Documentar endpoints automáticamente
Probar la API desde el navegador
Generar código cliente o servidor
Diseñar APIs antes de programarlas



Cómo funciona:
Swagger usa un archivo (YAML o JSON) que describe tu API.

Ejemplo:

openapi: 3.0.0
paths:
  /users:
    get:
      summary: Obtener usuarios
      responses:
        200:
          description: Lista de usuarios


/*

/*



CONTRATO:
Una definición clara de cómo dos sistemas deben comunicarse.

Define cosas como:

Qué datos se envían
En qué formato
Qué respuestas se reciben
Qué errores pueden ocurrir


YAML(YAML Ain't Markup Language):

Es un formato de texto simple y legible para:

Configuración
Intercambio de datos
Definición de estructuras
Contratos de APIs



Contrato YAML:
Es un archivo escrito en YAML que define formalmente cómo funciona una API.

Un contrato YAML permite:

Generar documentación automática (con Swagger UI)
Validar requests y responses
Generar código backend o frontend
Detectar breaking changes
Hacer pruebas automáticas


EJEMPLO:

nombre: Ana
edad: 25
activo: true




*/

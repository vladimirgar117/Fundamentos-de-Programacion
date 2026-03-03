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





// reglas de apirest / primer regla con protocolo https

1. Uso de recursos, no acciones
  Todo se organiza en recursos (sustantivos), no en acciones (verbos).


GET /usuarios       → Obtener lista de usuarios
POST /usuarios      → Crear un nuevo usuario
PUT /usuarios/1     → Actualizar usuario con id 1
DELETE /usuarios/1  → Eliminar usuario con id 1











// status codes los mas comunes 




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

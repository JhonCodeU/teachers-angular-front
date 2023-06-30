# Bitrix24 Rest API Product

Este proyecto es una aplicación web que utiliza la API Rest de Bitrix24 para mostrar productos en una tabla. Permite autenticarse con Bitrix24, obtener un token de acceso y realizar solicitudes GET para obtener y mostrar los productos en la tabla.

## Características

- Autenticación con Bitrix24 mediante el flujo de autenticación OAuth2.
- Obtención de token de acceso mediante interacción con Bitrix24.
- Solicitud GET para obtener los productos desde Bitrix24 y mostrarlos en una tabla.
- Edición de productos existentes y creación de nuevos productos.

## Tecnologías utilizadas

- Angular: versión 12.0.0
- TypeScript: versión 4.3.5
- HTML y CSS

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

## Configuración

Antes de ejecutar la aplicación, es necesario configurar los detalles de la API de Bitrix24 en el archivo `environment.ts`. Asegúrate de tener los siguientes valores actualizados:

```typescript
export const environment = {
  production: false,
  bitrix24ApiUrl: 'https://your-bitrix24-domain/rest',
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'http://localhost:4200/auth',
};
```

Reemplaza `'your-bitrix24-domain'`, `'your-client-id'` y `'your-client-secret'` con los valores correspondientes de tu cuenta de Bitrix24. Asegúrate de que `redirectUri` coincida con la URL de tu aplicación.

## Uso

1. Ejecuta el siguiente comando para iniciar la aplicación:

   ```
   ng serve
   ```

2. Abre un navegador web y accede a `http://localhost:4200`.
3. Haz clic en el botón "Obtener código" para iniciar el proceso de autenticación con Bitrix24.
4. Copia el código de autenticación de la URL y pégalo en el campo correspondiente.
5. Haz clic en el botón "Enviar" para obtener el token de acceso.
6. Los productos se mostrarán en la tabla.

## Contribución

Las contribuciones son bienvenidas. Si tienes alguna sugerencia, mejora o corrección, no dudes en enviar una solicitud de extracción.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

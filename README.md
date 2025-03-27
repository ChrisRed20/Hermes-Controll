# Proyecto Ionic: Hermes-Controll

## Descripción

Hermes-Controll es una aplicación móvil desarrollada con Ionic para gestionar rutas de camión YOVOY.

## Requisitos

- Node.js (versión 12.x o superior)
- Ionic CLI (versión 6.x o superior)
- Git

## Configuración del Entorno de Desarrollo

### Instalar Ionic CLI
```bash
npm install -g @ionic/cli
```

### Instalar Capacitor
```bash
npm install @capacitor/core @capacitor/cli
npx cap sync
```

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/ChrisRed20/Hermes-Controll.git
    cd Hermes-Controll
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Ejecuta la aplicación en modo de desarrollo:

    ```sh
    ionic serve
    ```

## Compilación

Para compilar la aplicación para producción:

```sh
ionic build --prod
```


## Deploy a android 

Para probar la funcionalidad nativa es necesaria la instalación de Android Studio y una versión mínima de Java 21

1. Ejecutar el comando para hacer build al proyecto si aún no se ha hecho

```sh
ionic build --prod
```

Esto creará una carpeta llamada www

2. ejecutarar el comando para agregar la carpeta de android 

```sh
npx cap add android
```

3. abrir el proyecto en android studio 

```sh
npx cap open android
```

IMPORTANTE:

Cada que se hagan cambios en el código ionic debes sincronizar los cambios a la carpeta android.

1.
```sh
ionic build --prod
```

2.
```sh
npx cap sync android 
```
## Requisitos Previos
- Node.js (versión 16 o superior)
- npm (versión 8 o superior)
- Ionic CLI
- Android Studio
- SDK de Android

## Solución de Problemas

- Asegúrate de tener las versiones correctas de Node.js y npm
- Verifica que Android Studio esté correctamente configurado
- Revisa que todas las dependencias estén instaladas
- Limpia el proyecto con `ionic cap clean`

## Dependencias Principales
- Ionic
- Angular
- Capacitor
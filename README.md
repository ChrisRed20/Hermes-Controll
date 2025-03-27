# 🚀 Proyecto Ionic

Este proyecto está desarrollado con **Ionic** y utiliza **Capacitor** para la integración con Android.  

## 📌 Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [Ionic CLI](https://ionicframework.com/docs/cli)  
  ```sh
  npm install -g @ionic/cli
  ```
- [Capacitor](https://capacitorjs.com/)  
  ```sh
  npm install @capacitor/core @capacitor/cli
  ```
- [Android Studio](https://developer.android.com/studio)  
- Java JDK 11 o superior  
- Variables de entorno configuradas para `ANDROID_HOME` y `JAVA_HOME`

## 📂 Instalación del proyecto

1. **Clonar el repositorio**  
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar dependencias**  
   ```sh
   npm install
   ```

## ⚡ Ejecutar la aplicación en el navegador

Para probar la aplicación en el navegador, usa el siguiente comando:  
```sh
ionic serve
```
Esto abrirá la app en el navegador con recarga en vivo.

## 📱 Construcción para Android

Para ejecutar la aplicación en un dispositivo o emulador Android, sigue estos pasos:

1. **Agregar la plataforma Android (si aún no está agregada)**  
   ```sh
   ionic capacitor add android
   ```

2. **Construir la aplicación y sincronizar con Android**  
   ```sh
   ionic build
   ionic capacitor copy android
   ```

3. **Abrir el proyecto en Android Studio**  
   ```sh
   ionic capacitor open android
   ```

4. **Ejecutar en un dispositivo o emulador**  
   - Abre **Android Studio**  
   - Conéctalo a un dispositivo físico o emulador  
   - Haz clic en **Run ▶️**

## 🔄 Sincronizar cambios con Android

Cada vez que hagas cambios en la aplicación, usa:  
```sh
ionic build
ionic capacitor sync android
```
Esto actualizará el código en la carpeta `android` sin necesidad de eliminarla y volver a agregarla.

## 🛠 Solución de problemas

Si encuentras errores en Android Studio, prueba lo siguiente:

- Asegúrate de tener instalados los paquetes de Android SDK en Android Studio.
- Verifica que tienes un emulador configurado correctamente.
- Si hay errores de permisos, corre:
  ```sh
  npx cap sync android
  ```
- Si tienes problemas con dependencias de Gradle, ejecuta:
  ```sh
  cd android && ./gradlew clean
  ```

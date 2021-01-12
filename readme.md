# IONIC CONTACTS

Este será el último ejercicio evaluable antes del proyecto final.

## Introducción

La aplicación será una agenda de contactos, con un formulario para añadir un nuevo contacto.

## Estructura

La aplicación consta de dos páginas: lista de contacto y formulario de nuevo contacto (modal).

### La lista de contactos

1. Despliega una lista de contactos cuando se carga
2. Los contactos tienen fotografía (miniatura) y nombre
3. La página tendrá un botón ('+') en la esquina superior izquierda para abrir el modal con el formulario.

La lista quedaría así:

![](https://i.imgur.com/WaKiSve.png)


### El formulario

1. Tiene una cabecera con el botón cancel, título y botón done
   1. Botón **`cancel`**, vuelve a la lista. Siempre está activo
   2. Botón **`done`**, está inhabilitado hasta que se completan todos los datos.
   3. Avatar: Se mostrará la imagen del avatar (se facilita) hasta que se tome una fotografía desde el botón __`add photo`__, o se suba una desde un archivo.
   4. Botón __`add photo`__: abre la cámara para tomar una fotografía. 
   
El formulario quedará así:

![](https://i.imgur.com/OINlHVg.png)

## Funcionalidad

1. La lista de contactos se carga al iniciar la aplicación con todos los contactos iniciales más los almacenados en el storage.
2. A la lista se vuelve a ella desde los botones _cancel_ y _done_ del formulario.
3. EL botón `done` guarda los datos y carga la lista con los nuevos contactos incorporados.
4. La cámara toma fotos y las fotografías se almacenan junto con los nuevos contactos en el storage del dispositivo. 

## Requerimientos técnicos

1. Crea una aplicación ionic blank capacitor
2. Crea dos "pages": una lista y un formulario
   1. Crea la lista con elementos ion-list
   2. Crea el formulario con elementos ion-input
3. Dentro del componente `lista` asocia el `formulario` a un [Modal Controller](https://ionicframework.com/docs/v4/api/modal)
4. Sigue el tutorial [Your First Ionic App: Angular](https://ionicframework.com/docs/angular/your-first-app) para incorporar las funcionalidades de la cámara y el almacenamiento de imágenes a la aplicación.
5. Los datos de ejemplo se facilitan en el fichero `contacts.json`

### Entrega

La aplicación se empaquetará como fichero ".apk" que se colgará en slack | ejercicios.

Para generar la apk: utilizar la opción de Android Studio:
`Build | build bundle(s)/APK(s) | build APK(s)`
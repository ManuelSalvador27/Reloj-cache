# Reloj Global PWA ⏰

Una Progressive Web App (PWA) que muestra la hora actual y se actualiza cada segundo. La aplicación está diseñada para funcionar sin conexión utilizando estrategias de caché, asegurando una experiencia fluida sin importar la conectividad de red. Este proyecto también incluye soporte dinámico para zonas horarias.

---

## Características

- **Reloj en Tiempo Real**: Muestra la hora actual actualizada cada segundo.
- **Integración con Service Worker**: Proporciona funcionalidad offline mediante el almacenamiento en caché de recursos esenciales.
- **PWA Instalable**: Los usuarios pueden instalar la app en sus dispositivos para obtener una experiencia similar a una aplicación nativa.
- **Diseño Responsivo**: Optimizado para pantallas de móviles, tablets y computadoras.
- **Soporte Dinámico de Zonas Horarias**: Muestra la hora para diferentes zonas del mundo.
- **Interfaz Personalizable**: Moderna e intuitiva para los usuarios.

---

## Demo en Vivo

Accede a la versión en vivo del proyecto alojada en GitHub Pages: [https://manuelsalvador27.github.io/Reloj-cache/](#)

## Despliegue

La aplicación se despliega utilizando **GitHub Pages**, originalmente configurada para realizar el deployment automático a través de **GitHub Actions** al hacer push a la rama `main`. Sin embargo, se identificaron ciertas complicaciones, ya que la página no se visualizaba correctamente después del despliegue automático.

### Solución al Problema de Despliegue
Para resolver el problema, se modificó la configuración de GitHub Pages en el repositorio. En lugar de realizar el despliegue desde el flujo de trabajo de GitHub Actions, se optó por cambiar la configuración de GitHub Pages para que publique el sitio desde una rama específica (`gh-pages`), seleccionando la carpeta raíz (`root`) como origen de contenido. Este ajuste permitió que la página se visualizara correctamente.

### Pasos para la Configuración de GitHub Pages:
1. Ve a la configuración del repositorio en GitHub.
2. En la sección **Pages**, cambia el **Source** (Fuente) a `Deploy from a branch`.
3. Selecciona la rama `gh-pages` como fuente.
4. Asegúrate de que el contenido de la aplicación esté en la raíz de la rama seleccionada.

Con esta configuración, cada vez que se actualiza la rama `gh-pages`, la página se despliega correctamente y queda accesible.

### Acceso al Proyecto:
Puedes acceder al proyecto en vivo en GitHub Pages a través del siguiente enlace:
[Enlace a la Demo](#)


---

## ¿Cómo funciona?

1. Visualización de la Hora
    </br>
    El archivo app.js obtiene la hora actual del sistema y actualiza el DOM cada segundo utilizando setInterval().

2. Soporte Offline
    </br>
    El archivo service-worker.js intercepta solicitudes de red y sirve recursos almacenados en caché cuando no hay conexión.

3. Características de la PWA
    </br>
    El archivo manifest.json incluye los metadatos de la app, como nombre, iconos, colores y orientación, permitiendo a los usuarios instalar la aplicación en sus dispositivos.

### Service Worker
    El Service Worker proporciona funcionalidad offline almacenando en caché recursos clave. 
    Utiliza los siguientes eventos:
    - Evento de Instalación: Almacena en caché los archivos esenciales.
    - Evento de Fetch: Responde con recursos del caché o los obtiene de la red si no están en caché.

## Instalación

Para configurar el proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio**:
   ```clojure
   https://github.com/ManuelSalvador27/Reloj-cache.git
   cd reloj-global-pwa
   ```

## Estrcutura del proyecto

- reloj-global-pwa/
    - index.html           # Archivo principal de HTML
    - styles.css           # Estilos de la aplicación
    - app.js               # JavaScript para la funcionalidad del reloj
    - service-worker.js    # Service Worker para soporte offline
    - manifest.json        # Archivo de configuración para la PWA
    - clock-192.png        # Icono de la app (192x192)
    - clock-512.png        # Icono de la app (512x512)
    - README.md            # Documentación del proyecto
    - package.json         # Detalle del proyecto (nombre, dependencias, etc)

## Herramientas y Tecnologías
- HTML5: Estructura de la app.
- CSS3: Estilos y diseño responsivo.
- JavaScript (ES6): Lógica para la actualización en tiempo real y Service Worker.
- Conceptos de PWA: Diseño offline-first e integración del manifiesto.
- GitHub Actions: CI/CD para desplegar la app automáticamente.

## Contacto
Para cualquier pregunta o sugerencia, por favor contacta a manuelsalvador2799@gmail.com
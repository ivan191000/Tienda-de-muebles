# Muebles Gálvez — Catálogo & Diseño de Interiores

Página web profesional tipo catálogo para **Muebles Gálvez**, una tienda de mobiliario de alta gama diseñada para presentar productos de descanso, cocinas y artículos de salón con un estilo premium, limpio, moderno y completamente adaptable a dispositivos móviles.

---

## 🌟 Características Principales

- **Diseño Visual Premium**: Interfaz estética basada en una paleta de colores cálidos y sofisticados, tipografía cuidada (Playfair Display e Inter) y micro-animaciones suaves.
- **Carruseles Infinitos Interactivos**: Implementación personalizada de sliders dinámicos en JavaScript para las secciones de *Dormitorios*, *Cocinas* y *Salón* sin dependencias externas.
- **Formulario de Contacto Inteligente**:
  - Integrado de forma segura con el servicio externo **FormSubmit**.
  - Sistema de envío asíncrono con **Iframe oculto**, que permite recibir consultas directamente en el email sin redirigir al usuario fuera de la web.
  - Indicadores visuales de estado (mensajes de carga y confirmación tipo *Toast* animado).
- **Optimización de Rendimiento**: Carga rápida optimizada mediante el uso de CSS nativo y JavaScript vanilla (sin frameworks pesados).
- **Estructura Semántica y Accesible**: Código estructurado bajo estándares semánticos HTML5 y pautas de accesibilidad básica.

---

## 🛠️ Tecnologías Utilizadas

El proyecto está construido utilizando tecnologías web nativas para asegurar ligereza, compatibilidad y máxima velocidad de carga:

- **HTML5**: Estructuración semántica de componentes y marcado optimizado para SEO básico.
- **CSS3 (Vanilla CSS)**:
  - Diseño responsivo utilizando *Flexbox* y *CSS Grid*.
  - Variables CSS (`:root`) para un sistema de diseño consistente de colores y espaciados.
  - Efectos visuales modernos, filtros de fondo (`backdrop-filter`) y transiciones de estado fluidas.
- **JavaScript (ES6+)**:
  - Control de carrusel interactivo y clonación de nodos para transiciones de bucle infinito reales.
  - Manejador de eventos y estados para la interactividad del menú y formulario de contacto.
- **FormSubmit.co**: Procesamiento de datos de formulario a correo electrónico de manera segura y directa.

---

## 📂 Estructura del Proyecto

```text
├── index.html       # Estructura principal y marcado semántico de la web
├── styles.css       # Hoja de estilos con variables de diseño, layouts y adaptabilidad (Responsive)
├── js.js            # Lógica interactiva del sitio (Carruseles, menú y envío de formulario)
├── favicon.svg      # Icono del sitio web
└── README.md        # Documentación técnica del proyecto
```

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/Tienda-de-muebles.git
   ```
2. **Abrir el proyecto**:
   - Abre la carpeta del proyecto en tu editor de código favorito (por ejemplo, **VS Code**).
3. **Servir localmente**:
   - Utiliza la extensión **Live Server** de VS Code o cualquier servidor local de desarrollo para iniciar el proyecto en la dirección local (normalmente `http://127.0.0.1:5500`).
   - *Nota:* El envío del formulario requiere ser cargado mediante un servidor local o servidor de producción (`http://` o `https://`) para que las políticas de seguridad del navegador permitan la comunicación del iframe.

---

## ✉️ Configuración de FormSubmit

Para recibir los mensajes en tu propia cuenta de correo:
1. Cambia el correo de destino en el atributo `action` de la etiqueta `<form>` en `index.html`:
   ```html
   <form action="https://formsubmit.co/tu-correo@dominio.com" ...>
   ```
2. La primera vez que envíes un mensaje de prueba desde tu formulario, recibirás un correo de **FormSubmit** solicitando la activación para ese destinatario. Confírmalo una sola vez y el formulario estará 100% operativo.

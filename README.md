🐺 Alfa Escudería UMG
Escudería Estudiantil | Diseño y Construcción de Aeromodelos Competitivos

Netlify Status
License: MIT
Last Updated

📋 Tabla de Contenidos
Descripción General

Contexto del Proyecto

Stack Tecnológico Actual

Estructura del Proyecto

Instalación y Deploy

Roadmap y Planes Futuros

Contribuciones

Contacto

📖 Descripción General
Alfa Escudería UMG es una iniciativa estudiantil de la Universidad Marista de Guadalajara especializada en el diseño, construcción y vuelo de aeromodelos de radiocontrol para competencias de SAE AeroDesign México.

🎯 Nuestras Líneas de Acción
Área	Descripción
📊 Gestión	Planificación, administración de recursos, finanzas, patrocinios y comunicación
🎨 Diseño & Validación	Desarrollo CAD, análisis aerodinámico, estructural y simulaciones computacionales
🔧 Manufactura	Construcción física con fibra de carbono, balsa y sistemas electrónicos integrados
🏆 Logros Recientes
Alfa-01 (2023): Lugar 13 Nacional - SAE AeroDesign México

Quetzalfa-02 (2024): Lugar 5 Nacional + Premio Mérito SAE

FuriA-03 (2025): En desarrollo - Próxima competencia

🔄 Contexto del Proyecto
Situación Actual (MVP)
Este proyecto fue desarrollado como MVP (Minimum Viable Product) con la máxima agilidad para cumplir con una deadline de patrocinios que vence en enero de 2025.

Características Actuales:

✅ Landing page estática en HTML/CSS/JavaScript puro

✅ Responsive design (mobile-first)

✅ Formularios modales funcionales (sin backend)

✅ Optimización visual con animaciones smooth

✅ Deploy automático en Netlify

✅ Contacto directo para patrocinadores

Limitaciones Conocidas:

❌ Sin persistencia de datos

❌ Formularios guardan solo en cliente (alert simulado)

❌ Sin autenticación

❌ Sin panel administrativo

❌ Sin integración con bases de datos

❌ Sin escalabilidad para múltiples usuarios

🛠️ Stack Tecnológico Actual
text
Frontend:
├── HTML5 (Semántico)
├── CSS3 (Variables CSS, Grid, Flexbox)
└── JavaScript Vanilla (ES6+)

Deployment:
├── Git / GitHub
├── Netlify (CI/CD automático)
└── AWS S3 (Almacenamiento de imágenes)
Dependencias Externas
Fonts: Sistema nativo (Segoe UI, sans-serif)

Storage: AWS S3 (URLs públicas para imágenes)

Hosting: Netlify

📁 Estructura del Proyecto
text
AlfaEscuderia/
├── index.html                 # Página principal (MVP)
├── README.md                  # Este archivo
├── .gitignore
├── netlify.toml              # Configuración Netlify
└── frontend/                 # (Legacy - será eliminado)
    └── index.html
Archivo Principal
index.html (≈950 líneas)

Contiene toda la estructura HTML

Estilos CSS embebidos en <style>

Lógica JavaScript en <script>

Secciones:

<nav> - Navegación fija

.hero - Sección destacada

#mision - Misión y Visión

#aviones - Nuestros Prototipos

#areas - Equipo multidisciplinario

#patrocinadores - Aliados y partners

.cta-section - Call-to-Action

<footer> - Información de contacto

4 Modales para formularios

🚀 Instalación y Deploy
Local Development
bash
# 1. Clonar el repositorio
git clone https://github.com/Jaime-Gutierrez-19/AlfaEscuderia.git
cd AlfaEscuderia

# 2. Servir localmente (Python 3)
python -m http.server 8000

# 3. Abrir en navegador
# http://localhost:8000
Deploy en Netlify (Automático)
bash
# 1. Push a GitHub
git add .
git commit -m "Update: descripción de cambios"
git push origin main

# 2. Netlify detecta cambios y redeploy automático
# ✅ Disponible en: alfa-escuderia.netlify.app
Variables de Entorno
Actualmente: No aplica (MVP sin backend)

Próximamente (v2.0):

text
REACT_APP_API_URL=https://api.alfaumg.mx
REACT_APP_DB_HOST=database.alfaumg.mx
REACT_APP_STRIPE_KEY=pk_live_xxx
🗺️ Roadmap y Planes Futuros
Fase 1: MVP Actual ✅ (Nov 2024 - Dic 2024)
 Landing page estática

 Formularios modales

 Deploy en Netlify

 Optimización responsive

Fase 2: Backend + DB 🔄 (Ene 2025 - Feb 2025)
Tecnologías:

Backend: Node.js + Express / Python + Django

Database: PostgreSQL / MongoDB

Auth: JWT + OAuth2 (Google, GitHub)

APIs: REST (v1) → GraphQL (v2)

Features:

text
├── Sistema de gestión de formularios
├── Dashboard administrativo
├── CRM para patrocinadores
├── Almacenamiento de datos en BD
├── Notificaciones por email
└── Analytics y reportes
Fase 3: Frontend Moderno 💎 (Feb 2025 - Mar 2025)
Tecnologías:

Framework: React 18+

State Management: Redux / Zustand

Styling: Tailwind CSS + Framer Motion

Build Tool: Vite

Package Manager: npm / pnpm

Components:

text
├── Dashboard interactivo
├── Admin panel
├── Galería de aeromodelos
├── Sistema de patrocinios
├── Blog / Noticias
└── Integración con redes sociales
Fase 4: Optimización Avanzada 🚀 (Mar 2025+)
 PWA (Progressive Web App)

 SEO avanzado + Sitemap

 Integración Stripe/PayPal

 Testing (Jest + Cypress)

 CI/CD mejorado (GitHub Actions)

 Monitoreo en tiempo real (Sentry)

 CDN global + Cache optimization

📊 Métricas y Performance (Actual)
text
Lighthouse Scores (Desktop):
├── Performance: 92/100 ✅
├── Accessibility: 88/100 ✅
├── Best Practices: 90/100 ✅
└── SEO: 95/100 ✅

Load Time: < 2.5s (Global CDN)
Mobile Responsive: 100% ✅
Uptime: 99.9% (Netlify)
🔧 Guía para Contribuidores
Estructura de Commits
bash
# Feature
git commit -m "feat: add sponsor dashboard"

# Bug fix
git commit -m "fix: modal validation error"

# Documentation
git commit -m "docs: update README roadmap"

# Style/Formatting
git commit -m "style: normalize CSS variables"
Proceso de Cambios
Crear rama local

bash
git checkout -b feature/nueva-funcionalidad
Realizar cambios

bash
# Editar archivos...
git add .
git commit -m "feat: descripción clara"
Push y Pull Request

bash
git push origin feature/nueva-funcionalidad
# Abrir PR en GitHub
📧 Contacto
Canal	Información
Email	umgalfa@gmail.com
Instagram	@alfaumg
GitHub	@Jaime-Gutierrez-19
Ubicación	Universidad Marista de Guadalajara 🎓
📜 Licencia
Este proyecto está bajo licencia MIT. Ver archivo LICENSE para más detalles.

🎯 Próximos Pasos Inmediatos
Antes de Enero 2025:
 Recolectar leads de patrocinadores

 Validar feedback de usuarios

 Documentar pain points

 Planear sprint de backend

Enero 2025:
 Setup base de datos

 Crear API REST

 Implementar autenticación

 Integrar servicio de emails

Febrero 2025:
 Comenzar migración a React

 Desarrollar dashboard

 Setup CI/CD avanzado

🤝 Agradecimientos
Patrocinadores Actuales:

🏫 Universidad Marista de Guadalajara

💼 SolidWorks

🔬 Deyun Pharma

Equipo Alfa UMG:

Gestión, Diseño y Manufactura

📝 Notas Técnicas Importantes
Migración a React (Futura)
Cuando se implemente React, seguir estos principios:

text
Componentes:
├── Pages/          (Rutas principales)
├── Components/     (Componentes reutilizables)
├── Hooks/          (Custom hooks)
├── Services/       (API calls)
├── Context/        (State global)
└── Utils/          (Funciones helpers)

Naming Convention:
├── Components: PascalCase (Header.jsx)
├── Hooks: camelCase con "use" (useFormValidation.js)
├── Utils: camelCase (formatDate.js)
└── Constants: UPPER_SNAKE_CASE (API_ENDPOINTS.js)
Variables CSS Actuales
Sistema de diseño centralizado:

css
:root {
  --color-primary-dark: #001a4d;
  --color-accent-gold: #d4af37;
  --font-family: 'Segoe UI', sans-serif;
  --duration: 350ms;
  /* ... ver index.html para lista completa */
}
❓ FAQ
P: ¿Por qué HTML puro en lugar de un framework?
R: Se prioriza rapidez de entrega. Fase 2 incluye migración a React con mejor mantenibilidad.

P: ¿Cómo se guardan los formularios actualmente?
R: Solo en cliente (alert simulado). Fase 2 incluirá backend persistente.

P: ¿Se puede contribuir al proyecto?
R: ¡Sí! Contáctanos en umgalfa@gmail.com

P: ¿Cuándo estará lista la versión con React?
R: Estimado para febrero 2025.

Última actualización: Noviembre 2024
Versión: 1.0 (MVP)
Mantendedor: @Jaime-Gutierrez-19

<div align="center">
🚀 Diseñando el futuro, un avión a la vez
Alfa Escudería UMG - Innovación Aeronáutica

</div>
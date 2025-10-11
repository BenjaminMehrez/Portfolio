# Portfolio Personal

Portafolio web personal desarrollado con React, TypeScript y Vite. Sitio web moderno y responsive que muestra proyectos, habilidades, educación y certificados.

## 🚀 Características

- ⚡️ Construido con Vite para desarrollo rápido y builds optimizados
- ⚛️ React 19 con TypeScript para type safety
- 🎨 Tailwind CSS v4 para estilos modernos y responsivos
- 🌐 Sistema de internacionalización (i18n) - Soporte para Español e Inglés
- 📱 Diseño completamente responsive
- ✨ Animaciones con AOS (Animate On Scroll) y Motion
- 🎯 Gestión de estado con Zustand
- 🧭 React Router para navegación

## 🛠️ Tecnologías

### Frontend
- React 19
- TypeScript
- Vite
- React Router v7

### Estilos
- Tailwind CSS v4
- DaisyUI
- Heroicons
- Lucide React

### Estado & Datos
- Zustand (state management)
- Custom i18n implementation

### Herramientas de Desarrollo
- ESLint
- SWC (compilador rápido)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install
```

## 🚀 Comandos

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar TypeScript y construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Home/       # Componentes específicos de la página principal
│   │   ├── Navigation/ # Navegación (NavBar, Footer, Language)
│   │   └── ui/         # Componentes UI genéricos
│   ├── containers/     # Componentes de nivel de página
│   ├── data/          # Datos estáticos (proyectos, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── i18n/          # Sistema de internacionalización
│   ├── lib/           # Funciones utilitarias
│   ├── store/         # Estado global con Zustand
│   └── types/         # Definiciones de tipos TypeScript
├── public/            # Assets estáticos
└── ...config files
```

## 🌐 Internacionalización

El proyecto incluye un sistema i18n personalizado que soporta múltiples idiomas:

- Traducciones definidas en `src/i18n/index.ts`
- Hook personalizado `useTranslation()` para acceder a las traducciones
- Persistencia de preferencia de idioma con localStorage
- Idiomas soportados: Español (es) y Inglés (en)

## 🎨 Características de Diseño

- Sistema de diseño basado en componentes
- Path alias `@/` para imports limpios
- Componentes UI estilo shadcn
- Animaciones suaves con scroll
- Tema responsivo con Tailwind

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Benjamin Mehrez Jofre - Full-Stack Developer

---

⚡️ Generado con pasión y código

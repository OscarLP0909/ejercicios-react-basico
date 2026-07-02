## 1. Comparativa de bibliotecas y frameworks: React vs Angular

| Criterio | React | Angular |
|---|---|---|
| **Filosofía de diseño** | Biblioteca de UI (no framework completo). Se centra solo en la capa de vista. Enfoque declarativo con componentes y JSX. Deja al desarrollador elegir router, gestión de estado, cliente HTTP, etc. | Framework completo ("baterías incluidas"). Impone una arquitectura basada en módulos, componentes, servicios e inyección de dependencias. Usa TypeScript de forma nativa y obligatoria. |
| **Curva de aprendizaje** | Más suave al principio: aprendes JSX y componentes funcionales rápido. La dificultad aparece al elegir e integrar el ecosistema (router, estado, formularios) tú mismo. | Más pronunciada al inicio: hay que aprender TypeScript, decoradores, módulos NgModule, RxJS, inyección de dependencias, y su propia sintaxis de plantillas. A cambio, una vez dominado, todo el proyecto sigue las mismas convenciones. |
| **Rendimiento** | Usa Virtual DOM con reconciliación eficiente. Muy rápido en la mayoría de casos, aunque el rendimiento final depende mucho de cómo el desarrollador estructure el estado y los re-renders. | Usa detección de cambios (Change Detection) propia; las versiones modernas (con Signals, introducidos en Angular 16+) han cerrado bastante la brecha de rendimiento respecto a Virtual DOM. En apps grandes bien optimizadas, el rendimiento es comparable. |
| **Ecosistema** | Ecosistema enorme pero fragmentado: hay que decidir entre React Router vs otros, Redux/Zustand/Context para estado, etc. Mucha libertad, pero también más decisiones a tomar. | Ecosistema oficial y cohesionado: router, formularios reactivos, cliente HTTP y CLI vienen integrados y mantenidos por el propio equipo de Angular. Menos decisiones, pero menos flexibilidad. |

**Conclusión — casos de uso ideales:**

- **React** es ideal cuando se busca flexibilidad, un time-to-market rápido en proyectos pequeños/medianos, o cuando el equipo quiere elegir su propio stack (por ejemplo, un MVP, una landing, o una app donde el estado es simple). También es la opción natural en entornos donde ya se domina JavaScript/TypeScript sin imponer una arquitectura rígida.
- **Angular** encaja mejor en proyectos grandes y de larga duración, típicamente en entornos empresariales (banca, seguros, consultoría — como en EY), donde se valora la consistencia entre equipos, una estructura predefinida, tipado fuerte desde el día uno, y mantenibilidad a largo plazo por encima de la velocidad inicial de desarrollo.


## 3. Configuración básica de ESLint

Justificación de las reglas elegidas para el archivo eslint.config.js:

- **`react/react-in-jsx-scope: off`**: porque Vite usa el nuevo JSX transform y ya no requiere import React en cada archivo.
- **`no-unused-vars y no-use-before-define`**: son de los errores más comunes al escribir componentes rápido, y detectarlos pronto ahorra bugs tontos.
- **`eqeqeq`**: buena práctica estándar en cualquier proyecto JS/TS.
- **`react-hooks/exhaustive-deps`**: clave en React porque un **useEffect** con dependencias mal puestas es una fuente enorme de bugs sutiles.
- **`react-refresh/only-export-components`**: específica de Vite, evita romper el Hot Module Replacement.
- **`react/jsx-uses-vars`**: ESLint analiza JS puro, no sabe "leer" JSX de forma nativa para saber que `<App />` = uso de la variable App. El plugin eslint-plugin-react añade ese conocimiento específico de JSX. 

## 4. Configuración de Prettier

Justificación de cada opción del archivo `.prettierrc`

- **`semi: true`**: Fuerza punto y coma al final de cada sentencia. Evita ambigüedades con ASI de JS.
- **`singleQuote: true`**: Usa comillas simples en vez de dobles en JS. Es la convención más extendida en proyectos de React/Node.
-**`trailingComma: "es5"`**: Añade coma final en arrays y objetos multilinea.
- **`tabWidth: 2`** — Indentación de 2 espacios, estándar en el ecosistema JS/React (frente a los 4 típicos de Java/C#).
- **`printWidth: 80`** — Límite de 80 caracteres por línea antes de hacer wrap. Mejora la legibilidad en pantallas divididas o revisiones de código en GitHub.
- **`arrowParens: "always"`** — Siempre pon paréntesis en los argumentos de arrow functions ((x) => x en vez de x => x), aunque haya un solo parámetro. Mantiene consistencia si luego añades más parámetros o tipos (importante de cara al ejercicio 6 con TypeScript).
- **`endOfLine: "lf"`** — Fuerza saltos de línea estilo Unix (\n). Evita conflictos de Git por diferencias de line endings entre Linux/Mac y Windows.
- **`jsxSingleQuote: false`** — Usa comillas dobles específicamente dentro de atributos JSX (className="card"), que es la convención de facto en el ecosistema React, aunque el resto del JS use comillas simples.

## 5. Integración de ESLint y Prettier

### Instalación

```bash
npm install -D eslint-config-prettier
```

`eslint-config-prettier` no añade reglas nuevas: desactiva todas las reglas de ESLint relacionadas con formato (comillas, indentación, punto y coma, etc.) que podrían entrar en conflicto con Prettier, dejando que ESLint se dedique solo a la calidad y corrección del código.

### Configuración (`eslint.config.js`)

```js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
      'react-hooks/exhaustive-deps': 'warn',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
    },
  },

  // Debe ir al final: desactiva reglas de ESLint que chocan con Prettier
  eslintConfigPrettier,
];
```

### Verificación

```bash
npx eslint src
npm run format:check
```

Ambos comandos pasan sin quejarse entre sí, confirmando que no hay conflictos de reglas.

### Cómo funcionan juntas

Se dividen responsabilidades: **Prettier controla el formato** (espacios, comillas, longitud de línea...) y **ESLint controla la calidad y corrección del código** (variables sin usar, reglas de Hooks, comparaciones estrictas...). `eslint-config-prettier` actúa como puente entre ambas, desactivando en ESLint todo lo relacionado con estilo visual para que no compita con lo que Prettier ya decide.

> Nota: si se quisiera que ESLint también marcara como *error* el código mal formateado (en vez de depender solo de `npm run format` por separado), se podría añadir `eslint-plugin-prettier` con la regla `'prettier/prettier': 'error'`. No implementado en este ejercicio por simplicidad.



## 8. Estructura de proyecto React

Estructura de directorios recomendada para un proyecto React mediano:

```
src/
 ├─ assets/
 │   ├─ images/
 │   ├─ fonts/
 │   └─ icons/
 ├─ components/
 │   ├─ common/
 │   └─ layout/
 ├─ pages/
 ├─ hooks/
 ├─ services/
 ├─ context/
 ├─ utils/
 ├─ types/
 ├─ styles/
 ├─ App.jsx
 └─ main.jsx
```

### Propósito de cada directorio

- **`assets/`** — Recursos estáticos del proyecto: imágenes, fuentes tipográficas e iconos. Se centralizan aquí para no mezclarlos con la lógica de componentes.

- **`components/`** — Componentes reutilizables de UI, independientes de una página concreta (botones, inputs, tarjetas, modales). Se subdivide en:
  - `common/` — Componentes genéricos usados en toda la app (Button, Input, Spinner...).
  - `layout/` — Componentes de estructura visual (Header, Footer, Sidebar, Navbar).

- **`pages/`** — Componentes de nivel superior que representan una vista o ruta completa (Home, Login, Dashboard...). Cada página normalmente compone varios componentes de `components/`.

- **`hooks/`** — Custom hooks reutilizables (`useAuth`, `useFetch`, `useDebounce`...) que encapsulan lógica de estado o efectos compartida entre componentes.

- **`services/`** — Lógica de comunicación con APIs externas (llamadas HTTP, configuración de clientes como Axios/Fetch). Mantiene la lógica de red separada de los componentes.

- **`context/`** — Contextos de React (`AuthContext`, `ThemeContext`...) para gestión de estado global sin librerías externas.

- **`utils/`** — Funciones auxiliares puras y reutilizables (formateo de fechas, validaciones, helpers) que no dependen de React.

- **`types/`** — (si se usa TypeScript) Definiciones de tipos e interfaces compartidas entre distintas partes de la app.

- **`styles/`** — Estilos globales, variables CSS, temas o configuración de CSS-in-JS que no pertenecen a un componente concreto.

- **`App.jsx`** — Componente raíz que define el layout general y el enrutado principal de la aplicación.

- **`main.jsx`** — Punto de entrada de la aplicación; monta `App` en el DOM.

Esta estructura sigue una convención común en proyectos React de tamaño medio: separar por **responsabilidad** (UI, lógica, datos, estilos) en lugar de por tipo de página, lo que facilita escalar el proyecto sin que `components/` se convierta en una carpeta gigante y desordenada.

---


## 9. Comparativa de bundlers

| Criterio | Vite | Webpack | Parcel |
|---|---|---|---|
| **Velocidad de desarrollo** | Muy rápida. Usa ESBuild para pre-bundling de dependencias y aprovecha los módulos ES nativos del navegador (no empaqueta todo antes de servir), por lo que el arranque del servidor de desarrollo es casi instantáneo. | Más lenta en comparación. Empaqueta toda la aplicación antes de servirla, lo que hace que el arranque inicial y el HMR sean notablemente más lentos en proyectos grandes. | Rápida gracias al paralelismo y caché interno, aunque no alcanza los tiempos de arranque de Vite en proyectos grandes. |
| **Configuración** | Configuración mínima o nula (zero-config) para casos estándar. Un único `vite.config.js` cubre la mayoría de necesidades. | Requiere configuración explícita y detallada (`webpack.config.js`): loaders, plugins, reglas por tipo de archivo. Muy flexible pero verboso. | Filosofía "zero-config" total: detecta automáticamente el tipo de archivos y configura loaders/plugins sin intervención manual. |
| **Soporte de características** | Soporte nativo para TypeScript, JSX, CSS Modules, PostCSS y HMR ultrarrápido. Muy orientado a frameworks modernos (React, Vue, Svelte). | Soporte para prácticamente cualquier caso vía loaders/plugins (imágenes, SVG, Web Workers, micro-frontends con Module Federation...). El más maduro y flexible del mercado. | Soporte automático para JS, TS, CSS, imágenes y más sin instalar plugins adicionales, aunque el ecosistema de plugins es más pequeño que el de Webpack. |
| **Casos de uso ideales** | Proyectos nuevos de tamaño pequeño-mediano donde se prioriza velocidad de desarrollo y simplicidad (SPAs con React/Vue). | Proyectos grandes y complejos, empresariales, con necesidades muy específicas de build (micro-frontends, optimizaciones avanzadas, configuraciones legacy). | Proyectos pequeños o prototipos rápidos donde se quiere evitar cualquier configuración manual. |

### Recomendaciones según el tipo de proyecto

- **Proyecto nuevo, SPA con React/Vue:** Vite. Es el estándar actual para arrancar rápido, con HMR instantáneo y mínima configuración.
- **Proyecto empresarial grande, con requisitos de build muy específicos o arquitectura de micro-frontends:** Webpack. Su madurez y flexibilidad siguen siendo insustituibles en escenarios complejos.
- **Prototipo rápido o proyecto pequeño sin tiempo para configurar nada:** Parcel. Ideal para empezar a picar código sin pensar en la configuración del bundler.
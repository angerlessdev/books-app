# 🚀 Proyecto Next.js + TypeScript + ESLint

Este proyecto utiliza **Next.js** con **TypeScript**, **ESLint**, y una estructura de carpetas limpia dentro de `src/`.  
Está configurado para mantener **alta calidad de código**, **coherencia en importaciones** y **tipado estricto**.

---

## 📁 Estructura del proyecto

```
src/
├── app/                 # Páginas principales (App Router de Next.js)
│   ├── components/      # Componentes de UI (BooksList)
│   └── page.tsx         # Punto de entrada principal
├── domain/              # Modelos e interfaces (Book, Author)
├── hooks/               # Hooks personalizados (useBooks)
└── services/            # Lógica de negocio y peticiones API
```


---

## ⚙️ Configuración del proyecto

### 1. Instalación

```bash
npm install
# o
yarn install
```

### 2. Ejecución en desarrollo

```bash
npm run dev
# o
yarn dev
```

### 3. Compilación para producción

```bash
npm run build
```

### 4. Linter y chequeo de tipos

```bash
npm run lint          # Ejecuta ESLint
npm run type-check    # Verifica los tipos de TypeScript
```

---

## 🧩 Configuración técnica

### `tsconfig.json`

- Todo el código fuente está dentro de `src/`.
- Usa paths con `@/*` → `src/*`.
- Tipado estricto (`strict`, `noImplicitAny`, `strictNullChecks`).
- Sin emisión (`noEmit: true`), porque Next.js se encarga del build.

### `eslint.config.mjs`

- Basado en eslint-config-next + reglas personalizadas.
- Incluye verificación de:
    - Consistencia de importaciones relativas.
    - Tipado correcto (`@typescript-eslint`).
    - Responsabilidad única de cada módulo (clases, hooks, servicios, etc.).
    - Buenas prácticas en React (`eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`).

---

## 🧠 Buenas prácticas del proyecto

✅ **Tipos claros**: Cada archivo `.ts` o `.tsx` debe usar interfaces o tipos explícitos.  
✅ **Importaciones coherentes**: Siempre usar `@/` en lugar de rutas relativas largas.  
✅ **Responsabilidad única**: Un módulo = una responsabilidad (componente, hook, servicio, etc.).  
✅ **Limpieza constante**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`.  
✅ **Revisión de calidad**: Antes de cada commit, ejecutar `npm run lint` y `npm run type-check`.

---

## 🧰 Scripts comunes

| Script | Descripción |
|--------|-------------|
| `dev` | Ejecuta el servidor de desarrollo de Next.js |
| `build` | Compila el proyecto para producción |
| `start` | Inicia el servidor en modo producción |
| `lint` | Analiza el código con ESLint |
| `type-check` | Ejecuta la verificación de tipos de TypeScript |

---

## 🧩 Tecnologías principales

- Next.js 15+
- React 18+
- TypeScript 5+
- ESLint (configuración moderna basada en MJS)
- TailwindCSS (opcional, si lo usas)
- Path aliases (`@/`)

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente con atribución.

---

## ✨ Autor

**Ángel Cancho Corilla**  
Estudiante de Ingeniería de Software en la UPC  
Desarrollador Fullstack — Spring Boot | .NET | Flutter | Angular | FastAPI
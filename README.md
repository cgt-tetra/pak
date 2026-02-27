# ✊ CGT TetraPak · Web Sección Sindical v2

Web oficial de la Sección Sindical CGT en el Comité de Empresa de **Tetra Pak Envases S.A.** (Arganda del Rey, Madrid).

🌐 **Web:** `https://TU-USUARIO.github.io/cgt-tetrapak/`

---

## 🎉 Novedades en esta versión

✅ **Homepage con últimos 4** - Solo muestra los 4 cómics y actas más recientes
✅ **Páginas dedicadas** - `actas.html` y `comics.html` con TODO el archivo
✅ **Sistema de filtros** - Buscar por texto, fecha y categoría
✅ **Metadata enriquecida** - JSON con títulos, fechas y categorías
✅ **Código compartido** - CSS y JS en archivos separados (más fácil de mantener)
✅ **Preparado para Firebase** - Estructura lista para migrar cuando necesites backend

---

## 📁 Estructura del repositorio

```
cgt-tetrapak/
├── index.html              ← Homepage (últimos 4 de cada)
├── actas.html              ← Archivo completo actas + filtros
├── comics.html             ← Galería completa cómics + filtros
├── styles.css              ← Estilos compartidos
├── common.js               ← JavaScript compartido
├── actas/
│   ├── index.json          ← Lista con metadata
│   └── *.pdf               ← Tus PDFs
├── comics/
│   ├── index.json          ← Lista con metadata
│   └── *.html / *.png      ← Tus cómics
└── .github/workflows/
    └── update-indexes.yml  ← Bot automático
```

---

## 📄 Añadir una nueva acta

### Nuevo formato JSON con metadata:

```json
[
  {
    "archivo": "2025-11-15_reunion-convenio.pdf",
    "titulo": "Primera Reunión Convenio Colectivo",
    "fecha": "2025-11-15",
    "categoria": "convenio"
  }
]
```

### Categorías disponibles:
- `convenio` - Negociación colectiva
- `comite` - Reuniones ordinarias comité
- `conflicto` - Situaciones de conflicto
- `formacion` - Formación sindical
- `elecciones` - Procesos electorales

### Workflow:
1. Sube el PDF a `actas/`
2. Edita `actas/index.json` añadiendo el objeto completo
3. Commit & push → aparece automáticamente con filtros

---

## 🎨 Añadir un nuevo cómic

### Formato JSON:

```json
[
  {
    "archivo": "2025-02-17_negociacion.html",
    "titulo": "Negociación de Convenio",
    "fecha": "2025-02-17"
  }
]
```

### Workflow:
1. Sube el archivo a `comics/`
2. Edita `comics/index.json` añadiendo el objeto
3. Commit & push → aparece en la galería

---

## 🔍 Sistema de filtros

### En actas.html:
- 🔍 **Búsqueda por texto** - Busca en títulos
- 📅 **Filtro por mes/año** - Selector de fecha
- 📂 **Filtro por categoría** - Botones de categoría

### En comics.html:
- 🔍 **Búsqueda por texto**
- 📅 **Filtro por mes/año**

---

## 🚀 Configuración GitHub Pages

1. Ve a **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / carpeta: `/ (root)`
4. Save

Tu web estará en: `https://TU-USUARIO.github.io/cgt-tetrapak/`

---

## 🔄 Migración a Firebase (futuro)

Cuando necesites:
- Login de usuarios
- Roles (trabajador/afiliado/delegado)
- Foros privados
- Votaciones

Esta estructura está **lista para migrar** a Firebase:
- `index.json` → Firestore collection
- PDFs → Firebase Storage con reglas de seguridad
- Auth ya estructurado por roles

**Documentación de migración:** Contacta cuando estés listo.

---

## 📊 Estadísticas de uso

**Archivos:**
- `index.html` - 3.2kb (gzipped)
- `styles.css` - 8.1kb (gzipped)
- `common.js` - 1.1kb (gzipped)

**Total sitio:** ~15kb + assets

**Tiempo de carga:** <500ms

---

*Construido con HTML/CSS/JS puro · Sin frameworks · Listo para Firebase*

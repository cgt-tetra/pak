# ✊ CGT TetraPak · Web Sección Sindical

Web oficial de la Sección Sindical CGT en el Comité de Empresa de **Tetra Pak Envases S.A.** (Arganda del Rey, Madrid).

🌐 **Web:** `https://TU-USUARIO.github.io/cgt-tetrapak/`

---

## 🚀 Configuración inicial (una sola vez)

### 1. Crear el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `cgt-tetrapak` (o el que prefieras)
3. Marca **Public** (necesario para GitHub Pages gratuito)
4. No marques ningún checkbox inicial, haz clic en **Create repository**

### 2. Subir los archivos

```bash
git clone https://github.com/TU-USUARIO/cgt-tetrapak.git
# Copia todos estos archivos dentro
git add .
git commit -m "🚀 Lanzamiento web CGT TetraPak"
git push
```

### 3. Activar GitHub Pages

1. Ve a tu repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / carpeta: `/ (root)`
4. Clic en **Save**
5. En ~2 minutos tu web estará en: `https://TU-USUARIO.github.io/cgt-tetrapak/`

---

## 📄 Añadir una nueva Acta

**Opción A (automática):** Sube el PDF a la carpeta `actas/` — el bot de GitHub Actions actualizará el índice solo.

**Opción B (manual):**
1. Sube el PDF a `actas/` con formato `YYYY-MM-DD_descripcion.pdf`
2. Edita `actas/index.json` y añade el nombre al array
3. Haz commit y push → aparece en la web inmediatamente

---

## 🎨 Añadir un nuevo Cómic

**Opción A (automática):** Sube la imagen o HTML a `comics/` — el bot lo detecta solo.

**Opción B (manual):**
1. Sube el archivo a `comics/` con formato `YYYY-MM-DD_titulo.png`
2. Edita `comics/index.json` y añade el nombre
3. Commit y push → aparece en la galería

### Tipos de cómic soportados

| Formato | Cómo se muestra |
|---------|----------------|
| `.png` / `.jpg` | Miniatura + lightbox para ampliar |
| `.html` | Miniatura genérica + se abre en iframe |

---

## 📁 Estructura del repositorio

```
cgt-tetrapak/
├── index.html              ← Web principal
├── actas/
│   ├── index.json          ← Lista de actas (actualizar al añadir PDFs)
│   ├── README.md
│   └── 2025-11-15_*.pdf    ← Tus PDFs aquí
├── comics/
│   ├── index.json          ← Lista de cómics (actualizar al añadir archivos)
│   ├── README.md
│   └── 2025-02-17_*.html   ← Tus cómics aquí
├── docs/                   ← Documentos varios (plataforma, calendario...)
└── .github/
    └── workflows/
        └── update-indexes.yml  ← Bot que actualiza los índices automáticamente
```

---

## 🔗 Linktree de origen

Todos los enlaces de la web provienen del Linktree oficial: [linktr.ee/CGTTetraPak](https://linktr.ee/CGTTetraPak)

---

*Construido con HTML puro · Alojado en GitHub Pages · Sin costes de servidor*

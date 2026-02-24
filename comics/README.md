# Carpeta de Cómics

Sube aquí los cómics de reuniones con la dirección.

## Formatos soportados

- **`.png` / `.jpg`** — Imágenes estáticas (se muestran como miniatura y se pueden ampliar)
- **`.html`** — Cómics interactivos generados con Claude (se abren en iframe)

## Formato de nombre recomendado

```
YYYY-MM-DD_titulo-del-comic.png
```

Ejemplos:
- `2025-02-17_negociacion-convenio.html`
- `2025-03-05_respuesta-empresa-cero.png`
- `2026-01-20_reunion-enero.jpg`

## Cómo actualizar la web

**Después de subir un cómic**, edita el archivo `comics/index.json` y añade el nombre:

```json
[
  "2025-02-17_negociacion-convenio.html",
  "2025-03-05_respuesta-empresa-cero.png"
]
```

Aparecerá automáticamente en la sección de Cómics con miniatura y botón de ampliar.

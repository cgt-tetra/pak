# 🎨 Carpeta de Cómics

## Formato del archivo index.json

```json
[
  {
    "archivo": "2025-02-17_negociacion-convenio.html",
    "titulo": "Negociación de Convenio - Edición Color",
    "fecha": "2025-02-17",
    "tipo": "html",
    "descripcion": "La empresa responde CERO a todas las peticiones"
  }
]
```

## Tipos soportados

| Formato | Tipo | Visualización |
|---------|------|---------------|
| `.png` `.jpg` | `"imagen"` | Miniatura + lightbox |
| `.html` | `"html"` | Iframe fullscreen |

## Convención de nombres

```
YYYY-MM-DD_titulo-descriptivo.extension
```

Ejemplos:
- `2025-02-17_negociacion-convenio.html`
- `2025-03-05_respuesta-cero.png`

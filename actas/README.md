# Carpeta de Actas

Sube aquí los archivos PDF de las actas de reuniones.

## Formato de nombre recomendado

```
YYYY-MM-DD_descripcion-corta.pdf
```

Ejemplos:
- `2025-11-15_reunion-convenio-primera.pdf`
- `2025-12-03_reunion-comite-diciembre.pdf`
- `2026-01-10_negociacion-jornada.pdf`

## Cómo actualizar la web

**Después de subir un PDF**, edita el archivo `actas/index.json` y añade el nombre del archivo al array:

```json
[
  "2025-11-15_reunion-convenio-primera.pdf",
  "2025-12-03_reunion-comite-diciembre.pdf",
  "2026-01-10_negociacion-jornada.pdf"
]
```

La web lo mostrará automáticamente en la sección de Actas.

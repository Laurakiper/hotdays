# Hot Days Kiper · Landing Early Access

Sitio estático (sin build). Archivos:

- `index.html`: landing con formulario y cuenta regresiva
- `gracias.html`: página de confirmación después del registro
- `styles.css`: estilos compartidos
- `assets/`: logo, foto y favicon
- `apps-script.gs`: código para Google Sheets (no se publica, va en Apps Script)

## Antes de publicar
1. En `index.html`, busca `SCRIPT_URL` y pega la URL de tu Apps Script (termina en `/exec`).
2. En `gracias.html`, cambia `[correo@kiper]` por el correo remitente.
3. Pon los links reales de Términos y Política de privacidad.

## Publicar en Vercel
Sube esta carpeta a un repositorio de GitHub → en Vercel: Add New › Project → importa el repo →
Framework Preset: **Other** → Deploy. No necesita comandos de build.

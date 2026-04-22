# Despliegue de Lynx Hoga Ki

## Opcion recomendada

Usar `Cloudflare Pages` para alojar la web y conectar el dominio `lynxhogaki.com`.

Esta opcion es buena para este proyecto porque la pagina es estatica:

- no necesita servidor
- tiene plan gratis
- permite dominio propio
- es facil de actualizar despues

## Paso 1. Comprar el dominio

Compra `lynxhogaki.com` en el registrador que prefieras, si esta disponible.

## Paso 2. Subir el proyecto a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube estos archivos del proyecto.

## Paso 3. Crear el proyecto en Cloudflare Pages

1. Entra a Cloudflare.
2. Ve a `Workers & Pages`.
3. Crea un proyecto nuevo con `Pages`.
4. Conecta tu repositorio de GitHub.
5. Para este proyecto:

- Framework preset: `None`
- Build command: dejar vacio
- Build output directory: `/`

## Paso 4. Publicar

Cuando termine el deploy, Cloudflare te dara una URL temporal tipo:

`tu-proyecto.pages.dev`

## Paso 5. Conectar el dominio

1. En el proyecto de Pages abre `Custom domains`.
2. Agrega:

- `lynxhogaki.com`
- `www.lynxhogaki.com`

3. Si Cloudflare te pide cambiar nameservers, hazlo desde donde compraste el dominio.

## Paso 6. Verificar

Cuando el DNS se propague, tu web quedara publicada en:

- `https://lynxhogaki.com`
- `https://www.lynxhogaki.com`

## Recomendacion final

Despues del despliegue:

- prueba el menu
- abre el album
- revisa el mapa
- confirma que el favicon cargue bien
- prueba en celular

# Fullstack Study App

## Tech stack used for development

- node v14.17.0
- npm 8.5.5
- docker 20.10.14, build a224086
- docker compose v2.2.3

## Development guidelines

We are using docker compose to orchestrate the server, database and front-end apps during development, so you won't need to restart everything too frequently.

Build separately the `client-fs-study` and `server-fs-study` apps and afterwards:

```sh
docker compose up --build
```

Docker will start all layers of the application and you will be able to access it:

- frontend on <http://localhost:4200>
- backend API on <http://localhost:3000>
- database administration interface on <http://localhost:8081>

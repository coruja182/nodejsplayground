# NodeJS Playground

This is a dummy API implemented in nodeJS that I am creating just to learn how to build something from scratch using this language and how to integrate the various libs that I might need to achieve what I call 'a beautiful project'. Code should be easy to understand and run.

Starting the project:

```shell
npm start
```

open your browser on <http://localhost:3000/timezones>

## Development Notes

Requirements:

- TypeScript should be used
- Environment agnostic architecture
- Code should be easily debugged on vscode

Next Steps:

- [ ] create a new github project for nodeJS (without typescript?) for work-related investigations and keep this project clean
  - [ ] move the timezone-service related there
- [ ] add request body parser in like in this tutorial <https://www.qat.com/simple-rest-service-node-js-express/>
- [ ] create survey endpoints
- [ ] model survey table schema
- [ ] [Database Integration](#postgresql-and-docker-compose)
- [ ] add postgresql using docker
  - [ ] make initial load of database
- [ ] unit tests
- [ ] integration tests
- [ ] integrate automatic openapi swagger documentation
- [ ] deployment, how does it work?
- [ ] validate with some NodeJS expert friend ;)

## Some Application Ideas

- Recipe App
- Quiz App
- ToDo App (Level Intermediate)

<https://blog.bitsrc.io/15-app-ideas-to-build-and-level-up-your-coding-skills-28612c72a3b1>

### JEST

Got a full config by running `npx jest --init` and created a backup of it, as I wanted to use ts-jest instead.

For the ts-jest, after adding the depencies described on <https://www.npmjs.com/package/ts-jest>

```shell
npx ts-jest config:init
```

Merged both configurations into one `jest.config.js`

## References

- Using TypeScript with Node.js and Express <https://blog.logrocket.com/typescript-with-node-js-and-express/>
- Build an API with Node.js, Express, and TypeScript <https://www.split.io/blog/node-js-typescript-express-tutorial/>
- Use TypeScript to Build a Node API with Express <https://developer.okta.com/blog/2018/11/15/node-express-typescript>
- Minimalistic Express Boilerplate with TypeScript and Live Debugging <https://github.com/meilenstein-io/express-typescript-microservice>

Routes and Controllers

- Express Tutorial Part 4: Routes and controllers <https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes>
- Simple REST Service with Node.js and Express <https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes>
- Build a REST API with Node.js: Routes and Controllers <https://lo-victoria.com/build-a-rest-api-with-nodejs-routes-and-controllers>

### TypeScript Node.js Setup

- How to Setup a TypeScript + Node.js Project <https://khalilstemmler.com/blogs/typescript/node-starter-project/>
  - code <https://github.com/stemmlerjs/simple-typescript-starter>

### PostgreSQL and docker-compose

- GitHub example <https://github.com/CyberZujo/todo-app>

Swagger

- How to add Swagger UI to an existing Node.js and Express.js project <https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce>

### Unit Tests With Jest And TypeScript

- How to mock an imported Typescript class with Jest <https://dev.to/codedivoire/how-to-mock-an-imported-typescript-class-with-jest-2g7j>
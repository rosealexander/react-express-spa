<!-- TITLE -->
# [React Express SPA](https://react-express-spa.herokuapp.com) 
#### [View the application Front-end >](https://react-express-spa.herokuapp.com)

<!-- Objective -->
## objective
The goal of this application has been to successfully demonstrate the following features:
* [Authentication](#authentication)
* [Authorization](#authorization)
* [Dependency Injection](#dependency-injection)
* [External Identity Provider](#external-identity-provider)
* [Factory Method Pattern](#factory-method-pattern)
* [MVC on the server with routing](#mvc-on-the-server-with-routing)
* [ORM](#orm)
* [SPA](#spa)
* [Swagger](#swagger)

### Authentication
* This application employs [Auth0](https://github.com/auth0/nextjs-auth0) as an external identity provider
  which supports signing JSON Web Token (JWT). The [express-jwt](https://github.com/auth0/express-jwt) library provides
  a middleware for validating JWTs on our application server.
* The server side implementation of this middleware can be found at the following filepath
  [src/middleware/checkJwt.js](./src/middleware/checkJwt.js)

### Authorization
* A special "Administrator" role has been manually assigned to a specific user in [Auth0 Managed Users](https://auth0.com/docs/users)
  in the [Auth0 Dashboard](https://auth0.com/docs/get-started/dashboard). This role allows access to the protected
  [route](./src/routes.ts) named "Delete." The middleware [checkAuthorization.js](./src/middleware/checkAuthorization.js)
  is called before the API controller is invoked and checks if the authenticated user has the correct "Administrator" role.

### Dependency Injection
* Implemented using [TypeDI](https://github.com/typestack/typedi) a dependency injection tool for TypeScript.
  Some examples include the use of Dependency Injection in
  [poetry.service.ts](./src/service/poetry.service.ts) and
  [poetry.controller.ts](./src/controller/poetry.controller.ts)

### External Identity Provider
* This application employs [Auth0](https://github.com/auth0/nextjs-auth0) as an external identity provider

### Factory Method Pattern
* Some examples of Factory Pattern 
  * [src/factories](./src/factories)
  * [src/service/haiku.service.ts](./src/service/haiku.service.ts)

### MVC on the server with routing
* Model - [/src/model](./src/model)
* View - [/src/view](./src/view)
* Controller - [/src/controller](./src/controller)
  * Routes - [/src/routes.ts](./src/routes.ts)

### ORM
* [Type ORM](https://typeorm.io) is used as the Object Relational Mapper between our application Model
and our relational database.
  * Entities can be found in the model directory at [/src/model](./src/model)
  * Our application is using [PostgreSQL](https://www.postgresql.org), a powerful, open-source relational database

### SPA
* SPA has been achieved using [React.js](https://reactjs.org), a popular front-end JavaScript library
  encompassing the View in Model View Controller and is located within the following directory [/src/view](./src/view)

### Swagger
* [Swagger-UI](https://github.com/swagger-api/swagger-ui) has been configured and may be accessed at the following url 
  * Swagger: https://react-express-spa.herokuapp.com/swagger
  
## built with
* [Auth0](https://github.com/auth0/nextjs-auth0) - External identity provider
* [Express](https://github.com/expressjs/express) - Web framework for Node
* [Express-jwt](https://github.com/auth0/express-jwt) - Express middleware for validating JWTs
* [Heroku](https://heroku.com) - Cloud platform as a service
* [Material-UI](https://mui.com) - Material Design component library
* [Node.js](https://nodejs.org/en/) - Open-source, cross-platform runtime environment
* [PostgreSQL](https://www.postgresql.org) - A powerful, open-source relational database
* [React.js](https://reactjs.org) - Front-end JavaScript library
* [Swagger](https://github.com/swagger-api) - Visualize and interact with the API’s resources
* [TypeDI](https://github.com/typestack/typedi) -  Dependency injection tool for TypeScript
* [Type ORM](https://typeorm.io) - Object Relational Mapper
* [TypeScript](https://www.typescriptlang.org) - Strongly typed programming language

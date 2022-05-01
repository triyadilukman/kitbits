## About The Project
This project based on kitabisa campaign project


# This project using stacks
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [React Router](https://github.com/remix-run/react-router)
* [Styled Components](https://styled-components.com/)
* [Express](https://expressjs.com/)
* [Webpack](https://webpack.js.org/)
* [Jest](https://jestjs.io/)
* [SuperTest](https://www.npmjs.com/package/supertest)
---

## Important folders
```sh
src/
├── client                      # folder related to client
  ├── components                # dumb components folder.
  ├── context                   # state management, actions, data types of context.
  ├── resources                 # static files resources.
  ├── utils                     # shareable method, library etc.
  ├── app.tsx                   # React router client handler
  ├── index.tsx                 # Client side wrapper / passing for data providers
├── server                      # folder related to server script
  ├── middleware                # related to handlers of server side routing, api call, error handler etc
  ├── ssr                       # related to html template generator
  ├── app.ts                    # file call server script to start
  ├── configuration.ts          # PUBLIC DIR settings
  ├── server.ts                 # init call server side handlers
```

## Getting Started
To run this app eed to get involve in some steps below

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Run The App 
1. Clone the repo
   ```sh
   git clone git@github.com:triyadilukman/website-test.git
   ```
2. Install NPM packages using yarn
   ```sh
   npm install
   ```
3. Run this project
   ```sh
   npm run start:server
   ```
   it will show and ready to run at your browser for SSR:
   ```
   Local:            http://localhost:9000
   ```
4. Build project
   ```sh
   npm run build:prod
   ```
5. Start build files
   ``sh
   npm run start
   ```

### Project Mockup
![alt text](https://i.ibb.co/nkHsR5p/mockup.png)
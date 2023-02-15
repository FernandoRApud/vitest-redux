## -- ANTD - Feature

In this branch i start to integrate Ant Design

## -- 12/12/2022

Hello!
This is a template for start working with Vite + React + Typescript.
This include the Vite -> React -> Typescript + SWC
And also other frameworks like: testing-library, eslint, eslint-config-airbnb, vitest, axios and react-router-dom

### START

For start working with this project, you just need to use:
- npm install
- npm run dev

And there you have all installed

### ABOUT THE PROJECT

Actually the project directory folders work in this way. The principal folder is src/ and inside of it there are this other folders:
-components: Is used to create every reusable component on the app. This start with Routing and PrivateRouting folder for work with react-router-dom.
-config: Is used for config files on the app. This start with configAxios.ts, a file that have a configuration for axios re-routing and using logic of helpers folder.
-hooks: Is used for hooks functions on the app, basically reusable personal hooks. This start with a session and local storage hook.
-interfaces: Is used for create all the interfaces that we need for work with Typescript. This start with a IDictionary interface and an index export file.
-pages: Is used for every pages that we can see on the app (also can be called screens). This start with three files. Two public (Home, NotFound), one private (Hello)

And then the configs for the project:
.eslintrc.cjs, tsconfig.json, tsconfig.node.json, vite.config.ts

### ENV

You only need to create an env with your actual API route, just like this: 

```
REACT_APP_API_URL = 'http://localhost:4000/'

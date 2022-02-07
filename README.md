## TypeScript

### Sample
Basic Hello world in TS

How to run project:
- navigate to folder `cd sample`
- execute typescript `tsc` to transpile ts to js (dist folder will be created)
- execute js file using node `node dist/hello-world.js`

### Simple Typescript

How to run project:
- navigate to folder `cd simple-typescript`
- execute `npm run build` to compile ts files to js, than manually execute js files `node dist/...`
- execute `npm run dev` for compile and run program in watch mode

### React + Typescript

How to run project:
- navigate to folder `cd react-plus-typescript`
- execute `npm i` to install dependencies
- execute `npm run start` for running web server

### React + Redux + TS

How to run project:
- navigate to folder `cd react-redux-ts`
- execute `npm i` to install dependencies
- execute `npm run dev` for development

### Next JS app task-mate

Navigate to project folder `cd task-mate`
    
## npm run dev
    Starts the development server.

 ## npm run build
    Builds the app for production.

 ## npm start
    Runs the built app in production mode.

- To start Docker container in the backgroud ` docker-compose up -d`
- To stop Docker container ` docker-compose stop` (it save data, so after restart data will be there)
- To remove Docker container ` docker-compose down` (data will be removed too)

To get info about running Docker containers `docker-compose ps`
To import schema to Docker container `docker exec -i task-mate-mysql-1 sh -c 'mysql -uroot -p"$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE' < db/schema.sql`

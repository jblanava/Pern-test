# Pern-test

LOCAL DEPLOYMENT ------------------

This project was made using the PERN stack (Postgresql, Express, React.js, Node.js)

In order to execute this code you'll need to copy the sql script in server/database.sql in a Posrgresql client.

Then you'll have to specify the connection variables in a .env files, one in the client and one in the server

The client variables must be e.g.:

REACT_APP_SERVER_HOST=localhost  // specifies the ip direction of the server
REACT_APP_SERVER_PORT=2000       // specifies the port of the server

The server variables must be e.g.:

POSTGRES_HOST=postgres      // specifies the ip direction of postgres
POSTGRES_PORT=5432          // specifies the port of postgres
POSTGRES_DB=postgres        // specifies the DN name of postgres
POSTGRES_USER=postgres      // specifies the username of postgres
POSTGRES_PASSWORD=password  // specifies the password of postgres
DATABASE_URL=postgres://postgres:password@postgres:5432/postgres  // specifies the full url connection of postgres

Then you'll need to run these commands to start the server (it's very important to initialize the server before the client) 

  cd server      -  to change current directory to server folder
  npm i          -  install all the neccesary libraries
  npm run serve  -  start the server
  
Next you'll need to run these commands to start the client (it's very important to initialize the client after the server) 

  cd client      -  to change current directory to server folder
  npm i          -  install all the neccesary libraries
  npm start      -  start the server (accept the port swap)
  
The client will start in http://localhost:3000

Then you'll be able to create users and connections.


You can also build a static version od the clñient and run it executing the npm run deploy command instead of npm run start


DOCKER DEPLOYMENT ------------------

To start the app you need to have docker installed from https://www.docker.com/get-started/

then you'll have to execute the command: docker-compose build.

and once finished: docker-compose up.

In order to remove the containers you must execute: docker-compose down.

# Pern-test

In order to execute this code you'll need to copy the sql script in server/database.sql in a Posrgresql client.


Then you'll need to run these commands to start the server (it's very important to initialize the server before the client) 

  cd server      -  to change current directory to server folder
  npm i          -  install all the neccesary libraries
  npm run serve  -  start the server
  
Next you'll need to run these commands to start the client (it's very important to initialize the client after the server) 

  cd client      -  to change current directory to server folder
  npm i          -  install all the neccesary libraries
  npm start      -  start the server (accept the port swap)
  
The client will start in http://localhost:3001

Then you'll be able to create users and connections.

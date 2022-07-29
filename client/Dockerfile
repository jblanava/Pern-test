FROM node:16.16.0-alpine3.15 as common-build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV SERVER_HOST = 192.168.0.12
ENV SERVER_PORT = 3000

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install -g serve

# add app
COPY . ./
# start app
CMD [ "npm", "run", "deploy" ]
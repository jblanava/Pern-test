FROM node:16.16.0-alpine3.15 as common-build-stage

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 2000
CMD [ "npm", "run", "serve" ]
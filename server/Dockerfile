FROM node:16.16.0-alpine3.15 as common-build-stage

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm install

EXPOSE 2000
CMD [ "npm", "run", "serve" ]
FROM node:16.16.0-alpine3.15 as common-build-stage

# Create app directory
RUN mkdir -p /app
WORKDIR /app


COPY ./package.json  .
COPY ./package-lock.json  .
# install app dependencies
RUN npm install 


# add app
COPY ./index.ts ./index.ts
COPY ./db.ts ./db.ts
COPY ./tsconfig.json ./tsconfig.json
COPY ./database.sql ./database.sql

# Bundle app source
COPY . /usr/src/app


EXPOSE 2000
CMD [ "npm", "run", "serve" ]
FROM node:16.16.0-alpine3.15 as common-build-stage

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# ENV POSTGRES_HOST=postgres
# ENV POSTGRES_PORT=5432
# ENV POSTGRES_DB=postgres
# ENV POSTGRES_USER=postgres
# ENV POSTGRES_PASSWORD=password
# ENV DATABASE_URL=postgres://postgres:password@postgres:5432/postgres

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 2000
CMD [ "npm", "run", "serve" ]
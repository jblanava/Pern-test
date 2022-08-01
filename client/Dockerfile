FROM node:16.16.0-alpine3.15 as common-build-stage

# set working directory
WORKDIR /app/

COPY ./package.json  .package.json
COPY ./package-lock.json  .package-lock.json
# install app dependencies
RUN npm install 


# add app
COPY ./src ./src
COPY ./public ./public
COPY ./tsconfig.json ./tsconfig.json

# start app
RUN npm run build

FROM node:16.16.0-alpine3.15 as final-app 

WORKDIR /root/
COPY --from=common-build-stage /app/build/ ./build
RUN npm install -g serve

EXPOSE 3000
CMD [ "serve", "-s", "build" ]
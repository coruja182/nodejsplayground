FROM node:16-alpine3.14

# Create app directory
WORKDIR /usr/src/app-ui

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

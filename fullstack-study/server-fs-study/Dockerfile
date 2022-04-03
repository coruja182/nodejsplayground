FROM node:16-alpine3.14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon && npm install

# COPY . .

EXPOSE 3000
# CMD [ "node", "./bin/www"]

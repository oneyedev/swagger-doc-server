FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src src

EXPOSE 4242

CMD [ "npm", "start"]
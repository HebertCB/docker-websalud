FROM node:10-alpine
WORKDIR /usr/src/app
COPY nodejs-express-mysql-master/package*.json ./
RUN npm install
COPY /nodejs-express-mysql-master .
EXPOSE 3000
CMD [ "node", "server.js" ]

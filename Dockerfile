FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
RUN yarn global add nodemon
COPY . .

CMD [ "nodemon", "--exec", "babel-node", "index.js" ]

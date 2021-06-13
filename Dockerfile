FROM node:14

ARG port

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE $port

CMD [ "npm", "run", "start:dev" ]
FROM node:latest

LABEL maintainer="Leonardo Lauretti <leonardolauretti@hotmail.com>"

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm config set loglevel warn \
    && npm config set maxsockets 5 \
    && npm config set progress false \
    && npm i

COPY . .

EXPOSE 3339

CMD [ "npm", "run", "start:prod" ]
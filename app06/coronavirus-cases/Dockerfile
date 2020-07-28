FROM node:12.7-alpine AS build-step
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node
COPY package.json  ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 4201
RUN npm run start


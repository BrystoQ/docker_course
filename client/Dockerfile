# pull official base image
FROM alpine:3.17

FROM node:18

# set working directory
WORKDIR /usr/src/client

# install app dependencies$
COPY package*.json ./

RUN npm install

# add app
COPY . ./

EXPOSE 3000

# start app
CMD [ "yarn", "start" ]
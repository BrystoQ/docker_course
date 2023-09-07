# Use Alpine with node 18
FROM node:18-alpine as dev

USER node
# Create server directory
WORKDIR /usr/src/server

EXPOSE 3000

# Use Alpine with node 18
FROM node:18-alpine as production
# Use user node
USER node

# Create server directory
WORKDIR /usr/src/server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . ./

EXPOSE 3001
# Start the Node.js application
CMD [ "yarn", "start" ]
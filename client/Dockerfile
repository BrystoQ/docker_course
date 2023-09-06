# Use Alpine with node 18
FROM node:18-alpine AS dev

USER node
# Create client directory
WORKDIR /usr/src/client

EXPOSE 3000

CMD [ "yarn", "start" ] 

# Use Alpine with node 18
FROM node:18-alpine AS production
# Use user node
USER node

# Create client directory
WORKDIR /usr/src/client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . ./

EXPOSE 3000
# Start the Node.js application
CMD [ "yarn", "start" ] 
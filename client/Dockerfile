# Use Alpine with node 18
FROM node:18-alpine AS dev

USER node
# Create client directory
WORKDIR /usr/src/client

EXPOSE 3000

CMD [ "npm", "start" ] 

# Use Alpine with node 18
FROM node:18-alpine as build

# Create build directory
WORKDIR /build

# Bundle app source
COPY . .

# Install app dependencies for build in function of package-lock.json
RUN npm ci
# Execute build
RUN npm run build

# Use Nginx with alpine 18 for production
FROM nginx:alpine3.18-slim as production

# Copy the build content from the "build" stage to Nginx HTML directory
COPY --from=build /build/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command to run Nginx server
CMD ["nginx", "-g", "daemon off;"]
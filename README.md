# Docker Course

This Docker tutorial uses the MERN stack (MongoDB, Express.js, React.js, Node.js) and Docker for containerization. It allows you to deploy the application in both development and production environments using Docker containers.

## Prerequisites

Ensure that you have the following installed on your system:

- [Docker](https://www.docker.com/products/docker-desktop/).
- [Docker Compose] (https://docs.docker.com/compose/)

## Launching the Development Environment

To start the Docker containers in a development environment, use the following command:

```
docker-compose up --build --detach
```

This command will build and start the necessary containers for development, including the backend server and the frontend application.

## Accessing the Development Containers

To access the development containers, use the following commands:

- Access the server container:

```
docker exec -it project_server sh
```

- Access the client container:

```
docker exec -it client_app sh
```

The backend is accessible on port 3001, and the frontend is accessible on port 3000 in the development environment.

## Launching the Production Environment

To start the Docker containers in a production environment, use the following command:

```
docker-compose -f docker-compose.prod.yml up --build --detach
```

This command will build and start the necessary containers for production with the appropriate settings.

In the production environment, the backend is accessible on port 3000, while the frontend is accessible on port 8080.

## ELK

Using of Elasticsearch with Logstash, Kibana and filebeat to visualize logs of my app.

## Configuration

A .env file is required to configure the application. An example .env file is provided under the name .env.sample to show the necessary variables.

To configure your environment, copy the .env.sample file and rename it to .env . Modify the values of the environment variables according to your needs.

Theses files are available on ./.env-sample and ./server/.env-sample

## License

This project is open source and available under the [MIT License](LICENSE).

## Contribution

1. Fork it ( https://github.com/BrystoQ/docker_course/fork )
2. Create your feature branch (`git checkout -b featureName`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin FeatureName`)
5. Create a new Pull Request

## Credits

List the collaborators, authors, or any acknowledgements you wish to add.

## Special Thanks

For assistance in understanding how to install ELK (Elasticsearch, Logstash, Kibana) for my project: [JMousqueton](https://github.com/JMousqueton) and his [github repository] (https://github.com/JMousqueton/elk-cec-docker)
Points to review to make it work correctly.

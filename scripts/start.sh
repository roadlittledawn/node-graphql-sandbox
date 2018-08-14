#!/bin/sh

# Set the project name
export COMPOSE_PROJECT_NAME=graphql-sandbox
# Install project dependencies.
docker-compose run --no-deps --entrypoint yarn app
# Run
docker-compose up

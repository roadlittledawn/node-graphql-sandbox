#!/bin/sh
docker volume prune --filter label=graphql.sandbox.discard=true --force

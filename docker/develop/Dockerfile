# IMPORTANT: Don't use this Dockerfile for production envirements.
# It's designed for development and local usage.

FROM node:current-alpine3.19

USER node:node

RUN mkdir -p /home/node/app/ && \
    chown node:node /home/node/app && \
    chmod 700 /home/node/app

RUN mkdir -p /tmp/app/ && \
    chown node:node /tmp/app && \
    chmod 700 /tmp/app

WORKDIR /home/node/app

ARG NODE_ENV

RUN --mount=type=bind,source=package.json,target=/tmp/app/package.json \
    --mount=type=bind,source=package-lock.json,target=/tmp/app/package-lock.json \
    cd /tmp/app/ && \
    npm clean-install

ENTRYPOINT ["sh", "/home/node/app/docker/develop/entrypoint.sh"]

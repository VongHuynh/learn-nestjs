# BUILD FOR LOCAL DEVELOPMENT
FROM node:18-alpine AS development
WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn install
COPY --chown=node:node . .
USER node
CMD ["yarn", "start:dev"]


# BUILD FOR PRODUCTION
FROM node:18-alpine AS build
WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build
ENV NODE_ENV production
USER node

# PRODUCTION
FROM node:18-alpine AS production
WORKDIR /usr/src/app
RUN mkdir logs && chown -R node:node ./logs && chmod 757 logs
ENV NODE_ENV production

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# CMD ["node", "/usr/src/app/dist/src/main.js" ]
CMD ["yarn", "start:prod"]
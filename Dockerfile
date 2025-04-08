# -- Base stage

FROM node:18-alpine as base

#create app directory
WORKDIR /app

# -- Build Dependency Stage
FROM base AS dependencies

# Install app dependencies
COPY package*.json ./

RUN npm install

# -- Build Stage
FROM dependencies AS build

WORKDIR /app

COPY . .

RUN npm run build

# -- Release stage

FROM node:18-alpine

WORKDIR /app

COPY --from=dependencies /app/package.json ./

RUN npm install

COPY --from=build /app/dist ./dist

RUN mkdir -p /app/src/data && echo '{}' > /app/src/data/carrierCodes.json

RUN mkdir ./logs

EXPOSE 3000

CMD ["node", "dist/server.js"]

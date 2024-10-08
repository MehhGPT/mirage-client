FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
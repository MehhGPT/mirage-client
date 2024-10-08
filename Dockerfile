# mirage-client/Dockerfile

# Use Node.js image for building the application
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN yarn build

# Install `serve` to serve the built app
RUN yarn -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]
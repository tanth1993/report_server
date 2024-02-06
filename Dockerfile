# Create image based on the official Node image from dockerhub
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app
COPY package-lock.json /app

RUN npm install

# Get all the code needed to run the app
COPY . /app

# Expose the port the app runs in
EXPOSE 3099

# Serve the app
CMD ["npm", "start"]

# Topic: Docker & Containerization Basics
# Notes: "It works on my machine!" - Docker solves this permanently.

## What is a Container?
- A lightweight, standalone, executable package that includes everything needed to run a piece of software (code, runtime, system tools, libraries).
- Unlike Virtual Machines (VMs), containers share the host OS kernel, making them incredibly fast and resource-efficient.

## Example: Dockerfile for a Node.js App
```dockerfile
# 1. Start from an official Node.js image (Alpine is a tiny Linux distribution)
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package.json and install dependencies first (for caching)
COPY package*.json ./
RUN npm install --production

# 4. Copy the rest of the application code
COPY . .

# 5. Expose the port the app runs on
EXPOSE 3000

# 6. Command to start the app
CMD ["node", "server.js"]
```

## Essential Commands
- `docker build -t my-node-app .` (Builds an image from the Dockerfile)
- `docker run -p 8080:3000 my-node-app` (Runs the image as a container, mapping port 8080 on your laptop to 3000 in the container)

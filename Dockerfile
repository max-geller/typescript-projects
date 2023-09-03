# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all the project files into the container
COPY . .

# Build your TypeScript projects
RUN npx tsc

# Expose the port your Node.js app will listen on
EXPOSE 3000

# Command to run your Node.js application
CMD ["node", "dist/app.js"]
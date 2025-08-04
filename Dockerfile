# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json if available (assuming a Node.js app)
# COPY package*.json ./

# Install dependencies (if any)
# RUN npm install

ENV RAPIDAPI_KEY='e11ebaa611mshcabaae73e8bdde9p185160jsnc132412d7ede'

# Copy the current directory contents into the container at /app
COPY . .

# Expose ports for frontend and proxy server
EXPOSE 3000 4000

# Install serve globally
RUN npm install -g serve

# Command to run both proxy server and frontend server
CMD ["sh", "-c", "node server.js & serve -s . -l 3000"]
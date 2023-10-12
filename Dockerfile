# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build your React app (modify this if you're using yarn)
RUN npm run build

# Expose the port your app will run on (typically 3000 for React)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

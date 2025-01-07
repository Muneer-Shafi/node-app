# Use Node.js LTS version as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript app
RUN npm run build

# Expose the port the app will run on
EXPOSE 8000

# Command to start the app
CMD ["node", "dist/index.js"]

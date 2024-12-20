# Use Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Expose API port and start
EXPOSE 8080
CMD ["npm", "start"]

# user-interface/Dockerfile
FROM node:18

WORKDIR /app

# Install CRACO globally
RUN npm install -g @craco/craco

# Copy package.json and package-lock.json to install local dependencies
COPY package.json package-lock.json ./

# Install all dependencies (including CRACO locally)
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the React frontend using CRACO
RUN npm run build

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the React app (without automatically opening the browser)
CMD ["npm", "start", "--", "--no-open"]
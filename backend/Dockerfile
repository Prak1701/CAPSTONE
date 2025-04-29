FROM node:18

WORKDIR /app

# Copy only the package files first for better Docker cache utilization
COPY package*.json ./

# Install dependencies inside the container (avoids host-native issues)
RUN npm install

# Now copy the rest of your app's source code
COPY . .

# Expose your backend port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]

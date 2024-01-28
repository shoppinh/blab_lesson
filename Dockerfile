# Use the official Node.js image with the specified version
FROM node:14.17.5
# Set working directory
WORKDIR /app

# Install Yarn globally
RUN npm install -g yarn@1.22.5 --force

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Command to run your application
CMD ["yarn", "start"]

FROM node:alpine

ENV NODE_ENV=production

# Install app
WORKDIR /usr/src/app
RUN npm install -g serve
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

# Expose port and enable traefik proxy
EXPOSE 5000
LABEL traefik.enable="true"

# Run app
CMD ["serve", "-s", "-d", "build"]

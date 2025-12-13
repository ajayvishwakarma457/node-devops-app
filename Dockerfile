# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --production
# COPY src ./src
# EXPOSE 3000
# CMD ["node", "src/server.js"]




FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY src ./src

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "src/server.js"]

# Build stage
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build ./
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]

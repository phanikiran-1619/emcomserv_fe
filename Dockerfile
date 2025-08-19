FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

# Start React dev server on 0.0.0.0 so it is reachable
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "8000"]

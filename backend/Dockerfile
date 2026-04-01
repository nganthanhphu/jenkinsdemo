FROM node:18-alpine as builder
WORKDIR /
COPY package*.json ./
RUN npm install

FROM node:18-alpine
WORKDIR /
COPY --from=builder /node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
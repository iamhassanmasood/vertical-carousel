FROM node:16-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .env
RUN export $(cat .env | xargs) && npm run build
FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

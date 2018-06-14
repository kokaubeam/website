FROM node:9.4-alpine as dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 35729
CMD npm start

FROM dev as test
ENV CI true
RUN npm run test

FROM dev as build
RUN npm run build

FROM nginx:1.13-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

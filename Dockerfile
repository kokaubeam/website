FROM node:12.4-alpine as dev
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
EXPOSE 35729
CMD yarn start

FROM dev as test
ENV CI true
RUN yarn test

FROM dev as build
RUN yarn build

FROM nginx:1.15-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

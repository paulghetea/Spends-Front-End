FROM node:16-alpine as build-step

RUN mkdir -p /spends-front

WORKDIR /spends-front

COPY package.json /spends-front

RUN npm install

COPY . /spends-front

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-step /spends-front/dist/spends-front /usr/share/nginx/html

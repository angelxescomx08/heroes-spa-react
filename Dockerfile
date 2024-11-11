
FROM node:19-alpine3.15 AS development
WORKDIR /app
COPY package.json package.json
RUN npm install


FROM node:19-alpine3.15 AS builder
WORKDIR /app
COPY --from=development /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN npm run build


FROM nginx:1.23.3 AS prod
EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx","-g", "daemon off;" ]









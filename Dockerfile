FROM node:16.15.1
WORKDIR /var/www
COPY . .
EXPOSE 3000
RUN npm install
CMD npm run build

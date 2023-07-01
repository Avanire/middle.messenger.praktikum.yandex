FROM node:16.15.1
RUN mkdir "app"
WORKDIR app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]

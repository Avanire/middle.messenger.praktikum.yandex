FROM node:16.15.1
WORKDIR dist
COPY . .
RUN npm install
RUN npm run build
EXPOSE 80
CMD ["node", "server.js"]
